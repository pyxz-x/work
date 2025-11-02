import hashlib
import json
import random
import time
import requests
import urllib3
from time import sleep

urllib3.disable_warnings()


def Geetest4_Ocr():
    captcha_id = '7566a19ac888e92ddd22cc6f92d58afd'
    proxy_ip = {}
    retry_count = 2
    url = "http://127.0.0.1:8087/api/geetest4"
    params = {
        "captcha_id": captcha_id
    }
    # 如果提供了代理IP，添加到参数中
    if proxy_ip:
        params["proxy_ip"] = proxy_ip

    headers = {
        "Connection": "Keep-Alive",
        "Accept": "*/*",
        "Accept-Language": "zh-cn",
        "User-Agent": "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)",
        "Host": "127.0.0.1:8087"
    }

    # 如果是重试，添加短暂延迟
    if retry_count > 0:
        time.sleep(retry_count)

    # 使用session确保连接正确管理
    session = requests.Session()
    # 设置连接池参数
    adapter = requests.adapters.HTTPAdapter(
        pool_connections=1,
        pool_maxsize=1,
        max_retries=0
    )
    session.mount('http://', adapter)

    try:
        response = session.get(url, params=params, headers=headers, timeout=5)
        # print(response.text)
        if response.status_code == 200:
            result = response.json()

            if result.get('code') == 200 and result.get('result') == 'success':
                print(f"验证码破解成功")
                return {
                    'success': True,
                    'pass_token': result.get('pass_token'),
                    'lot_number': result.get('lot_number'),
                    'captcha_output': result.get('captcha_output'),
                    'gen_time': result.get('gen_time'),
                    'captcha_id': result.get('captcha_id'),
                    'type': result.get('type'),
                    'result': result.get('result'),
                    'code': result.get('code')
                }
            else:
                error_info = result.get('message', str(result))

                # 如果是首次失败且重试次数小于2，尝试重试
                if retry_count < 2:
                    return Geetest4_Ocr(captcha_id, retry_count + 1, proxy_ip)

                return {'success': False, 'error': error_info}
        else:
            # HTTP错误也尝试重试
            if retry_count < 2:
                return Geetest4_Ocr(captcha_id, retry_count + 1, proxy_ip)

            return {'success': False, 'error': f'HTTP {response.status_code}'}
    except Exception as e:
        # 异常也尝试重试
        if retry_count < 2:
            return Geetest4_Ocr(captcha_id, retry_count + 1, proxy_ip)

        return {'success': False, 'error': str(e)}
    finally:
        # 确保session被关闭
        session.close()


def get_s(ufrom, uid):
    hex_chars = "0123456789abcdef"
    key2_s = hashlib.sha512(ufrom.encode()).hexdigest().lower()
    # print(key2_s)
    key1_s = hashlib.sha512(('CypCHG2kSlRkdvr2RG1QF8b2lCWXl7k7' + uid + ufrom).encode()).hexdigest().lower()
    j = 0
    S = ''
    for i in range(8):
        j += hex_chars.index(key2_s[j])
        # print(j)
        S += key1_s[j]
    return S


def random_emoji():
    emoji_text = '😀😁😄🥵😂👍✨💯👏⭐🌟👀🤔✌️🤝'
    random.seed()  # 等价于 置随机数种子()
    emoji_list = list(emoji_text)
    result = ""
    for _ in range(5):  # 计次循环 5 次
        result += random.choice(emoji_list)  # 取随机表情
    return result


def one_zhuanfa(uid, gsid, zhuanfaid, sessionid,proxies):
    url = 'https://api.weibo.cn/2/statuses/repost'
    s = get_s('12DC193010', uid)
    i = get_s('1081093010', uid)
    headers = {
        "Host": "api.weibo.cn",
        "X-Sessionid": sessionid,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "WeiboOverseas/6.5.1 (com.weibo.international; build:6.5.1.1; iOS 15.8.0) Alamofire/5.9.1",
        "Accept-Language": "zh-Hans-JP;q=1.0"
    }
    data = {
        "aid": "",
        "c": "weicoabroad",
        "from": "12DC193010",
        "gsid": gsid,
        "i": i,
        "id": zhuanfaid,
        "is_comment": 0,
        "lang": "zh_CN",
        "s": s,
        "source": "",
        "status": random_emoji(),
        "ua": "iPhone8,1_iOS15.8_Weibo_intl._6510_wifi__iphone__os15.8",
        "v_p": 59,
        "visible": 1
    }
    resp_text = ''
    for i in range(10):
        resp = requests.post(url, data, headers=headers, proxies=proxies, verify=False, timeout=20)
        resp_text = resp.text
        if resp_text:
            break
    resp_json = json.loads(resp_text)
    if 'errmsg' in resp_json.keys():
        if '操作频繁' in resp_json['errmsg']:
            print(resp_json)
            return None
        if '你的账号异常行为' in resp_json['errmsg']:
            print(resp_json)
            return None
        if '由于你近期修改过密码' in resp_json['errmsg']:
            print(resp_json)
            return None

    if 'exception_key' not in resp_json.keys():
        print(resp_json)
        if resp_json['statuses']['retweeted_status']['mid'] == zhuanfaid or resp_json['idstr'] == zhuanfaid or resp_json['statuses']['pidstr'] == zhuanfaid:
            print('转发成功！！！')
            return resp_json
        return False
    else:
        return False


def jiyan(uid, gsid, zhuanfaid, sessionid, exception_key):
    S = get_s('12DC193010', uid)
    i = get_s('1081093010', uid)
    url = f"https://api.weibo.cn/2/geetest/init?aid=&c=weicoabroad&from=12DC193010&gsid={gsid}&lang=zh_CN&s={i}&ua=iPhone8%2C1_iOS15.8_Weibo_intl._6510_wifi__iphone__os15.8"
    headers = {
        "Host": "api.weibo.cn",
        "X-Sessionid": sessionid,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "WeiboOverseas/6.5.1 (com.weibo.international; build:6.5.1.1; iOS 15.8.0) Alamofire/5.9.1",
        "Accept-Language": "zh-Hans-JP;q=1.0",
    }
    data = {
        "aid": "",
        "appkey": "4215535043",
        "business_id": "",
        "c": "weicoabroad",
        "exception_key": exception_key,
        "from": "12DC193010",
        "geetestversion": "4",
        "gsid": gsid,
        "lang": "zh_CN",
        "s": S,
        "ua": "iPhone8,1_iOS15.8_Weibo_intl._6510_wifi__iphone__os15.8"
    }
    for _ in range(10):
        resp = requests.post(url, headers=headers, data=data, timeout=5)
        text = resp.text
        if text.strip():
            return json.loads(text)  # 等价 “跳出循环”
        return None
    return None


def one_zhuanfa_jiyan(uid, gsid, zhuanfaid, exception_key, captcha_id, challenge, captcha_output, gen_time, lot_number,
                      pass_token, proxies):
    S = get_s('12DC193010', uid)
    i = get_s('1081093010', uid)
    url = f"https://api.weibo.cn/2/geetest/verify?aid=&c=weicoabroad&from=12DC193010&gsid={gsid}&lang=zh_CN&s={S}&ua=iPhone8%2C1_iOS15.8_Weibo_intl._6510_wifi__iphone__os15.8"
    headers = {
        "Host": "api.weibo.cn",
        "X-Sessionid": sessionid,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "WeiboOverseas/6.5.1 (com.weibo.international; build:6.5.1.1; iOS 15.8.0) Alamofire/5.9.1",
        "Accept-Language": "zh-Hans-JP;q=1.0"
    }
    data = {
        "aid": "",
        "appkey": "4215535043",
        "business_id": "",
        "c": "weicoabroad",
        "captcha_id": captcha_id,
        "captcha_output": captcha_output,
        "challenge": challenge,
        "exception_key": exception_key,
        "from": "12DC193010",
        "geetestversion": "4",
        "gen_time": gen_time,
        "gsid": gsid,
        "init": "1",
        "lang": "zh_CN",
        "lot_number": lot_number,
        "pass_token": pass_token,
        "s": S,
        "ua": "iPhone13%2C2_iOS18.1_Weibo_intl._6710_wifi__iphone__os18.1"
    }

    resp_text = ''
    for i in range(10):
        resp = requests.post(url, data, headers=headers, proxies=proxies, verify=False, timeout=20)
        resp_text = resp.text
        if resp_text:
            break
    resp_json = json.loads(resp_text)
    if 'errmsg' in resp_json.keys():
        if '操作频繁' in resp_json['errmsg']:
            print(resp_json)
            return None
        if '你的账号异常行为' in resp_json['errmsg']:
            print(resp_json)
            return None
        if '由于你近期修改过密码' in resp_json['errmsg']:
            print(resp_json)
            return None

    if 'exception_key' not in resp_json.keys():
        print(resp_json)
        if resp_json['statuses']['retweeted_status']['mid'] == zhuanfaid or resp_json['idstr'] == zhuanfaid or \
                resp_json['statuses']['pidstr'] == zhuanfaid:
            print('转发成功！！！')
            return resp_json
        return False
    else:
        return False


if __name__ == '__main__':
    a = {}
    for i in range(20):
        gsid = '_2A25FzWoHDeRxGe5N71US8SnLwz6IHXVk2_rPrDV6PUJbkdAbLXHgkWpNdSJ-GgFj0eg3_UtdULIxg69WI9s9JQuo'
        uid = '8347317782'
        zhuanfaid = '5223466231924975'
        sessionid = ''.join([str(random.randint(0, 9)) for _ in range(5)])
        exception_key = sessionid
        proxies = {
            'http': 'http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001',
            'https': 'http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001',
        }
        b = one_zhuanfa(uid, gsid, zhuanfaid, sessionid,proxies)
        if b == None:
            print('请更换账号， 本账号失效')
            continue
        if b == False:
            print('出现极验验证')
            for j in range(10):
                a = Geetest4_Ocr()
                if 'captcha_output' in a.keys():
                    break
            captcha_output = a['captcha_output']
            gen_time = a['gen_time']
            lot_number = a['lot_number']
            pass_token = a['pass_token']
            c = jiyan(uid, gsid, zhuanfaid, sessionid, exception_key)
            captcha_id = c['captcha_id']
            challenge = c['challenge']
            one_zhuanfa_jiyan(uid, gsid, zhuanfaid, exception_key, captcha_id, challenge, captcha_output, gen_time,
                              lot_number, pass_token,proxies)
        sleep(360)
