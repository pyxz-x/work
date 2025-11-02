"""
-*- coding: utf-8 -*-
@Time : 2025-10-12 20:24
@File : 谷歌搜索_pdfur_work4.py
@Author : 大漂亮lzh
@Project : pythonCode
"""
import concurrent.futures
import os
import random
from time import sleep
import json
import requests
from lxml import etree
import urllib3

urllib3.disable_warnings()


class GETLINK:
    inputfile_name = ""
    page_links_path = ""
    input_value_getted_path = ""
    proxy = {}
    max_workers = 5   # 现成默认为5

    def __init__(self):
        self.cookies = {}
        self.pagelinks_getted = []
        self.input_value = []
        self.input_value_getted = {}


    # 获取已经获取到的pagelink
    def get_GettedLinks(self):
        if os.path.exists(self.page_links_path):
            with open(self.page_links_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
                for line in lines:
                    self.pagelinks_getted.append(json.loads(line)["url"])

    # 获取cookie
    def get_cookies_(self):
        with open("cookies.json", "r", encoding="utf-8") as f:
            self.cookies = json.loads(f.read())
        print(self.cookies)

    # 获取input
    def get_input_value(self):
        with open(self.inputfile_name, "r", encoding="utf-8") as f:
            datas = f.readlines()
            for data in datas:
                self.input_value.append(json.loads(data))

    # 获取已经获取到的input及对应的url
    def get_InputValueGetted(self):
        if os.path.exists(self.input_value_getted_path):
            fp = open(self.input_value_getted_path, "r", encoding="utf")
            self.input_value_getted = json.load(fp)

    # 获取页面url 递归获取
    def get_links(self, url, all_json):
        # 获取实效url
        shixiao_pagelink = []
        if os.path.exists("shixiao_pagelink.txt"):
            shixiao_pagelink = open(
                "shixiao_pagelink.txt", "r", encoding="utf-8"
            ).readlines()
        if url + "\n" in shixiao_pagelink:
            print(f"失效pagelink 跳过 {url}")
            return
        print(f"正在获取 {url}")
        headers = {
            "referer": "https://www.google.com/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        }
        proxies = self.proxy
        resp = requests.get(
            url,
            headers=headers,
            cookies=self.cookies,
            proxies=proxies,
            verify=False,
        )
        sleep(random.randint(0, 1))
        html = etree.HTML(resp.text)
        # print(resp.text)
        # 失效url
        shixiao_div = html.xpath('//div[@class="card-section"]')
        titles = html.xpath('//h3[@class="LC20lb MBeuO DKV0Md"]')
        result_div = html.xpath('//div[@class="MjjYud"]')
        if len(shixiao_div) > 0 and len(titles) == 0:  # 失效url 直接跳过
            open("shixiao_pagelink.txt", "a+", encoding="utf-8").write(url + "\n")
            print(f"失效pagelink {url}")
            return
        # cookie失效或者ip失效
        if len(result_div) == 0 and len(shixiao_div) == 0 and len(titles) == 0:
            self.get_cookies_()
            self.get_links(url, all_json)  # 如果此请求无效则再次进行该url的请求并携带新的cookie

        net_page = html.xpath("//a[@class='LLNLxf']")
        page_links = html.xpath("//a[@class='fl']/@href")
        if len(net_page) > 0:
            page_Lastlink = (
                "https://www.google.com" + page_links[-1]
            )  # 获取这一页的最后一个link 进行递归
            # 存储pagelink
            with open(self.page_links_path, "a+", encoding="utf") as f:
                if url not in self.pagelinks_getted:
                    self.pagelinks_getted.append(url)
                    all_json["url"] = url
                    f.write(json.dumps(all_json, ensure_ascii=False) + "\n")
                    print(f"{url}\t已存储")
                for link in page_links:
                    if "https://www.google.com" + link not in self.pagelinks_getted:
                        link_ = "https://www.google.com" + link
                        all_json["url"] = link_
                        f.write(json.dumps(all_json, ensure_ascii=False) + "\n")
                        self.pagelinks_getted.append(link_)
                        print(f"{link_}\t已存储")
            # 存储input进度
            self.input_value_getted[all_json['input']] = {
                "url": url,
                "source": all_json["source"],
                "lang": all_json["lang"],
            }
            with open(self.input_value_getted_path, "w", encoding="utf") as fp:
                fp.write(json.dumps(self.input_value_getted, ensure_ascii=False))
            self.get_links(page_Lastlink, all_json)

        else:
            # 存储pagelink
            with open(self.page_links_path, "a+", encoding="utf") as f:
                if url not in self.pagelinks_getted:
                    self.pagelinks_getted.append(url)
                    all_json["url"] = url
                    f.write(json.dumps(all_json, ensure_ascii=False) + "\n")
                    print(f"{url}\t已存储")
                for link in page_links:
                    if "https://www.google.com" + link not in self.pagelinks_getted:
                        link_ = "https://www.google.com" + link
                        all_json["url"] = link_
                        f.write(json.dumps(all_json, ensure_ascii=False) + "\n")
                        self.pagelinks_getted.append(link_)
                        print(f"{link_}\t已存储")
            # 存储input进度
            self.input_value_getted[all_json['input']] = {
                "url": url,
                "source": all_json["source"],
                "lang": all_json["lang"],
            }
            with open(self.input_value_getted_path, "w", encoding="utf") as fp:
                fp.write(json.dumps(self.input_value_getted, ensure_ascii=False))

    # 主函数
    def run_GetPageLinks(self):
        base_url = "https://www.google.com/search?q={}&sca_esv=db58c19f0507c741&sxsrf=AE3TifN97wGIyWza2EbuBYKa2yXOT6lZSw:1760264697583&ei=-YHraKyzI-iqvr0P1LzR-Ao&start=0&sa=N&sstk=Af77f_cWlwqf8K4dahR2Wv7zD8omr0rUtYibsg0CGkzx-53dc7IZxnO7-cbN_FK6w8cUVAO7epQ0fWsib9sxotb8z7g5lJHgwQfEgA-6twu7mdRmZGQwZ1nsfDAqegko536U&ved=2ahUKEwjsk4qAuZ6QAxVola8BHVReFK84WhDy0wN6BAgJEAQ&biw=1536&bih=695&dpr=1.25"
        self.get_GettedLinks()
        self.get_input_value()
        self.get_cookies_()
        self.get_InputValueGetted()
        for data_json in self.input_value:
            try:
                # 构建all_json
                self.all_json["input"] = input_value = data_json["input"]
                self.all_json["lang"] = data_json["lang"]
                if "source" in list(data_json.keys()):
                    self.all_json["source"] = data_json["source"]
                else:
                    self.all_json["source"] = ''
                url = base_url.format(input_value)
                if input_value in list(self.input_value_getted.keys()):
                    if len(self.input_value_getted) != 0:
                        input_value_last, _ = list(self.input_value_getted.items())[-1]
                        if input_value == input_value_last:
                            url = _["url"]
                            input_value = input_value_last
                        else:
                            print(f"{input_value} 已获取")
                            continue
                self.get_links(url, input_value)
            except Exception as e:
                print(e)
                continue

    def run_GETPageLink_POOL(self):
        # 使用 ThreadPoolExecutor 来并行处理
        with concurrent.futures.ThreadPoolExecutor(max_workers=self.max_workers) as executor:
            futures = []
            base_url = "https://www.google.com/search?q={}&sca_esv=db58c19f0507c741&sxsrf=AE3TifN97wGIyWza2EbuBYKa2yXOT6lZSw:1760264697583&ei=-YHraKyzI-iqvr0P1LzR-Ao&start=0&sa=N&sstk=Af77f_cWlwqf8K4dahR2Wv7zD8omr0rUtYibsg0CGkzx-53dc7IZxnO7-cbN_FK6w8cUVAO7epQ0fWsib9sxotb8z7g5lJHgwQfEgA-6twu7mdRmZGQwZ1nsfDAqegko536U&ved=2ahUKEwjsk4qAuZ6QAxVola8BHVReFK84WhDy0wN6BAgJEAQ&biw=1536&bih=695&dpr=1.25"
            self.get_GettedLinks()
            self.get_input_value()
            self.get_cookies_()
            self.get_InputValueGetted()
            for data_json in self.input_value:
                all_json = {
                    "url": "",
                    "input": "",
                    "source": "",
                    "lang": "",
                }
                try:
                    # 构建all_json
                    all_json["input"] = input_value = data_json["input"]
                    all_json["lang"] = data_json["lang"]
                    if "source" in list(data_json.keys()):
                        all_json["source"] = data_json["source"]
                    else:
                        all_json["source"] = ''
                    url = base_url.format(input_value)
                    if input_value in list(self.input_value_getted.keys()):
                        if len(self.input_value_getted) != 0:
                            input_value_last, _ = list(self.input_value_getted.items())[-1]
                            if input_value == input_value_last:
                                url = _["url"]
                                input_value = input_value_last
                            else:
                                print(f"{input_value} 已获取")
                                continue
                    futures.append(executor.submit(self.get_links, url, all_json))
                except Exception as e:
                    print(e)

            # 等待所有任务完成
            for future in concurrent.futures.as_completed(futures):
                try:
                    future.result()  # 获取结果，以便捕获异常
                except Exception as e:
                    print(e)
                    continue  # 即使某个任务失败，也继续执行其他任务
