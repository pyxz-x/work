import os
from time import sleep
import json
import requests
from lxml import etree
from getCookies import get_cookies


class GETLINK:
    inputfile_name = ""
    page_links_path = ""
    input_value_getted_path = ""

    def __init__(self):
        self.cookies = {}
        self.pagelinks_getted = []
        self.input_value = []
        self.input_value_getted = {}
        self.all_json = {
            "url": "",
            "input": "",
            "source": "",
            "lang": "",
        }

    # 获取已经获取到的pagelink
    def get_GettedLinks(self):
        if os.path.exists(self.page_links_path):
            with open(self.page_links_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
                for line in lines:
                    self.pagelinks_getted.append(json.loads(line)["url"])

    # 获取cookie
    def get_cookies_(self):
        self.cookies = get_cookies()
        while len(self.cookies) == 0:
            sleep(15)
            self.cookies = get_cookies()
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
    def get_links(self, url, input_value_):
        print(f"正在获取 {url}")
        headers = {
            "referer": "https://www.google.com/",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
        }
        proxies = {
            "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
            # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
        }
        resp = requests.get(
            url,
            headers=headers,
            cookies=self.cookies,
            proxies=proxies,
            verify=False,
        )
        # sleep(2)
        html = etree.HTML(resp.text)
        # print(resp.text)
        # 失效url
        shixiao_div = html.xpath('//div[@class="card-section"]')
        titles = html.xpath('//h3[@class="LC20lb MBeuO DKV0Md"]')
        result_div = html.xpath('//div[@class="MjjYud"]')
        if len(shixiao_div) > 0 and len(titles) == 0:
            return
        if len(result_div) == 0 and len(shixiao_div) == 0 and len(titles) == 0:
            self.get_cookies_()
            self.get_links(
                url, input_value_
            )  # 如果此请求无效则再次进行该url的请求并携带新的cookie

        net_page = html.xpath("//a[@class='LLNLxf']")
        page_links = html.xpath("//a[@class='fl']/@href")
        if len(net_page) > 0:
            page_Lastlink = "https://www.google.com" + page_links[-1]   # 获取这一页的最后一个link 进行递归
            # 存储pagelink
            with open(self.page_links_path, "a+", encoding="utf") as f:
                if url not in self.pagelinks_getted:
                    self.pagelinks_getted.append(url)
                    self.all_json["url"] = url
                    f.write(json.dumps(self.all_json, ensure_ascii=False) + "\n")
                    print(f"{url}\t已存储")
                for link in page_links:
                    if "https://www.google.com" + link not in self.pagelinks_getted:
                        link_ = "https://www.google.com" + link
                        self.all_json["url"] = link_
                        f.write(json.dumps(self.all_json, ensure_ascii=False) + "\n")
                        self.pagelinks_getted.append(link_)
                        print(f"{link_}\t已存储")
            # 存储input进度
            self.input_value_getted[input_value_] = {
                "url": url,
                "source": self.all_json["source"],
                "lang": self.all_json["lang"],
            }
            with open(self.input_value_getted_path, "w", encoding="utf") as fp:
                fp.write(json.dumps(self.input_value_getted, ensure_ascii=False))
            self.get_links(page_Lastlink, input_value_)

        else:
            # 存储pagelink
            with open(self.page_links_path, "a+", encoding="utf") as f:
                if url not in self.pagelinks_getted:
                    self.pagelinks_getted.append(url)
                    self.all_json["url"] = url
                    f.write(json.dumps(self.all_json, ensure_ascii=False) + "\n")
                    print(f"{url}\t已存储")
                for link in page_links:
                    if "https://www.google.com" + link not in self.pagelinks_getted:
                        link_ = "https://www.google.com" + link
                        self.all_json["url"] = link_
                        f.write(json.dumps(self.all_json, ensure_ascii=False) + "\n")
                        self.pagelinks_getted.append(link_)
                        print(f"{link_}\t已存储")
            # 存储input进度
            self.input_value_getted[input_value_] = {
                "url": url,
                "source": self.all_json["source"],
                "lang": self.all_json["lang"],
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


a = GETLINK()
a.inputfile_name = "zuzhuang1_pdf.json"
a.page_links_path = "page_links.json"
a.input_value_getted_path = "input_getted.json"
a.run_GetPageLinks()
