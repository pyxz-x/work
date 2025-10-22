import requests


headers = {
    "User-Agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-sgext": "JBQ4XTyrJ%2BzAC6NY%2FIVk5l0JbQpvDH4KaAFkC34JbQt%2BG2wPawlsCW0ObQh%2BCG5bPAhtCG1cP1trCWsJbxtsCG4bbAp%2BAGgbbQhtD34Nfgl%2BCX4Jfgx%2BCn4Kfgl%2BCmsbahttG20bbRttG20bbRttG35dfgh%2BCH5ealw7CmwbbQhtCG0bbRtvXDwbbRt%2BC34Pfgt%2BC35CMXkEG20bfRhoXX0Yawx%2BDgIJewp7DXsBe1t7XHsJbGdkZ2wVbRUCWQIKewx7D2pnP2dsCmUVbBVtFWQMcAlkDQJcAm0Ldg9ubHYPbWx9YGc7Z24VbABtAXALbAtlFWkJbBVkD25nbAoCC2kVbghtFWQBaWdsCwJ5OnkceRx5HHkZTxx5HHkceRx5HHkceRx5HHkcZ2wMAnk6eRl5DHkcaAx5HHkJW2tdKkk8eQx5HHkueg5oMFoRdQxXMRcxaRx5HEIpbg9RaXsvXx95HnkYehx8dm4TdRxxHGkYeTsNCAk6eRVeMXwreR9hFXoqfHZuE3QFCGVabXkcbmxybVR2bRxpH346bRgXMWp2bRZ1FH46bRgXMWp2bRZhFB4yVCkPHkgyehx5HAUCCWtnbWdsWgIJbRVtZ2xbAglvAHsIewlsHm4AbQ97DGgLZB5vCj5cew1sHnAKaB5qAHsLbAl7CQIJOWdoCXsJAgk4Z28BaRVuC2xnbwgCCHAKAgpsZ21nbwsCCW8AewhzCG0Kax5uAHsLbh5uC3sAbR5pHm0ebR5sHmwNbWdvDAIJcAhwC28VbhVsD28VbRVtFW4VbwBvFWxnbw8CCW8AexVsFm0IbQh7CWkAewF7CWweZB5sCHsAZABqCGQMbA97CAI%3D",
    "x-sign": "azG34N007xAAJJCimtxNiVwrOZlm1JCknVKv0hPh3OE4PvC4uDAjaMBCAI0wOJTbw8frO8Caoaiz5qSow%2BXUGCn4JjaApJCkkMSQpJ",
    "x-sid": "1d693c2a6380030e44bb76eb82365d17",
    "x-uid": "2216798991040",
    "x-nettype": "WIFI",
    "x-pv": "6.3",
    "x-nq": "WIFI",
    "x-features": "27",
    "x-app-conf-v": "0",
    "x-mini-wua": "aXAR9FCzjKfM5FPfwe6d4kMSxh3HCUm4Cnur8eUfV%2Fzolt%2BK1c0xm%2BoGm2rHYG65F7D4Vbq8dmrUTYmdxZCPqotICRIgbMktBfpn6Ir68i3F7nYY36Whjw155AZAVaysxwjRP8j9FCX4yEsuMxfBbimm2mMPYaeYbaGlnAWDLgUKgkoP%2BZ4L3ElRihHVh2G8lR3g%2BddHkeVgCoskiwcVw5xzkkNohac7mSlSmFURZ95ahIcx0UsJ4CtEr",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": "1761112625",
    "Dm-token": "1c7a6f3d298f79c5130a581d1a9b872e",
    "x-bx-version": "6.7.250504",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "10005894%40damai_android_8.10.21",
    "x-app-ver": "8.10.21",
    "x-c-traceid": "null17611126251570101125993",
    "x-umt": "iaYBwolLPMUOaQKaCcBH9TY3ufUD4xDC",
    "x-utdid": "aPdj3tB0ObUDAH8m6odGE5ac",
    "x-appkey": "23781390"
}
cookies = {
    "munb": "2216798991040",
    "cookie2": "1d693c2a6380030e44bb76eb82365d17",
    "csg": "4a26ff41",
    "t": "d4b422460c91addf8c1f5d6c619fdd4f",
    "_tb_token_": "3fa53a057eed7",
    "sgcookie": "W1002rgfrKBFAByvepHGjL3EAgiwdEG0MuxKMXds7AKQwWkUhPtlhCerH8203tK7vPknw7L5B94nB1VTa9oeQeQqihqjvlXu22JJwlO6cQ%2F%2BcUrun0awtwR0BheQjzyVl73N",
    "x5sec": "7b22733b32223a2237323534396632356138616565633961222c22617365727665723b33223a22307c434f766b3463634745507968352f582f2f2f2f2f2f774561447a49794d5459334f5467354f5445774e4441374e53494a5932467763485636656d786c4d4c696b3062502b2f2f2f2f2f77453d227d",
    "tfstk": "gR3s4Zqq35oFCA4AGlAFVmgvWqUZGB8yksNxZjQNMPUtlSHKMo32jfzXlJM00RUt7tHILbea3jp0lqMqCoQ40hVflJM3gqRg0DZjaAaquPEtAXeKxdvMSFfixYlR7V-guZaiorpyUU8Psf40kqU4nx2i9XVvT53GFjuTorpyUM7YjUamBTP4XmhpO5V0MrEAXBwLgJQTMNFApBw3p5QTHlILJ7Fl6SHYkBGLKSUYHxE9OXd-bsVHD8c6ZNRkNfWT7feCkZ39Plw7Ki7fl2N_fqhTdcoZR5Z_UoIwKh0xNj3aR06vlJ3i_23Ufgt8CVcK7u4W2GM8-JZ8CcpfRJorwVsPTayuItScmRQYO8RBOijVv6XMe5X1NnZTtWr9OBsqQlF3O8RBOij0XWVUCBOC0A5.."
}
url = "http://mtop.damai.cn/gw/mtop.damai.trade.order.build/1.0/"
response = requests.post(url, headers=headers, cookies=cookies)

print(response.text)
print(response)