import ssl

import requests

# 在导入其他模块前就禁用SSL验证
ssl._create_default_https_context = ssl._create_unverified_context

from undetected_chromedriver import Chrome
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.proxy import Proxy, ProxyType
import time


def get_cookies():
    url = 'https://www.google.com/search?q=%E5%B0%8F%E5%AD%A6+%E7%94%9F%E7%89%A9+%E7%AB%9E%E8%B5%9B+%E9%A2%98+-%E5%A4%A7%E7%BA%B2+-%E7%9B%AE%E5%BD%95+-%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88+-%E6%95%99%E6%A1%88+-%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0+-%E5%90%8D%E5%8D%95+-%E5%AF%B9%E8%B1%A1+-%E6%88%90%E7%BB%A9+-%E6%89%8B%E5%86%8C+-%E8%A7%84%E8%8C%83+filetype:PDF&sca_esv=8465037a8df9fd56&sxsrf=AE3TifM3ndJX30pUm3J-PYyAyPvQQgGzmw:1760162095802&ei=L_HpaJjlMLim2roPzMOW8AI&start=60&sa=N&sstk=Af77f_fBpmFmZnShB_EL931Uew4vX2SVUrs2-Lvy-0oaeF9hPc5drNTS5ILhzNUqQ9Uc3QxuST6sIoqIbo-zvd8eg22VRWb8Sb5NsAvB8oKu_dKcX5OZbvhDeHKDBE7_Y7uytlnsKF9IAGVvZ9I4YdsNnm3GsbvP06l9Z-0dX2BwD9hBZaAak9dF45EETd1OeEgoiws9yFeban606aZGSv-VIo-N7nWS&ved=2ahUKEwjYuN7jupuQAxU4k1YBHcyhBS44MhDy0wN6BAgJEA8&biw=807&bih=850&dpr=1'
    # query = '你好'

    # 创建ChromeOptions对象，并设置一些选项
    options = Options()
    # 代理配置
    # proxy = {'https': 'http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001'}


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

        # time.sleep(100)
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


# a = get_cookies()
# print(a)
