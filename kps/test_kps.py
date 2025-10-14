import random
import concurrent
import time
import requests
import json
from get_cd import get_cd
from concurrent.futures import ThreadPoolExecutor
from loguru import logger
from curl_cffi.requests import Session
# 初始化session和请求数据
session = Session()

json_giftcard_money = {
    "query": "query gqlGetProductInventoryBySkus($productSkus: [String!]) { products(filter: { sku: { in: $productSkus } }, pageSize: 500) { items { name sku ...on ConfigurableProduct { variants { product { sku quantity_available } } } } } }",
    "variables": {"productSkus": ['X000007309']}}

ct = "0bxFlspF7SsLr87EWzENwXB60fveEUKN3WlrjJm0EdpVJWhTc04x2n4xQCHs9j27k2RTCO2PzUqqWS27k1RlN2AozJ1KSxQsi4MIpEKegu4DVFINTek9CPbfz9sLIaT00hVRgZPgoVb24J8ls3dkG5SEOIMY1Oik16m5JLwCudKuYJG"
ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
st = 1759044123408
v = "j-1.1.28649"

# 基础请求头
headers = {
    "accept": "*/*",
    "accept-language": "es-AR,es;q=0.9",
    "content-type": "application/json",
    "user-agent":ua,
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "store": "arcteryx_en",
    "x-country-code": "ca",
    "x-is-checkout": "false",
    "x-kpsdk-cd": get_cd(st, ct),
    "x-kpsdk-ct": ct,
    "x-kpsdk-v": v
}

proxies = {'https': 'http://ygtestdemeam:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001'}


def req():
    session = Session()
    logger.warning('开始请求')
    try:
        payment_response = session.post('https://arcteryx.com/api/mcgql', headers=headers, json=json_giftcard_money,
                                        proxies=proxies, verify=False, timeout=20)
    except Exception as e:
        return False
    status_code = payment_response.status_code
    logger.info(f"状态码: {status_code} {payment_response.headers.get('ct')} {payment_response.text}")
    # logger.info(f"状态码: {status_code} {payment_response.text}")
    session.close()
    if status_code == 200:
        return True
    else:
        return False


req()