import json
import requests
from get_frida import getParams
headers = {
  "Cookie": "x5sec=7b22733b32223a2263653137656533323334313038663931222c22617365727665723b33223a22307c434b6d4467736747454f32306766442b2f2f2f2f2f774569436d4e6863484e736157526c646a4977775a37443941593d227d; tfstk=gpwsqiG4ucPeX3kvcfjeN5CtkxDZCMWPHniYqopwDAHthqZx8flxu14jGrznMRkabyaQyu0t_qkaDWa4JlScssDbOz4W3GVauWgY4ruVjRSgOEaz2-PZu1xgtzrJQR5i3KMgnxQPzTWyjlDmHZincYugvkmAYcKB6BKZnxQPzBJxsTM05aSag5EdAcmmDxhv6MiKm2ptDdnvJMgnJEpxMqHpJmiykxHYkkIIm23xHfUYvQnvmDfxrlsk5jnEfHD3X29vHRBS14ipgK9bdcG_Ul3Q15wIffgrMC7zi-E7DRkQNEBjJRqapJl6N_3_IkeZZY1J1zHnRb3_6Z9I87r8CgzeU40MuIAmWKnIzMsBiIRpxFb8g_ptwfnnYfICAIzZ6DmIzMsBiIctxDu1AMO47",
  "x-sgext": "JBSNC2oecVmWvvXtqjAyUwu8O785uSi8Org7tCi8Pa4ovDy7Ors%2FvTK%2BPq47vmjsO707vW%2FvaLs6uzq%2FKLw5rjq%2BKO4%2Brju9O7oouCi8KLwovCi8KLwovCi8KL0ovSi9KL0ovSi9KL0ovSi9KK5urjuuO64%2BuDzrO7kovTu9O70ovSi%2Fb%2BwovSiuOK46rjiuOK5x4UrUKL0orSutaK0rrWquPdI6qzmrPqsyq2irb6s6vFS0VLwmvCbSatI5qz%2BrPLpU71S8ObUmvCa9Jrw7tCa8MrRU6VTYXcNZ2zrDWdg6yDbSbdI4oDy0O6A5vzi%2BJr87uCa4PL9UvDnSOrQmvzi7JrQyuFS8ONJK6krMSsxKzErJfMxKzErMSsxKzErMSsxKzErMVLw%2F0krqSslK3ErMSdxKzErveL4k9GbsStxKzEncOrtxzErMSsxKz0rVfaJA12TPSsxKwCDbX7182kC%2BSsxKzyTAaaJA12TPSsxKwDPhX%2F182nq%2BSsxKzjjKTc9qwDv0T%2BRozErFfN1Pz0nbOMBDun%2FiP91KtHPlWtpsxkbcbOZKzEj5T%2Fo2sC38b%2B8kxlHiScxKzDbSOrtUvVS8adI%2BoDvSOu5UvDm1Lb0tuT%2BrPutqui28P%2Bg86C25Mus6qya%2FLaA5qzO1Lbs7ui28VLxv0j6%2FLbxUvG7SOr47vya8OL050jm9VL0mv1S%2FOtI70jm%2BVLw5tS2gOqM7vTu9LbwtvS29LbUtvS29Lb0tvS20VL8%2F0jqgO6A8tSa%2FJrw7uDOgO6A7oDmgOrU%2FoDvS",
  "x-bx-version": "6.7.250504",
  "f-refer": "mtop",
  "x-extdata": "openappkey%3DDEFAULT_AUTH",
  "x-ttid": "10005894%40damai_android_8.10.21",
  "x-app-ver": "8.10.21",
  "x-sign": "azG34N007xAALx15O59Xugjqu1Osfx1%2FEIkiCZ46UTqyqf1mtQuuufnhvVa%2F9ZElIsOa0J9WyCQ%2BPSlzTj5Zw6Qjq%2B8dbx1%2FHW8dfx",
  "x-sid": "1d693c2a6380030e44bb76eb82365d17",
  "x-c-traceid": "null17616412243270020111509",
  "x-uid": "2216798991040",
  "x-pv": "6.3",
  "x-features": "27",
  "x-app-conf-v": "0",
  "x-umt": "%2FW4BmodLPG5J6gKaKKjFo%2FvIevginVWy",
  "a-orange-q": "appKey=23781390&appVersion=60002023&clientAppIndexVersion=1120251022103608097&clientVersionIndexVersion=0",
  "x-mini-wua": "a8gS4UYqoVzVCQWBWxREzCHL1%2BXcgpFuRGDk0JAXREe1hVeX9XbpHJavW5SDnDgepCrgFhTW2IIfUArduVjW9k5Qg1D2n3bfPElDCPKbSYm5LR2jX9VeFNNVO9Q5b4JVTs%2FmsgrQCtQM1CVg8tNs%2B3wv3E0xUTYX47kaEnphOopUz4%2BK3oeoatrPymKzLDqGBW9Kr5kyC%2BW4pqpS2k5twn7kuDd2aCc7fodI5VgDbn%2B1B6vd19UwSwyRa",
  "x-utdid": "aPdj3tB0ObUDAH8m6odGE5ac",
  "x-appkey": "23781390",
  "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
  "cache-control": "no-cache",
  "x-t": "1761641224",
  "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
  "Host": "acs.m.taobao.com",
  "Accept-Encoding": "gzip",
  "Connection": "Keep-Alive"
}
url = "http://acs.m.taobao.com/gw/mtop.alibaba.detail.subpage.getdetail/2.0/"
params = {
    "data": "{\"itemId\":\"980568627563\",\"scenario\":\"itemsku\",\"bizCode\":\"ali.china.damai\",\"exParams\":\"{}\",\"platform\":\"271\",\"comboChannel\":\"1\"}"
}
response = requests.get(url, headers=headers, params=params)
lzh_t = json.loads(response.json()['data']['result'])['itemBasicInfo']['t']
print(lzh_t)
extracted_params = getParams(lzh_t)
# print(extracted_params)
#########

headers = extracted_params['headers']
print(headers)
data = extracted_params['data']

response = requests.post('http://mtop.damai.cn/gw/mtop.damai.trade.order.build/1.0/',  headers=headers, data=data)
print(response.text)