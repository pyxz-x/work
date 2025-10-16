import json
from time import sleep, time
from DrissionPage import Chromium, ChromiumOptions
from undetected_chromedriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def get_cookies():
    url = "https://www.google.com/search?q=%E4%BD%A0%E5%A5%BD&sca_esv=bf7843588f50460d&sxsrf=AE3TifP5MhH3J7Ud1b_arBjMwRumhgNDOw:1759225903553&ei=L6jbaITNIdHFkPIP2L3R4QU&start=10&sa=N&sstk=Af77f_duQQWAQOqWC62UBPxStX5a97Laxm59mqlYXy-Isc1Uh5W5S9r6udPm8cWTFYwkuYHnRNxf1tckoTrEmuqwFJg_17e7mQdsfg&ved=2ahUKEwjEoL6Ym4CQAxXRIkQIHdheNFwQ8tMDegQIBhAE&cshid=1759226136511859&biw=1920&bih=850&dpr=1"
    # query = '你好'

    # 创建ChromeOptions对象，并设置一些选项
    options = Options()
    # 代理配置
    # proxy = {
    #     "http": "http://127.0.0.1:8080",
    #     "https": "https://127.0.0.1:8080",
    # }
    # options.add_argument(f'--proxy-server={proxy["https"]}')
    # options.add_argument("--headless")

    # 创建Chrome对象，指定version_main避免网络请求
    try:
        # 首先尝试指定Chrome版本避免网络请求
        driver = Chrome(options=options)
    except:
        # 如果失败，尝试使用本地chromedriver
        import os

        driver_path = None
        # 常见的chromedriver路径
        possible_paths = [
            "/usr/local/bin/chromedriver",
            "/usr/bin/chromedriver",
            "/opt/homebrew/bin/chromedriver",
            "chromedriver",
        ]
        for path in possible_paths:
            if os.path.exists(path):
                driver_path = path
                print(driver_path)
                break

        if driver_path:
            from selenium import webdriver
            from selenium.webdriver.chrome.service import Service

            service = Service(driver_path)
            driver = webdriver.Chrome(service=service, options=options)
        else:
            # 最后尝试不指定版本
            driver = Chrome(options=options)
    cookie_ = {}

    try:
        # 访问谷歌首页
        driver.get(url)

        # 等待搜索框加载完成
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "q")))

        # time.sleep(10)
        # 等待页面加载完成（通过检查搜索结果的存在）
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "search"))
        )

        # 获取cookie
        cookies = driver.get_cookies()
        cookie_ = {cookie["name"]: cookie["value"] for cookie in cookies}
        # input()
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        driver.quit()  # Ensure the driver quits no matter what

    return cookie_


# ========== 仅新增下面这一段循环逻辑 ==========
if __name__ == "__main__":
    while True:
        try:
            cks = get_cookies()
            open("cookies.json", "w").write(json.dumps(cks, indent=4))
            print(cks)
        except Exception as e:
            print(e)
            continue
        sleep(30)
