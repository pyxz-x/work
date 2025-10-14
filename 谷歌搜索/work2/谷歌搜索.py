import os
from time import sleep
import json
import requests

# from curl_cffi import requests
from lxml import etree
from getCookies import get_cookies


def to_json(cookies, input_, source, language, page=0):
    url = "https://www.google.com/search"
    params = {
        "q": input_,
        "sca_esv": "eeca58d8d47b3544",
        "sxsrf": "AE3TifONKB2mQUCcR-QXRiZoXz8w-9pYMA:1759386644697",
        "ei": "FBzeaKOtKrzn2roPxIDAgQU",
        "start": 10 * page,
        "sa": "N",
        "sstk": "Af77f_d8uIpvcIkJlsuCoCuQkrWVYmak44jgh4MlDJWUSlY4Ze1W70OhH-423LBm5UIRQ_JwJngLGPCDxbtAx2PDDURdSUVoVdCUrIwM8c39iPbzBRPAzcZR8xQdf6o2V0zJ",
        "ved": "2ahUKEwijh-v_8YSQAxW8s1YBHUQAMFA4ChDy0wN6BAgKEAQ",
        "biw": "372",
        "bih": "695",
        "dpr": "1.25'",
    }
    headers = {
        "referer": "https://www.google.com/",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    }
    proxy = {
        "http": "https://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001"
    }
    sleep(2)
    resp = requests.get(
        url,
        headers=headers,
        params=params,
        cookies=cookies,
        proxies=proxy,
        verify=False,
    )
    all_json = {
        "url": "",
        "title": "",
        "摘要": "",
        "input": input_,
        "source": source,
        "语言": language,
    }
    # resp = requests.get(url, params=params, headers=headers, cookies=cookies)
    # resp.encoding = 'utf-8'
    html = etree.HTML(resp.text)
    # print(resp.text)
    result_div = html.xpath('//div[@class="MjjYud"]')
    # print(result_div)
    if len(result_div) != 0:
        for div in result_div:
            title = div.xpath('.//h3[@class="LC20lb MBeuO DKV0Md"]/text()')
            if (
                len(title) > 0
                and div.xpath('.//a[@class="zReHs"]/@href')
                and div.xpath('.//div[@class="kb0PBd A9Y9g"]//text()')
            ):
                url = div.xpath('.//a[@class="zReHs"]/@href')[0]
                dep = div.xpath('.//div[@class="kb0PBd A9Y9g"]//text()')
                all_json["url"] = url
                all_json["title"] = title[0]
                all_json["摘要"] = "".join(dep)
                open("result_home.json", "a", encoding="utf").write(
                    json.dumps(all_json, ensure_ascii=False) + "\n"
                )
                print(source, "\t", page, "\t", all_json)
        return 1
    else:
        return 0


if __name__ == "__main__":
    # 读取json文件
    data_jsons = []
    with open(
            "ustc_chouqu_all_1000.json", "r", encoding="utf-8"
    ) as f:
        datas = f.readlines()
        for data in datas:
            data_jsons.append(json.loads(data))
    # 获取已完成的数据
    finished_json = finished_json_ = {}
    if os.path.exists("finished.json"):
        finished_json = open("finished.json", "r", encoding="utf-8")
        finished_json = finished_json_ = json.load(finished_json)
    for data_json in data_jsons:
        input_ = data_json["input"]
        source = data_json["source"]
        language = data_json["lang"]
        page = 0
        if finished_json and source in list(finished_json.keys()):
            source_, _ = list(finished_json.items())[-1]
            if source == source_:
                print(f"{source}\t上次最后，可运行")
                input_ = _[0]
                language = _[1]
                page = _[2] + 1
            else:
                print(f"{source}\t已获取，跳过")
                continue
        cookies = get_cookies()
        while len(cookies) == 0:
            sleep(15)
            cookies = get_cookies()
        print(cookies)
        print(f'获取{input_}\t{page}')
        result = to_json(cookies, input_, source, language, page)
        while result:
            finished_json_[source] = [input_, language, page]
            open("finished_home.json", "w", encoding="utf-8").write(
                json.dumps(finished_json_, ensure_ascii=False)
            )
            page += 1
            # sleep(2)
            result = to_json(cookies, input_, source, language, page)
            print(result)
