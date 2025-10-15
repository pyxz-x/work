"""
-*- coding: utf-8 -*-
@Time : 2025-10-12 20:24
@File : 谷歌搜索_pdfur_work4.py
@Author : 大漂亮lzh
@Project : pythonCode
"""

import os
from time import sleep
import json
import requests
from lxml import etree
from getCookies import get_cookies

# 获取已完成的page_link
finished = []
if os.path.exists("finished.txt"):
    finished = open("finished.txt", "r", encoding="utf-8").readlines()


def to_json(url_, cookies_, input_, source_, language_):
    print(cookies)
    print(f'正在获取 {url}')
    f_url = url_
    # 获取已获得的pdf url
    pdf_urls = []
    if os.path.exists("result.json"):
        datas = open("result.json", "r", encoding="utf").readlines()
        for data in datas:
            pdf_urls.append(json.loads(data)["url"])
    # 获取实效url
    shixiao_pagelink = []
    if os.path.exists("shixiao_pagelink.txt"):
        shixiao_pagelink = open("shixiao_pagelink.txt", "r", encoding="utf-8").readlines()
    if url_+'\n' in shixiao_pagelink:
        print(f'失效pagelink 跳过 {url_}')
        return
    headers = {
        "referer": "https://www.google.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    }
    proxies = {
        "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
        "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    }

    resp = requests.get(
        url_,
        headers=headers,
        cookies=cookies_,
        proxies=proxies,
        verify=False,
    )
    sleep(2)
    all_json = {
        "url": "",
        "title": "",
        "摘要": "",
        "input": input_,
        "source": source_,
        "语言": language_,
    }
    # resp.encoding = 'utf-8'
    html = etree.HTML(resp.text)
    # print(resp.text)
    shixiao_div = html.xpath('//div[@class="card-section"]')
    titles = html.xpath('//h3[@class="LC20lb MBeuO DKV0Md"]/text()')
    result_div = html.xpath('//div[@class="MjjYud"]')

    if len(shixiao_div) > 0 and len(titles) == 0:  # 失效url 直接跳过
        open('shixiao_pagelink.txt', 'a+', encoding="utf-8").write(url_+'\n')
        print(f'失效pagelink {url_}')
        return
    if len(result_div) == 0 and len(shixiao_div) == 0 and len(titles) == 0:
        sleep(15)
        cookies_ = get_cookies()
        while len(cookies_) == 0:
            sleep(15)
            cookies_ = get_cookies()
        to_json(url_, cookies_, input_, source_, language_)
    if len(result_div) != 0:
        for div in result_div:
            title = div.xpath('.//h3[@class="LC20lb MBeuO DKV0Md"]/text()')
            if (
                len(title) > 0
                and div.xpath('.//a[@class="zReHs"]/@href')
                and div.xpath('.//div[@class="kb0PBd A9Y9g"]//text()')
            ):
                url_ = div.xpath('.//a[@class="zReHs"]/@href')[0]
                dep = div.xpath('.//div[@class="kb0PBd A9Y9g"]//text()')
                all_json["url"] = url_
                all_json["title"] = title[0]
                all_json["摘要"] = "".join(dep)
                if url_ in pdf_urls:
                    return
                open("result.json", "a", encoding="utf").write(
                    json.dumps(all_json, ensure_ascii=False) + "\n"
                )

                print(input_, "\t", all_json)
        open("finished.txt", "a+", encoding="utf").write(f_url + "\n")


url_getted = []

cookies = get_cookies()
while len(cookies) == 0:
    sleep(15)
    cookies = get_cookies()
# 读取任务文件
page_links = []
with open("page_links.json", "r", encoding="utf") as f:
    datas = f.readlines()
    for data in datas:
        page_links.append(json.loads(data))
for page_link in page_links:
    try:
        url = page_link["url"]
        input1 = page_link["input"]
        source = page_link["source"]
        language = page_link["lang"]
        if url+'\n' in finished:
            print(f"{url}\t已获取，跳过")
            continue

        # cookies = {
        #     "AEC": "AaJma5sAdjHCxEkMLf71_5MND2RStLhadFTfmuO9LrZ45iRfD2WCavJ13uA",
        #     "NID": "525=RGqvc7MJX5QAkXLqq6u3ce5NIaW3dUZEDFso6noQitSl2CqfXitHV9CBu7wtPa_B8If0UMren1IK96N7HW_agGAgnwfaZiWkZQoE8o1Wu3pDgHS_WPC3P30nKZLMnBW007ymHAht1mWBVkgX3IKV1W-ZxVXT7cJs2FWwx3O1MveaxqWszlbitfjaUN7XpK8AL06o9WDd97HPf-eoAi4ZQ48JVvGWNdqRnRCoMmX9lc_4f1X2eSAjZQ",
        #     "GOOGLE_ABUSE_EXEMPTION": "ID=2e5011dc43211009:TM=1760285425:C=R:IP=23.185.208.66-:S=YDcLwxWJSPG2zjIsdKEBY6I",
        # }

        to_json(url, cookies, input1, source, language)
    except Exception as e:
        print(e)
        continue
