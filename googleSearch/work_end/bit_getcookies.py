"""
# -*- coding: utf-8 -*-
@Time : 2025-10-16 21:24
@File : bite_getcookies.py
@Author : 大漂亮lzh
@Project : pythonCode
"""
import concurrent
import concurrent.futures
import json
from time import sleep
import logger
from selenium import webdriver
from bit_api import *
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def get_cookies(timeout=15):
    browserID = create_browser()
    resp = open_browser(browserID)
    if not resp.get("success"):
        logger.error("浏览器打开失败")
        return

    logger.info("浏览器打开成功，正在连接 selenium ...")

    driverPath = resp["data"]["driver"]
    debuggerAddress = resp["data"]["http"]

    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_experimental_option("debuggerAddress", debuggerAddress)
    chrome_service = Service(driverPath)
    driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
    logger.info("已与 selenium 创建连接")

    try:
        # 等待页面加载完成（最多timeout秒）
        WebDriverWait(driver, timeout).until(
            lambda d: d.execute_script("return document.readyState") == "complete"
        )
        logger.info("search div ......")

        # ✅ 等待目标元素出现（div[@class="MjjYud"]）
        WebDriverWait(driver, timeout).until(
            EC.presence_of_element_located((By.XPATH, '//div[@class="MjjYud"]'))
        )
        cookies = driver.get_cookies()
        if cookies:
            logger.info("div getted ......")

    except Exception as e:
        logger.warning(f"页面未在 {timeout}s 内检测到目标元素: {e}")
        # 关闭比特浏览器
        close_browser(browserID)
        delete_browser(browserID)
        return  # 目标元素未出现就不保存 cookies


    # 只保留 name 和 value
    cookie_pairs = {}
    for c in cookies:
        cookie_pairs[c["name"]] = c["value"]

    # 关闭比特浏览器
    close_browser(browserID)
    delete_browser(browserID)

    # 保存到文件
    with open("cookies.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(cookie_pairs, indent=4, ensure_ascii=False))


if __name__ == "__main__":
    while True:
        with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
            futures_ = []
            for i in range(3):
                futures_.append(executor.submit(executor.submit(get_cookies, timeout=10)))

            for future in concurrent.futures.as_completed(futures_):
                try:
                    future.result()
                except Exception as e:
                    continue
