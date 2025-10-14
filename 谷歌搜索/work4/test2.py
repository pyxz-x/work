"""
-*- coding: utf-8 -*-
@Time : 2025-10-12 16:18
@File : test2.py
@Author : 大漂亮lzh
@Project : pythonCode
"""

def to_json(url_, cookies_, input_, source_, language_):
    headers = {
        "referer": "https://www.google.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    }
    proxies = {
        "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
        # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    }

    resp = requests.get(
        url_,
        headers=headers,
        cookies=cookies_,
        proxies=proxies,
        verify=False,
    )
    all_json = {
        "url": "",
        "title": "",
        "摘要": "",
        "input": input_,
        "source": source_,
        "语言": language_,
    }
    # resp = requests.get(url, params=params, headers=headers, cookies=cookies)
    # resp.encoding = 'utf-8'
    html = etree.HTML(resp.text)
    # print(resp.text)
    shixiao_div = html.xpath('//div[@class="card-section"]')
    titles = html.xpath('//h3[@class="LC20lb MBeuO DKV0Md"]/text()')
    result_div = html.xpath('//div[@class="MjjYud"]')
    if len(shixiao_div) > 0 and len(titles) == 0:  # 失效url 直接跳过
        return
    if len(result_div) == 0 and len(shixiao_div) == 0 and len(titles) == 0:
        cookies_ = get_cookies()
        while len(cookies_) == 0:
            sleep(15)
            cookies_ = get_cookies()
        to_json(url_, cookies_, input_, source_, language_)
    if len(result_div) != 0:
        finished_json_[url_] = [input_, language_, page_]
        open("finished.json", "w", encoding="utf-8").write(url_+'\n')
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
                open("result.json", "a", encoding="utf").write(
                    json.dumps(all_json, ensure_ascii=False) + "\n"
                )
                print(input_, "\t", all_json)