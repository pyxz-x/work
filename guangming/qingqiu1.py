import requests

headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QD1A.190821.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/140.0.7339.155 Mobile Safari/537.36',
    # 'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Content-Type': 'application/x-www-form-urlencoded; application/x-www-form-urlencoded; charset=UTF-8',
    'sec-ch-ua-platform': '"Android"',
    'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Android WebView";v="140"',
    'sec-ch-ua-mobile': '?1',
    'Origin': 'https://m.4008117117.com',
    'X-Requested-With': 'com.brightdairy.personal',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://m.4008117117.com/',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
}

data = {
    'AccessKeyId': 'LTAI5tSEBwYMwVKAQGpxmvTd',
    'SignatureMethod': 'HMAC-SHA1',
    'SignatureVersion': '1.0',
    'Format': 'JSON',
    'Timestamp': '2025-10-31T05:05:08Z',
    'Version': '2023-03-05',
    'Action': 'InitCaptchaV3',
    'SceneId': '10zukatu',
    'Language': 'cn',
    'Mode': 'popup',
    'DeviceData': 'byAgDBTTWK6iQ63aLnMRvywYbJ50c453wUz9CdNf4pWB+H4EOu7koqzwbASi1Zy3zy8xMHXnp3+n70JZYYctZHFYIT3hQvppWBS5RRmqBdUwtVmWd5I8Cn+D7TI8zG4fiV57LECgsSgN8twx8VroWzIs7BkpNVKC6+NdlZUWeyq/h8mVNovG3mvZQ6SD831i',
    'SignatureNonce': '13fdf5d3-2bf9-438f-b3db-7ec9c81889fc',
    'Signature': '11jhdTFv9aph5gRiG3ZVOznl8XY=',
}

response = requests.post('https://7atwlq.captcha-open.aliyuncs.com', headers=headers, data=data)

print(response.text)