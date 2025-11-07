import requests

proxies = {'https': 'http://new_kps_server:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001'}
# 测试
url = "https://httpbin.org/get"
resp = requests.get(url,
                    proxies=proxies,
                    verify=False
                    )
print(resp.text)
