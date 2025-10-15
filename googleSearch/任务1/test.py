
import requests
from requests_toolbelt.utils import dump
headers = {
    "referer": "https://www.google.com/",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
}
proxies = {
    "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
}
cookies = \
    {
        'NID': '525=ftpp4_OnOFa_mQMTYqcCdAOJUkHFOt-3I0G3Oc7IoUBfUXKmyrFeaJJTMe2MHTnnVZ2wDr1Hrb-PqdfZfHZmkuyfkVBdhz1YddDznOQKGHxlxIYvb7AYep6lnWxV7fNSKg5z9RRa4dHgJEjyOrPU_DQB6bHb-3gHEMohuB0mmOJxSYn_-us2CTQX3JpQDY7vnnspwrqCWAdhwxLHkG86S_0n9SadYLsuBGjok06CQFQiSng',
        'AEC': 'AaJma5tErUMATDnbe9yNSNJUfTX7Dn2hvL2VAtcaPvAcYXhUoWVo0Px-2w'}

url = 'https://www.google.com/search?q=%E5%8A%A8%E5%8A%9B%E6%9C%BA%E6%A2%B0%E5%8F%8A%E5%B7%A5%E7%A8%8B+-%E5%A4%A7%E7%BA%B2+-%E7%9B%AE%E5%BD%95+-%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88+-%E6%95%99%E6%A1%88+-%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0+-%E5%90%8D%E5%8D%95+-%E5%AF%B9%E8%B1%A1+-%E6%88%90%E7%BB%A9+-%E6%89%8B%E5%86%8C+-%E8%A7%84%E8%8C%83+filetype:PDF+site:ustc.edu.cn&sca_esv=db58c19f0507c741&biw=1536&bih=695&ei=f6vtaPKzE5nj2roP8oXHAQ&start=70&sa=N&sstk=Af77f_f8iBu4WIJ_IOhCOkCMLqAoHRtiUHksDFK4qMEjdJaoUyNZNyXKDbzJmUgr8HJhxeYi3d7ACcSJHNFoIWL2CNmhQ8VnwJ3wjg&ved=2ahUKEwiy793wyKKQAxWZsVYBHfLCMQAQ8tMDegQICBAQ'
resp = requests.get(
    url,
    headers=headers,
    cookies=cookies,
    proxies=proxies,
    verify=False,
)
