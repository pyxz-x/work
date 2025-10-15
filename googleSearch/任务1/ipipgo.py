import requests
def get_ip():
    # 设置请求头
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
        "Accept-Encoding": "gzip, deflate, br"
    }
    # 测试链接
    url = 'http://api.ipipgo.com/ip?cty=00&c=1&pt=1&ft=txt&pat=\n&rep=1&key=fdbc202b'
    resp = requests.get(url)
    return resp.text.replace('\n', '')
