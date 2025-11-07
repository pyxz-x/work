import requests

cookies = {
    # 'cna': 's9CBITpTz2gBASQJiiglo+6R',
    # 'tfstk': 'ge-s4Eb2gO8FIFIYhNDUPjTeWIjwlvorD-6vEKEaHGI9ctdpHZKqSdSjc6Ocu1I9bSdBTLCNgKhccnO21ZEVuVXbc6Oh3nkGue1XhQMg0AjOve6ctfcijc2M-QJ8bhuG0osMmihra0ozIdjcDSmYO_CMppXxLOdnPn_FmihrTyrAS0sD6XWfXEpKdOXcBiQYWv1dF6EOHlBY9v1h9lFOHoeppTWzXOdADv9dttIAMIQtdpd8b-Xnk_vsE7HZHFaOBdCQDoKtVN1WBrrbcH615npOOFT6AO_1aZUZtVxvFKKNAUNxc6KMQHKF5zgR1hvpbajSyPORx6_R1FhbA68yehsPYu5lsSz0o1EAd_kIdr44JJViwOV_Fq_OK97tdva2_NBhd_kIdr4cW9XF1vMQuC5..',
    # 'munb': '2216798991040',
    # 'cookie2': '1d693c2a6380030e44bb76eb82365d17',
    # 'csg': '577254fe',
    # 't': 'ab5d3e9f74c3f2a345758830b9ba9371',
    # '_tb_token_': '5584343e5d738',
    # 'sgcookie': 'W100sM0Rk34gjVmcsq75stMrflUgAJMj0IuzhcgJU8XoXRzCj1yRcuLiokEXF%2B0IlVmkHPjZqwWvgEAS4PPAUW0VFXAEZVEIzsJN0HyyFix0UOZS%2FUrYDmIjwtIWTGfGXglU',
}

headers = {
    'User-Agent': 'MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29',
    'Connection': 'Keep-Alive',
    # 'Accept-Encoding': 'gzip',
    'Content-Type': 'application/x-www-form-urlencoded; application/x-www-form-urlencoded;charset=UTF-8; application/x-www-form-urlencoded;charset=UTF-8',
    'x-sgext': 'JBRSZgfBHIb7YZgyx%2B9fjGZjVmBUZkVgX2pRYEVjVHFFY1FkV2RSZFdnVHFWYQUzVmJWYgIwBWRXZFdgRWNUcVdhRTFTcVZiVmVFZ0VjRWNFY0VjRWNFY0VjRWJFYkViRWJFYkViRWJFYkViRXEDcVZxVnFeZwM0VmNFYlZiVmJFYkVgAjNFYkVxVXFXcVVxVXEcPicLRWJFckZyBXJGcgRxUA1XdFR0U3RfdAV0AnRXYzlrOWNLY0sNBw1UdFJ0UWU5MDljVGpLY0tiS2NVZUtgUGU5NjkHMBw0BFccNAdXF1sNAA1Vf15mVX9UZlNmS2BUY0tkVWs5Y1QNV2pLYFJjS2tfZzljVQ0nNScTJxMnEycWERMnEycTJxMnEycTJxMnEycTOWNSDSc1JxYnAycTJzUnEycAMWU1KxczJwMnEyIYUwQOMS9mEhMnEycLSWU1KxczJwMnEyUhPxAnEyceNCUjEyIbAgQLaiphFTQFHCc3JwsyERczJwMnEyQwPmUTEycTJxMnECI%2BDh8tIgkQJxMnHwo%2BMGERPU0oJxMnED4LIB8tIgkQJxMnb0AKCRQrGRY9JBMnE1sNV2Q5YjljBA1Uf1YNVzE5Y1RqQGJAZ1F0UGUCMUBjU2JXZEBnUDRVdF5iQH9VYUBqU3RQYlF0Vw1XNjlnVXRXDVc3OWFRZEthUWQ5YFYNVn9UDVRjOWI5YFUNV2BedEtjSGJWYlZ0V3RWdFZ0VXRWdFZ0VnRWdFINVGY5Y0tiS2tRf1V%2FV2NWY0tiS2NLYUtgVWdLYjk%3D',
    'Dm-token': '1c7a6f3d298f79c5130a581d1a9b872e',
    'x-bx-version': '6.7.250504',
    'f-refer': 'mtop',
    'x-extdata': 'openappkey%3DDEFAULT_AUTH',
    'x-ttid': '10005894%40damai_android_8.10.21',
    'x-app-ver': '8.10.21',
    'x-sign': 'azG34N007xAAL1Qfa5ZMet6TWzVk31QfWelraddaGFr7ybQG%2FGvn2bCB9Db2ldhFa6PTsNY2gUR3XWATB14Qo%2B1D4o9UD1QfVA9UH1',
    'x-sid': '1d693c2a6380030e44bb76eb82365d17',
    'x-c-traceid': 'null17616462485910012129872',
    'x-uid': '2216798991040',
    'x-pv': '6.3',
    'x-features': '27',
    'x-app-conf-v': '0',
    'x-umt': '%2FW4BmodLPG5J6gKaKKjFo%2FvIevginVWy',
    'x-mini-wua': 'ahQR%2F5OtnAoKyOTTGNX8ffiCHshuu%2FMxUWIOo1ppBX56sacJIReBLPNr5aOwI%2Fs5bwQGLy6rKG0Gx%2Bm8rvysJ6Yiq59qC97w6EgzM%2FPTRX6o4pCdIokk9e1W09dVkJYo5XXjKHGVkXZbN64y7Vnq%2FjtmqGrLWFt4vhXqVOxAJiVazwlLqBDTPnMZwkWpHGoL0Vb%2F9rv2NAlGZUUS7A7Bh7UCqUWLpxb3ufa2uroxfJN8p6scKRImjel8e',
    'x-utdid': 'aPdj3tB0ObUDAH8m6odGE5ac',
    'x-appkey': '23781390',
    'x-t': '1761646248',
    # 'Cookie': 'cna=s9CBITpTz2gBASQJiiglo+6R; tfstk=ge-s4Eb2gO8FIFIYhNDUPjTeWIjwlvorD-6vEKEaHGI9ctdpHZKqSdSjc6Ocu1I9bSdBTLCNgKhccnO21ZEVuVXbc6Oh3nkGue1XhQMg0AjOve6ctfcijc2M-QJ8bhuG0osMmihra0ozIdjcDSmYO_CMppXxLOdnPn_FmihrTyrAS0sD6XWfXEpKdOXcBiQYWv1dF6EOHlBY9v1h9lFOHoeppTWzXOdADv9dttIAMIQtdpd8b-Xnk_vsE7HZHFaOBdCQDoKtVN1WBrrbcH615npOOFT6AO_1aZUZtVxvFKKNAUNxc6KMQHKF5zgR1hvpbajSyPORx6_R1FhbA68yehsPYu5lsSz0o1EAd_kIdr44JJViwOV_Fq_OK97tdva2_NBhd_kIdr4cW9XF1vMQuC5..; munb=2216798991040; cookie2=1d693c2a6380030e44bb76eb82365d17; csg=577254fe; t=ab5d3e9f74c3f2a345758830b9ba9371; _tb_token_=5584343e5d738; sgcookie=W100sM0Rk34gjVmcsq75stMrflUgAJMj0IuzhcgJU8XoXRzCj1yRcuLiokEXF%2B0IlVmkHPjZqwWvgEAS4PPAUW0VFXAEZVEIzsJN0HyyFix0UOZS%2FUrYDmIjwtIWTGfGXglU',
}

data = {
    'wua': 'CofS_OjIm5j5QYh+OQzNLupwxFgVfkkq4fsbXWWEtp8scYiFZo9flEI/hUu7MReCgCHsQNf66JHUFNowhTqlbqq8wb3JhHgx0lOYqJioK+sh4U5EFOQ82hLKGZe0BxKQ1PQmA2FaMS8qnLkyUjF/p5KE5L1LZ5I7ITszULVB7Be021LujgFHpXB5JdWUhpu4qhwiyCOywqgC2VKZKz9+u+/Z0e393oAAzXR5ZnQZmnu/vQ51p2v0mcKHLbTJ838/0JG/Q',
    'data': '{"buyNow":"true","buyParam":"980568627563_1_5939452904634","exParams":"{\\"UMPCHANNEL_DM\\":\\"10001\\",\\"UMPCHANNEL_TPP\\":\\"50053\\",\\"atomSplit\\":\\"1\\",\\"channel\\":\\"damai_app\\",\\"coVersion\\":\\"2.0\\",\\"coupon\\":\\"true\\",\\"initIdHashNoList\\":\\"[\\\\\\"\\\\\\"]\\",\\"joinRateLimit\\":0,\\"pioneer\\":\\"1\\",\\"seatInfo\\":\\"\\",\\"signKey\\":\\"clh+aHZUUQFqRV14SVtvcHBfeWZ3X14NZUdOfU5OZ350XH1sc19dAXA7IxMqMBMEBjUcCgA5PGtwBwY5KA03JjQDOzckHlMLYU1ddE5Abn1mCSAyLgNSDWM=\\",\\"subChannel\\":\\"\\",\\"umpChannel\\":\\"10001\\",\\"websiteLanguage\\":\\"zh_CN_#Hans\\"}"}',
}

response = requests.post('http://mtop.damai.cn/gw/mtop.damai.trade.order.build/1.0/', cookies=cookies, headers=headers, data=data)
response = requests.post('http://mtop.damai.cn/gw/mtop.damai.trade.order.build/1.0/', cookies=cookies, headers=headers, data=data)
print(response.text)