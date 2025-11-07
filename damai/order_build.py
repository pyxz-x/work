import requests

cookies = {
    # 'munb': '2216798991040',
    # 'cookie2': '1d693c2a6380030e44bb76eb82365d17',
    # 'csg': '5452235c',
    # 't': 'beee2accb05a0f6ba22d6a9ad34e6973',
    # '_tb_token_': '3fa53a057eed7',
    # 'sgcookie': 'W1000ucToFdUXv3fK%2BO147J7eyce1kcusjwIlnDVNtOVclfvSDH3o3Ptz4G5FiAwrlrXTDiCwJc8v7seOK3twx2hErfJ07MFhmZIlbIZi2EMRZH4K10gqWzD2Q53csLTO%2Bbr',
    # 'tfstk': 'gk3K4McoratLLjuLsX-MqDSvOEG-vhcE_vlfr82hVAHtIjw3Eb9zy4HopugnZyMOejwaxa43rcF-EAdEtbwuVzHqHuw3qL78VRHlxXDkUAU_B7wBLe8EIA4ESDbuKpz-Nx4JFKYDoXlU8z9DnQ7pT0z7NU2Wjk6wZ356nKYDoH1_yppmEG4tYhFzCT_QVYZ65RPzFzwQVOs_GRa7PuaW55N7i86CA7Ot1RP7P8M7PCU_Q7O8tKylwRb-Y4WweH1YXa_SWWE6AXw1My0_9kejObQ5PiNLv-GQQpiaEPEjdu3yMNHtAXi0YqCcrDGI6mqtzd84vjN7qVZ92twsDX0UD4srZq0q9JqQ_PIp6CIP4kNG9tDFpveYtzFTnCY54grpi5eD6CIP4kNa6-AMwgSzvIf..',
}

headers = {
    'User-Agent': 'MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29',
    'Connection': 'Keep-Alive',
    # 'Accept-Encoding': 'gzip',
    'Content-Type': 'application/x-www-form-urlencoded; application/x-www-form-urlencoded;charset=UTF-8; application/x-www-form-urlencoded;charset=UTF-8',
    'x-sgext': 'JBQaAGGJes6dKf56oac5xAArMCgyLiMtNyIjKzY5Iys3LDErOSIwLTE5MCljezAqMCpkeGMsMSwxKCMrNjkxKSN5NTkwKjAtIy8jKyMrIysjKyMrIysjKyMoIygjKiMqIyojKiMqIyojKiM5ZTkwOTA5OC9lfDAuIyowKjAqIyojKGR7IyojOTM5MTkzOTM5enZBQyMqIzogKzA6IDpmOTZFMTwyPDU8OTxjPGQ8MStfI18rLSotRWFFMjw0PDctX3hfKzIiLSstKi0tMTcxKDhFZEVVTE5IVitOSFUrRSdffF8pLSs1LzE3Mi02Iy0uMCItLTMpXyswRSRFMShfKDc3Myo1NzkjNUUxKV9bZ1tBW0FbQVtEbUFbQVtBW0FbQVtBW0FbQVtBRTEuX1tnW0RbUVtBWGdbQVtme013UTFhW1FbQVNBS0VbV3UxcWdbSDVsSTBbQkNIWHdYcVRWfTJSUEkzW0FPbF1EbCtMTVNBWFdSTnEvL1VvUVNLY0FSNFtnbkYxUVNXWFFIcVRmL1VDUX1XWFFIcVRmL1VDZ31CIzZrWl41dUJbQVs9PDkscUBEL29YQVtBJ18rNkUwRTF4Xy0tKl8rY0UxKDg8MDwxLiYvNytlPDcrYigmKGF8Zjw3IyY3MywmIzA8MitkPDFFMX5fLzI8MUUxf18uNi8tLjYtXygwRTA3MkUyK18qXygzRTEoODwwNDAjMS0mKSYoJigmIiYqJiomKiYqJiszRTIuXystKi0pOTc0NzMvNzcwNzA3NDczLDc3MEUyL18%2BRC9tam5ZcXk1QFJ2SEtLaHp1OV1TbkJfZ0hKdTV4QSpwL0JAamg0WUhQcFk4bThxZ0lHcGZwRGJTW18oN0UxKDg8LSsuKjAqMDwxKyYrMDwxKiYrMDwxKyYpOSoxLzArOSI1PDBF',
    'x-sign': 'azG34N007xAAKm6UFsyEyIgvPTLPmm6aY2xR7O3fIt%2FEgZ6DB07dV9O6HrPOatnJkqT6C75YrTbt2FqWPdsqJtfG2Apumm6abrpumm',
    'x-sid': '1d693c2a6380030e44bb76eb82365d17',
    'x-uid': '2216798991040',
    # 'x-nettype': 'WIFI',
    'x-pv': '6.3',
    # 'x-nq': 'WIFI',
    'x-features': '27',
    # 'x-app-conf-v': '0',
    'x-mini-wua': 'avQTFxmc8Hd%2Fn0YWKKktLq7lo%2BUheamx1shJ89in81zYXcYBlB9f77sxW53pp8Jnr%2FFy1rspM%2F7CSePXRKAevebQMG%2FRNNzKwcVf%2FFWhxCxEjFoLKK2UIvZGJ6nQ0O1ic4BCQ%2FbMLrMzI1TUk0JnY0i8LPMVSkJF3F5UUHpq0lOY0h6%2F1%2FFQKY7xoZMFQ5F68NNEY4VC4YW5gff7ZW5GTVVppxltzcrzWliTwbSVbOKDhyPj72aKYHUbM',
    'x-t': '1761198320',
    'Dm-token': '1c7a6f3d298f79c5130a581d1a9b872e',
    # 'x-bx-version': '6.7.250504',
    # 'f-refer': 'mtop',
    'x-extdata': 'openappkey%3DDEFAULT_AUTH',
    'x-ttid': '10005894%40damai_android_8.10.21',
    # 'x-app-ver': '8.10.21',
    # 'x-c-traceid': 'null176119832054100161778',
    # 'x-umt': 'ob8Blp1LPNvSBwKaDwt1P8PpSR0MLDrI',
    'x-utdid': 'aPdj3tB0ObUDAH8m6odGE5ac',
    'x-appkey': '23781390',
    # 'Cookie': 'munb=2216798991040; cookie2=1d693c2a6380030e44bb76eb82365d17; csg=5452235c; t=beee2accb05a0f6ba22d6a9ad34e6973; _tb_token_=3fa53a057eed7; sgcookie=W1000ucToFdUXv3fK%2BO147J7eyce1kcusjwIlnDVNtOVclfvSDH3o3Ptz4G5FiAwrlrXTDiCwJc8v7seOK3twx2hErfJ07MFhmZIlbIZi2EMRZH4K10gqWzD2Q53csLTO%2Bbr; tfstk=gk3K4McoratLLjuLsX-MqDSvOEG-vhcE_vlfr82hVAHtIjw3Eb9zy4HopugnZyMOejwaxa43rcF-EAdEtbwuVzHqHuw3qL78VRHlxXDkUAU_B7wBLe8EIA4ESDbuKpz-Nx4JFKYDoXlU8z9DnQ7pT0z7NU2Wjk6wZ356nKYDoH1_yppmEG4tYhFzCT_QVYZ65RPzFzwQVOs_GRa7PuaW55N7i86CA7Ot1RP7P8M7PCU_Q7O8tKylwRb-Y4WweH1YXa_SWWE6AXw1My0_9kejObQ5PiNLv-GQQpiaEPEjdu3yMNHtAXi0YqCcrDGI6mqtzd84vjN7qVZ92twsDX0UD4srZq0q9JqQ_PIp6CIP4kNG9tDFpveYtzFTnCY54grpi5eD6CIP4kNa6-AMwgSzvIf..',
}

data = {
    'wua': 'CofS_mOH9az18/PgLfw7iHD3ya2muNGjUbxXdV2dx3X3tAgGoj+9kUHNPyJLFm2UyruFZjtmFixoSHoMYqqbGFd4KoMOziZBk5UED/prigr5rQ7zY0jUs4ML3pXqK42QvMjeguO9fVv6jkFnUtyeURsohSx+VsektXskb6HMrx0anZMg01wgItC61VyQJYwVDgA7+U4dpG8PiWxUWF/Wo76LDRTfZbp/9MpGBgP84iC4n/AUvPwV21E/iaaIGbRFN0EEa',
    'data': '{"buyNow":"true","buyParam":"980568627563_1_5939452904634","exParams":"{\\"UMPCHANNEL_DM\\":\\"10001\\",\\"UMPCHANNEL_TPP\\":\\"50053\\",\\"atomSplit\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"coVersion\\":\\"2.0\\",\\"coupon\\":\\"true\\",\\"initIdHashNoList\\":\\"[\\\\\\"\\\\\\"]\\",\\"joinRateLimit\\":0,\\"pioneer\\":\\"0\\",\\"seatInfo\\":\\"\\",\\"signKey\\":\\"clh+aHZUUQFqRV14SVtvcHBfeWZ3X14NZUdOfU5OZ3l5UnxpdltfC3A7IxMqMBMEBjUcCgA5PGtwBwY5KA03JjQDOzckHlMLYU1ddE5Abn1mCSAyLgNSDWM=\\",\\"subChannel\\":\\"\\",\\"umpChannel\\":\\"10001\\",\\"websiteLanguage\\":\\"zh_CN_#Hans\\"}"}',
}

response = requests.post('http://mtop.damai.cn/gw/mtop.damai.trade.order.build/1.0/', cookies=cookies, headers=headers, data=data)
print(response.text)
