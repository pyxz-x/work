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
    {'DV': 'E3kjpVOBp-QQ0J-HU_sc0efSqvFXnhk', 'NID': '525=Ezpjn3OOXO8UTwWrOUIVjrUxgNoCbkKKsVCKioKG8buE_gL-DNJkV59ZmD9txlCqYkKu3BavtQ3xu0dKY_tGA9tAJdQlLXVEQE26o0DR4vLmAqfJx7-USruruyffHvdmLEJ_GEHXXz43oq5gR9DC77kXYVrIh0gmdSQjuaUMv9hupK89BJGsbwX_pb7l7eDA28bKwB0V0-c4YIiE1iCR0ABa-DYH0SM3oTJmkkyvOqVKtiPDJLG0IAWu', 'AEC': 'AaJma5vW63DwRerTUUhS7Xw4oOHgdeVTCWZAfgk4E-UCo8MAUowaOu-SLw'}


url = 'https://www.google.com/search?q=%E5%8A%A8%E5%8A%9B%E6%9C%BA%E6%A2%B0%E5%8F%8A%E5%B7%A5%E7%A8%8B+-%E5%A4%A7%E7%BA%B2+-%E7%9B%AE%E5%BD%95+-%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88+-%E6%95%99%E6%A1%88+-%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0+-%E5%90%8D%E5%8D%95+-%E5%AF%B9%E8%B1%A1+-%E6%88%90%E7%BB%A9+-%E6%89%8B%E5%86%8C+-%E8%A7%84%E8%8C%83+filetype:PDF+site:ustc.edu.cn&sca_esv=db58c19f0507c741&biw=1536&bih=695&ei=f6vtaPKzE5nj2roP8oXHAQ&start=70&sa=N&sstk=Af77f_f8iBu4WIJ_IOhCOkCMLqAoHRtiUHksDFK4qMEjdJaoUyNZNyXKDbzJmUgr8HJhxeYi3d7ACcSJHNFoIWL2CNmhQ8VnwJ3wjg&ved=2ahUKEwiy793wyKKQAxWZsVYBHfLCMQAQ8tMDegQICBAQ'
resp = requests.get(
    url,
    headers=headers,
    cookies=cookies,
    proxies=proxies,
    verify=False,
)
data = dump.dump_all(resp)
bytes_len = len(data)

# 二进制兆（MiB）
mib = bytes_len / (1024 ** 2)
# 十进制兆（MB）
mb = bytes_len / (1000 ** 2)
# 千字节
kb = bytes_len / 1024

print(f"总流量: {bytes_len} B")
print(f"约: {kb:.2f} KB")
print(f"约: {mib:.3f} MiB (1024^2)")
print(f"约: {mb:.3f} MB (1000^2)")