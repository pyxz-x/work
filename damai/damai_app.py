import requests


headers = {
    "User-Agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BXiaomi%3BM2012K11AC%29+DeviceType%28Phone%29",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "x-sgext": "JBS6QHKLe%2FyvWnOL9dDPhECLcIh3i2OIc4h4i2OCd5lji3eMcYpyiXWDdJlwiSPbcIpwiyGKJIkij3KOY4J3mXGJY9l1mXCKcI1jjGOLY4tji2OIY4hjiGOLY4t3mXWZcJlwmXCZcJlwmXCZcJlj32OKY4pjj3WNJoskmXCKcIpwmXCZct4hmXCZY4lji2OJY4ljwCz7GZlwmWCadNhgmnWKY4wfi2aIZolmjWaDZtlm3maLcJxxjB%2BDH4ttim3lIeVynHScdY0f2B%2BLcoJti22KbYJtiHflJOUV7A7oFosO6BWLBYcf3B%2BJbYhti3KDdJd3jG2Ldo4fi3DlZOVxiB%2BLdpd1g22DeY4fi3PlAd0B%2BwH7AfsB%2Fjf7AfsB%2BwH7AfsB%2BwH7AfsB%2Bx%2BLdOUB3QH%2BAesB%2BwvNAfsB63TpEfsX2wHrAfsDyQ34AfsB9gjdCfsB2yaCEfsX2wHrAfsDyRH4AfsB9gjdCfsB6QzUEesX2wHrAfsDyRH4AfsB9gjdEfsB2zroEd0X2wHrAfsDyRX4AfsB9gjdCfsB6TmCEc0X2wHrAfsDyRX4AfsB9gjdEftmz3bgBfga1QL7Aft95XGMH4ofiyLleJdxgx%2BLI%2BVxiHiccJxwnHPbc5xxiiSDZosiiWaOcpxtjnCceI1mimaLceVx3h%2BOeYxmjB%2BLJeV0jG2Lc4p05XKKH4ptjHLlcosfih%2BIc%2BVxiHiccJRwiHeOZohznHKLZohxnHiKZo5mimaKZotmi3KJH4h05XGXcJdyl3GXdYttim2KbYttjHWXceVyjx%2BeAu8vjDD5Kvcq0zn7MuoL7Dn1JvMEyXnwAcwz9ivNNYo59ijbNvR2ggj3NeA4%2FTPvJ98hijfvFfMT6x%2BId%2BVxiHicbYtuinCKcJxxiHCccYpmi3CccYpmi3Gcc4hyjnSJco52gmaKHw%3D%3D",
    "x-sign": "azG34N007xAALy4BAWHgIjBHR3%2Brfy4PKoEA2a1KYkqIrQ4UuYudwT7kLiaODG0KT1d3%2BmD19PBNReoLfjZqWPw4%2BJ7uDy4PLo8uDy",
    "x-sid": "1956d6a5d47589fcc20c459516641edb",   # 不变
    "x-uid": "2216798991040",   # 不变
    "x-pv": "6.3",   # 不变
    "x-features": "27",   # 不变
    "x-mini-wua": "aUwQDMtQ2JeYCOPWdgHZaJgooOyk1Fq01qsS%2FVZCJaJB80EkBYs%2Bxy6FvawEyKPBpSSqOX1MksPAHK23b74fsGRGnNQZsnEI8SR6RwxNRZC4RoCThr72SH0Lf%2BHkD9fCPCjbG0TRYnq9PAsi3NakRf%2B0E7brtpeq9zFkwupHVeSipE8CyYimdXda6DW8CKDXmxW6uyr8d5iCPD1W7i3p7caDE%2FkkUqoaYjmJvt6M7h2LAEj9rTBnLqvfO",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",   # 不变
    "x-ttid": "700159%40damai_android_9.0.3",   # 不变
    "x-utdid": "aO3iR%2BdCqE0DADsGH34y%2BmKt",   # 不变
    "x-appkey": "23781390"   # 不变
}
cookies = {
    "x5sec": "7b22733b32223a2236373136393062383135623036313565222c22617365727665723b33223a22307c434a4b38334d634745504c66336154362f2f2f2f2f774569436d4e6863484e736157526c646a4977775a37443941593d227d",
}
url = "https://acs.m.taobao.com/gw/mtop.alibaba.detail.subpage.getdetail/2.0/"
params = {
    "data": "{\"itemId\":\"980799030314\",\"scenario\":\"itemsku\",\"bizCode\":\"ali.china.damai\",\"exParams\":\"{}\",\"platform\":\"271\",\"comboChannel\":\"1\"}"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)

print(response.text)
print(response)