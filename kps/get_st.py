from curl_cffi.requests import Session
import subprocess
from lxml import etree


def to_hex(data: bytes, mode: str = "hexdump", length: int = 16):
    if mode == "string":
        return data.hex()
    elif mode == "spaced":
        return " ".join(f"{b:02x}" for b in data)
    elif mode == "hexdump":
        for i in range(0, len(data), length):
            chunk = data[i:i+length]
            hex_bytes = " ".join(f"{b:02x}" for b in chunk)
            ascii_str = "".join(chr(b) if 32 <= b < 127 else "." for b in chunk)
            print(f"{i:04x}: {hex_bytes:<{length*3}} {ascii_str}")
        return None
    else:
        raise ValueError("mode 必须是 string / spaced / hexdump")
proxies = {'https': 'http://ygtestdemeam:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001'}
se = Session()
json_giftcard_money = {
    "query": "query gqlGetProductInventoryBySkus($productSkus: [String!]) { products(filter: { sku: { in: $productSkus } }, pageSize: 500) { items { name sku ...on ConfigurableProduct { variants { product { sku quantity_available } } } } } }",
    "variables": {"productSkus": ['X000007309']}}
# 请求 fp
url1 = 'https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp'
v = 'j-1.1.28649'
params_fp = {
    'x-kpsdk-v':v,
}
resp1 = se.get(url1, proxies=proxies, verify=False, params=params_fp, json=json_giftcard_money)
html1 = etree.HTML(resp1.text)
fp_code = html1.xpath('//script[1]/text()')[0]   # 填充 fp_code 代码
# 请求 ips.js
url2 = 'https://arcteryx.com' + html1.xpath('//script[2]/@src')[0].replace('amp;', '')   # jps url
resp2 = se.get(url2, proxies=proxies, verify=False, json=json_giftcard_money)
ips_code = resp2.text   # 填充 ips_code
# 请求 /tl
env_code = open('/Users/a1/Desktop/work/kps/kasada_env.js', 'r', encoding='utf-8').read()
#
env_code = env_code.replace('// fp_js_code', fp_code).replace('// ips_js_code', ips_code).replace('// ips_js_url', url2)   # 替换 fp_js_code ips_js_code
open('/Users/a1/Desktop/work/kps/result.js', 'w', encoding='utf-8').write(env_code)
    # 获取 tl所需要的请求头参数及表单参数
result = subprocess.run(['node', 'result.js'], capture_output=True, text=True).stdout.split('\n')
x_kpsdk_ct = result[6]
x_kpsdk_dt = result[8]
x_kpsdk_im = result[7]
params_tl = result[9]
    #处理 param_tl
params_tl = [int(i) for i in params_tl.split(',')]   # 指纹数组
print(len(params_tl))
params_tl = bytes(params_tl).hex()   # 先进行二进制再转为16进制
print(params_tl)
# to_hex(params_tl, mode="hexdump")

url3 = 'https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/tl'
headers3 = {
    "x-kpsdk-ct": x_kpsdk_ct,
    "x-kpsdk-dt": x_kpsdk_dt,
    "x-kpsdk-im": x_kpsdk_im,
    "x-kpsdk-v": "j-1.1.28649",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
    "content-type": "application/octet-stream",
    "accept": "*/*",
    "origin": "https://arcteryx.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "referer": "https://arcteryx.com/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/fp?x-kpsdk-v=j-1.1.28649",
}

print('x_kpsdk_ct', x_kpsdk_ct)
print('x_kpsdk_dt', x_kpsdk_dt)
print('x_kpsdk_im', x_kpsdk_im)
# params_tl
resp3 = se.post(url3, headers=headers3, data=params_tl,proxies=proxies, verify=False, json=json_giftcard_money)
print('tl响应码', resp3)
print('tl响应值', resp3)
print('-------------------------------')
print(resp3.headers['x-kpsdk-ct'])
print(resp3.headers['x-kpsdk-st'])
print(resp3.request.headers['user-agent'])

