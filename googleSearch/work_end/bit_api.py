import requests
import time
import random
import logging
import argparse
from bit_config import API_CONFIG, BROWSER_CONFIG

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(threadName)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("browser_automation.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# 读取比特浏览器API地址
BASE_URL = API_CONFIG["base_url"]


def create_browser():
    """创建浏览器窗口"""
    url = f"{BASE_URL}/browser/update"

    # 从配置文件读取浏览器设置
    proxy_config = BROWSER_CONFIG["proxy"]
    fingerprint_config = BROWSER_CONFIG["fingerprint"]
    startup_config = BROWSER_CONFIG["startup"]

    # 构建API请求负载
    payload = {
        "name": '',
        "proxyMethod": proxy_config["method"],
        "workbench": "disable",
        "proxyType": proxy_config["type"],
        "syncTabs": "false",
        "syncCookies": "false",
        "host": proxy_config["host"],
        "platform": startup_config["url"],
        "port": proxy_config["port"],
        "proxyUserName": proxy_config["username"],
        "proxyPassword": proxy_config["password"],
        "clearCacheFilesBeforeLaunch": startup_config["clear_cache"],
        "clearCookiesBeforeLaunch": startup_config["clear_cookies"],
        "randomFingerprint": startup_config["random_fingerprint"],
        "browserFingerPrint": {
            "coreProduct": fingerprint_config["core_product"],
            "coreVersion": random.choice(list(fingerprint_config["core_version"])),
            "ostype": fingerprint_config["ostype"],
            "os": fingerprint_config["os"],
            # "launchArgs": "--headless"
        }
    }

    try:
        response = requests.post(url, json=payload)
        response_data = response.json()

        if response_data["success"]:
            browser_id = response_data["data"]["id"]
            # logger.info(f"创建浏览器成功: {browser_name}, ID: {browser_id}")
            return browser_id
        else:
            logger.error(f"创建浏览器失败: {response_data.get('msg', '未知错误')}")
            return None
    except Exception as e:
        logger.error(f"创建浏览器异常: {str(e)}")
        return None


def open_browser(browser_id):
    """打开浏览器窗口"""
    url = f"{BASE_URL}/browser/open"

    payload = {
        "id": browser_id,
        "queue": True,  # 使用队列方式打开，防止并发错误
        'ignoreDefaultUrls': False,
        # 'newPageUrl': 'https://arcteryx.com/ca/en'
    }

    try:
        response = requests.post(url, json=payload)
        response_data = response.json()

        if response_data["success"]:
            # logger.info(f"打开浏览器成功: {browser_id}")
            return response_data
        else:
            logger.error(f"打开浏览器失败: {response_data.get('msg', '未知错误')}")
            return False
    except Exception as e:
        logger.error(f"打开浏览器异常: {str(e)}")
        return False


def close_browser(browser_id):
    """关闭浏览器窗口"""
    url = f"{BASE_URL}/browser/close"

    payload = {
        "id": browser_id
    }

    try:
        response = requests.post(url, json=payload)
        response_data = response.json()

        if response_data["success"]:
            # logger.info(f"关闭浏览器成功: {browser_id}")
            return True
        else:
            logger.error(f"关闭浏览器失败: {response_data.get('msg', '未知错误')}")
            return False
    except Exception as e:
        logger.error(f"关闭浏览器异常: {str(e)}")
        return False


def delete_browser(browser_id):
    """删除浏览器窗口"""
    url = f"{BASE_URL}/browser/delete"

    payload = {
        "id": browser_id
    }

    try:
        response = requests.post(url, json=payload)
        response_data = response.json()

        if response_data["success"]:
            # logger.info(f"删除浏览器成功: {browser_id}")
            return True
        else:
            logger.error(f"删除浏览器失败: {response_data.get('msg', '未知错误')}")
            return False
    except Exception as e:
        logger.error(f"删除浏览器异常: {str(e)}")
        return False


windows = []


def delete_unused_window():
    url = f"{BASE_URL}/browser/list"
    global windows
    data = {
        "page": 0,
        "pageSize": 100
    }
    while True:
        try:
            response = requests.post(url, json=data).json()
            all_windows = response['data']['list']
            for window in [d['id'] for d in all_windows]:
                if window not in windows:
                    delete_browser(window)
            time.sleep(60 * 60)
        except Exception as e:
            logger.error(f"删除未使用窗口异常: {str(e)}")
            time.sleep(60)
            continue


def get_all_window():
    url = f"{BASE_URL}/browser/pids/all"
    global windows
    while True:
        try:
            response = requests.post(url).json()
            windows = response['data']
            time.sleep(1)
        except Exception as e:
            logger.error(f"获取窗口列表异常: {str(e)}")
            time.sleep(5)
            continue


def browser_no_cycle(browser_name, cycles=5):
    """浏览器循环操作"""
    wait_time = BROWSER_CONFIG["startup"]["wait_time"]
    cooldown_time = BROWSER_CONFIG["startup"]["cooldown_time"]
    global windows

    browser_id = None
    try:
        browser_id = create_browser(browser_name)
        time.sleep(1)

        if not browser_id:
            time.sleep(5)
            logger.error(f'{browser_name}: 创建浏览器失败，等待后重试')
            return

        if not open_browser(browser_id):
            time.sleep(5)
            logger.error(f"浏览器 {browser_name} 打开失败，跳过当前循环")
            close_browser(browser_id)
            delete_browser(browser_id)
            return

        time.sleep(10)
        counter = 0
        while True:
            time.sleep(1)
            if browser_id not in windows or counter > wait_time:
                break
            counter += 1

        if counter < 20:
            print('异常')

        delete_browser(browser_id)
        time.sleep(cooldown_time)

    except Exception as e:
        logger.error(f'{browser_name}: 浏览器循环异常: {str(e)}')
        if browser_id:
            try:
                close_browser(browser_id)
                delete_browser(browser_id)
            except:
                pass
        time.sleep(10)


def parse_arguments():
    """解析命令行参数"""
    parser = argparse.ArgumentParser(description='比特浏览器自动化工具')

    default_threads = BROWSER_CONFIG["threads"]

    parser.add_argument('-b', '--browsers', type=int, default=default_threads["default_browsers"],
                        help=f'要创建的浏览器数量 (默认: {default_threads["default_browsers"]})')
    parser.add_argument('-c', '--cycles', type=int, default=default_threads["default_cycles"],
                        help=f'每个浏览器循环次数 (默认: {default_threads["default_cycles"]})')
    parser.add_argument('-w', '--workers', type=int, default=default_threads["default_max_workers"],
                        help=f'最大线程数 (默认: {default_threads["default_max_workers"]})')

    return parser.parse_args()




