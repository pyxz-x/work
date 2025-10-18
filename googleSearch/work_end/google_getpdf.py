"""
-*- coding: utf-8 -*-
@Time : 2025-10-12 20:24
@File : 谷歌搜索_pdfur_work4.py
@Author : 大漂亮lzh
@Project : pythonCode
"""

import concurrent.futures
import json
import os
import random
from time import sleep

import requests
import urllib3
from lxml import etree

urllib3.disable_warnings()


class GETPDF:
    reslut_json_path = ""
    proxy = {}
    max_workers = 5  # 线程池配置 默认为5

    def __init__(self):
        self.finished = []
        self.page_links = []
        self.cookies = {}
        # 获取已获得的pdf url
        self.pdf_urls = []

    def get_ip(self):
        # 设置请求头
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
            "Accept-Encoding": "gzip, deflate, br",
        }
        # 测试链接
        url = "http://api.proxy.ipidea.io/getProxyIp?num=1&return_type=txt&lb=4&sb=0&flow=1&regions=&protocol=http"
        resp = requests.get(url)
        return resp.text.replace("\n", "")

    def get_finished(self):
        if os.path.exists("finished.txt"):
            self.finished = open("finished.txt", "r", encoding="utf").readlines()

    def get_page_links(self):
        with open("page_links.json", "r", encoding="utf-8") as f:
            datas = f.readlines()
            for data in datas:
                try:
                #print(1,data)
                #print(2,json.loads(data))
                    self.page_links.append(json.loads(data))
                except Exception as e:
                    continue

    def get_cookies(self):
        with open("cookies.json", "r", encoding="utf-8") as f:
            self.cookies = json.loads(f.read())
        print(self.cookies)

    def get_pdfurl(self):
        if os.path.exists(self.reslut_json_path):
            datas = open(self.reslut_json_path, "r", encoding="utf").readlines()
            for data in datas:
                self.pdf_urls.append(json.loads(data)["url"])

    def get_pdf(self, url_, cookies_, input_, source_, language_):

        f_url = url_

        # 获取实效url
        shixiao_pagelink = []
        if os.path.exists("shixiao_pagelink.txt"):
            shixiao_pagelink = open(
                "shixiao_pagelink.txt", "r", encoding="utf-8"
            ).readlines()
        if url_ + "\n" in shixiao_pagelink:
            print(f"失效pagelink 跳过 {url_}")
            return
        if url_ in self.finished:
            print(f'getted {url_}')
            return
        print(f"正在获取 {url_}")
        headers = {
            "referer": "https://www.google.com/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        }
        proxies = self.proxy
        # proxies = {'http':f'http://{self.get_ip()}'}
        resp = requests.get(
            url_,
            headers=headers,
            cookies=cookies_,
            proxies=proxies,
            verify=False,
        )
        sleep(random.randint(1, 2))
        # print(resp.text)
        all_json = {
            "url": "",
            "title": "",
            "摘要": "",
            "input": input_,
            "source": source_,
            "语言": language_,
        }
        # sleep(random.randint(1, 2))
        # resp.encoding = 'utf-8'
        html = etree.HTML(resp.text)
        shixiao_div = html.xpath('//div[@class="card-section"]')
        titles = html.xpath('//h3[@class="LC20lb MBeuO DKV0Md"]/text()')
        result_div = html.xpath('//div[@class="MjjYud"]')

        if len(shixiao_div) > 0 and len(titles) == 0:  # 失效url 直接跳过
            open("shixiao_pagelink.txt", "a+", encoding="utf-8").write(url_ + "\n")
            print(f"失效pagelink {url_}")
            return
        if len(result_div) == 0 and len(shixiao_div) == 0 and len(titles) == 0:
            # print(resp.text)
            # ip = get_ip().replace('\n', '')
            #  sleep(5)
            #         self.proxy = {
            #  "http": f"http://{ip}",
            #   "https": f"https://{ip}"
            # }
            self.get_cookies()
            self.get_pdf(url_, self.cookies, input_, source_, language_)
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
                    if url_ in self.pdf_urls:
                        print(f"已保存 {url_}")
                        continue
                    open(self.reslut_json_path, "a", encoding="utf").write(
                        json.dumps(all_json, ensure_ascii=False) + "\n"
                    )
                    self.pdf_urls.append(url_)
                    print(input_, "\t", all_json)
            open("finished.txt", "a+", encoding="utf").write(f_url + "\n")
            self.page_links.append(f_url)

    def run_GetPdf(self):
        self.get_finished()
        self.get_page_links()
        self.get_cookies()
        self.get_pdfurl()
        for page_link in self.page_links:
            try:
                url = page_link["url"]
                input1 = page_link["input"]
                source = page_link["source"]
                language = page_link["lang"]
                if url + "\n" in self.finished:
                    print(f"{url}\t已获取，跳过")
                    continue
                self.get_pdf(url, self.cookies, input1, source, language)
            except Exception as e:
                print(e)
                continue

    def run_GETPdf_POOL(self):
        # 使用 ThreadPoolExecutor 来并行处理
        with concurrent.futures.ThreadPoolExecutor(
            max_workers=self.max_workers
        ) as executor:
            futures = []
            self.get_finished()
            self.get_page_links()
            if len(self.cookies) == 0:
                self.get_cookies()
            self.get_pdfurl()
            for page_link in self.page_links:
                try:
                    url = page_link["url"]
                    input1 = page_link["input"]
                    source = page_link["source"]
                    language = page_link["lang"]
                    if url + "\n" in self.finished:
                        print(f"{url}\t已获取，跳过")
                        continue
                    # 将 get_pdf 任务提交给线程池
                    futures.append(
                        executor.submit(
                            self.get_pdf, url, self.cookies, input1, source, language
                        )
                    )
                except Exception as e:
                    print(e)

            # 等待所有任务完成
            for future in concurrent.futures.as_completed(futures):
                try:
                    future.result()  # 获取结果，以便捕获异常
                except Exception as e:
                    print(e)
                    continue  # 即使某个任务失败，也继续执行其他任务

