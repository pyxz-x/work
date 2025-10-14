import json
import os
from time import sleep

from lxml import etree

from getCookies import get_cookies
import requests
url = 'https://www.google.com/search?q=Primary+Math+Competition+examination+questions+-Syllabus+-Table+of+Contents+-Cultivation+Plan+-Lesson+plan+-Teaching+plan+-Admission+Brochure+-Name+List-Performance+-Handbook+filetype:PDF&sca_esv=db58c19f0507c741&biw=1536&bih=695&ei=zsnraNcg3OXV7w_LnMDQBQ&start=170&sa=N&sstk=Af77f_duXmKYA2BqMI3RXu81fD8x5jk4tRs1vubA5Q0IIEPBYYasWZnPB6BdSdLKhcnIIEcipxrdqNY0TmAl9CngEhKorR2wSKq8yYcDo2CTXaRIp-kPz-fleOAGOImZy-JAf2Wwir2hlNmmvnsr3M0LI3lEuQvKq6I&ved=2ahUKEwjXv67A_Z6QAxXccvUHHUsOEFo4ggEQ8tMDegQICRAV'
cookies = {}
    # {'NID': '525=CFSoCvGNhPzD0hLVo2Hnjy1Ovnfvs5MZDNJNwG8_sDD7BsDInlitWQ7pAkumcXfnNep0q-DnJBPm8JRKA0PafzWAdGJD5AE56Ym595G4B5jiSutz7WcPPzOdkvcp12va3B417Taj2MTbnfefpL4I4lZod5P4G2EL3tpYe29uGkqT4-ZR2ARCTcAIWUkQDk4Ym2va1Z5HDkuZC15bho6O_o0hB7QTQcZSRzd5ythNHxtbyN1OZmSBxQ', 'AEC': 'AaJma5sFUKpz_SoxdKhhhuUUoNuKfBwNyDP4McjTK9tZZrrcwpWZh9Kv35w'}



headers = {
        "referer": "https://www.google.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
}
proxies = {
    "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
}
resp = requests.get(
    url,
    headers=headers,
    cookies=cookies,
    proxies=proxies,
    verify=False,
)
html = etree.HTML(resp.text)
print(resp.text)
#  div_list 用于验证cookie是否失效 如果失效 重新获取cookie
result_div = html.xpath('//div[@class="MjjYud"]')
if len(result_div) == 0:
    cookies = get_cookies()
    while len(cookies) == 0:
        sleep(15)
        cookies = get_cookies()
net_page = html.xpath("//a[@class='LLNLxf']/@href")
page_links = html.xpath("//a[@class='fl']/@href")
if len(net_page) > 0:
    page_Lastlink = (
        "https://www.google.com" + page_links[-1]
    )  # 获取这一页的最后一个link 进行递归
    # 存储pagelink
    with open("page_links.txt", "a+") as f:
        for link in page_links:
            f.write("https://www.google.com" + link + "\n")