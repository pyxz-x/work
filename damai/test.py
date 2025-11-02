import requests


headers = {
    "User-Agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BXiaomi%3BM2012K11AC%29+DeviceType%28Phone%29",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "x-sgext": "JBTAgLLxu4ZvILPxNaoP%2FoDxsPK38aPys%2FK48aPxsPSj47H3tvGw8rP1ufSj8LOj4fCw8LOhsKSzorXytOOx8LTjsfOjo7XjsPCw96P2o%2FGj8aPxo%2FSj8qPzo%2FGj8eTjteOw47DjsOOw47DjsOOw46Olo%2FCj8KP1tffm8rPjsPCw8LDjsOOypOHjsOOj86Pxo%2FOj86O67IHZ47DjoOC19qDgtaSj9t%2FxpvKm86b3pvmmo6akpvGw5rH23%2Fnf8a3wrZ%2Fhn7LmtOa199%2Bi3%2FGy%2BK3xrfCt8bLts%2FXfpN%2BV1o7SlrGO0pWxhb2f5p%2Bz7bLtsfS19q34su2x%2BLGfsfLf8rDttvet%2Bbn03%2FGzn8GnwYHBgcGBwYT3gcGBwYHBgcGBwYHBgcGBwYHf8bSfwafBhMGRwYHPp8GBwZPUlNS316HBkcGBwpnnsvCutZHWgdmG5I%2F2kOaswrbDgtmGwpC1leaswoXEktmGwpC1leaswojEkcfruau4hu2nxYHBgcv12a3kr8GE94HBiLWRwYHBjfLx1I%2BwjuKEwafBhPWXyq7hgcH4wYHC69WD2YGm9dCa0ILar8KBwYG9n7H23%2FDf8eKfsfCt8rKfsaPf8bL4pvCm8Kb0sfWm8bL05OaxpebmtPKm7bTwpvi35rDmsfHf8eSftPm25rafsaXf9bLtsfOx8N%2FysJ%2Bw7bby3%2FKxn7CfsvPf8bL4pvCu%2BLf3tuay%2Babytuay9qb5t%2Bax9qbxsuax5rLmsfWxn7L03%2FGt8K3yrfKt97DtsO2w7bLtt%2FCt8t%2Fyt5%2Bx8rjmrfGu8LDwsOax87jmsfCm8bDmsfCm8bDmsfK38bT4sfm096bw3w%3D%3D",
    "x-sign": "azG34N007xAALevOXNOQzqWqjvsdTevN70PFG2iIp4hNb8vWfElYA%2Fsm6%2BRLzqjIipWyOKU3MTKIhy%2FJu%2FSvmjn6PV%2FLzevN6w3rze",
    "x-sid": "1956d6a5d47589fcc20c459516641edb",
    "x-uid": "2216798991040",
    "x-nettype": "WIFI",
    "x-pv": "6.3",
    "x-disastergrd": "",
    "x-nq": "WIFI",
    "x-features": "27",
    "x-app-conf-v": "0",
    "x-mini-wua": "a7AQ%2FjL4%2F6lsp70TjmB4WjwWPFteBHlzLd0kFsFt61q118vnb79QVHl9acM1a5s0Bv0myZOEb2DTet9PyUWjn423ZGpXbe8JUUPeDFM8ed0wGcZUUkwhYRreebJPh7qyHQgD9RL%2FRGksDgl5TPyUEEgbFZ1fK1MCLYs8JXN6lqcsAY9sbbmd0stT2g0FjLuSiTmDKiwGSwZuLe%2BYDQ1XpdjVvsj6oyyMpw30Rd797jPZAJ%2Bwc2ffpT43B",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "cache-control": "no-cache",
    "x-t": "1761025718",
    "x-bx-version": "6.7.250504",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "700159%40damai_android_9.0.3",
    "x-app-ver": "9.0.3",
    "x-c-traceid": "aO3iR%2BdCqE0DADsGH34y%2BmKt17610257183250104123281",
    "x-umt": "aiIBuXhLPOEOsAKaADQwVhWFn1Tvra%2F2",
    "a-orange-q": "appKey=23781390&appVersion=109000300&clientAppIndexVersion=1120250925111600243&clientVersionIndexVersion=0",
    "x-utdid": "aO3iR%2BdCqE0DADsGH34y%2BmKt",
    "x-appkey": "23781390",
    "x-devid": "AjmTjFSRf-9rG9Zq3Uge7iWlSJOMe3WF8bqoFsrlazes"
}
cookies = {
    "t": "63cac0a51a65ff8b12cdc10f9d3848d9",
    "3PcFlag": "1760421386602",
    "cna": "1NN0IUhiFxoBASQJiihE3O5p",
    "x5sec": "7b22733b32223a2236373136393062383135623036313565222c22617365727665723b33223a22307c434a4b38334d634745504c66336154362f2f2f2f2f774569436d4e6863484e736157526c646a4977775a37443941593d227d",
    "tfstk": "gQMiqaccl0QGO0YL9vw6s8V16phmCRwj3qBYk-U2TyzBfAUt0xcnVq49cCwttr0E-PzZBO3nn0gQkSRskKVmkqK_gEt_0-0t8SWTXIi4n4uugVK_koXmVq00GhaYur0x0fKp3Lnsf-wqoUpJe-VQXWkguZe4CJRLjs7DeLnsfGEw2DJ-HGlTOP443tza8Hq0j-Wa0qzUTurR7-uquMzUXlb40ozVLHqb8ry43qoexoUUuQEwiPMiBv8bTV2hMfV-KlVgzDAc3tqCe5zrbyX2lvqMEzoa-tWYr_SIA00DSTZZnlDusXTfCcw3L4VEOUX_kSDnSjV1qTVELcka1xLh3gzFTsdBQk4JKmCfG5rQxzsg1STnrnPWgHxhaAFaAk8BxHffG5rQxzKHx_RQ_kZeR"
}
url = "https://acs.m.taobao.com/gw/mtop.alibaba.detail.subpage.getdetail/2.0/"
params = {
    "data": "{\"itemId\":\"980799030314\",\"scenario\":\"itemsku\",\"bizCode\":\"ali.china.damai\",\"exParams\":\"{}\",\"platform\":\"271\",\"comboChannel\":\"1\"}"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params, verify=False)

print(response.text)
print(response)