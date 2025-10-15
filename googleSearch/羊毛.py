import requests
from requests.utils import cookiejar_from_dict

se = requests.Session()

se.headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "zh-CN,zh;q=0.9,ja;q=0.8",
    "priority": "u=1, i",
    "referer": "https://serpapi.com/?gad_source=1&gad_campaignid=23026672491&gbraid=0AAAAADD8kqO0X0k8rMGNwJDNW8hjvT-ua&gclid=CjwKCAjwxrLHBhA2EiwAu9EdMw8C9cRsbRCUxUshkn40B291L89h8t7d74T7vQ4WxBelLkpae_rNxxoCOXgQAvD_BwE",
    "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
    "x-csrf-token": "GgcnYJ7G/A/XOfujVVv3kKQztXgn9L3mysDJUwdrUW0+7HirQ0x56ygXlrmNwal311JsYiR0g3eDEKljbyfBvQ==",
    "x-requested-with": "XMLHttpRequest"
}
se.cookies = cookiejar_from_dict({
    "_gcl_gs": "2.1.k1$i1760420433$u89739417",
    "_ga": "GA1.1.1912239167.1760420435",
    "intercom-id-yzck75jr": "f009cafc-dd64-4e92-9a3f-1de55d2d4185",
    "intercom-session-yzck75jr": "",
    "intercom-device-id-yzck75jr": "cc512848-3475-413a-81be-8901cff43aec",
    "desired_plan": "free",
    "_gcl_aw": "GCL.1760420814.CjwKCAjwxrLHBhA2EiwAu9EdMw8C9cRsbRCUxUshkn40B291L89h8t7d74T7vQ4WxBelLkpae_rNxxoCOXgQAvD_BwE",
    "_ga_669N8EJ8QH": "GS2.1.s1760420435$o1$g1$t1760420814$j57$l0$h0",
    "_SerpAPI_session": "s1kfW6ovB1X4ndyXF6XeMDDY5Z0tgXLT9clGdZ1PIMW8VzFmt8Ws8y5P5W%2B0fQP7hG8ANSdp8mvVL2K14W5%2BCCavFvFVcLspa%2BHA3WUvfCtRgV1HD%2BUVZqGK85aaMypVN1lIy5KpDrR41ksOnQEN1Xp%2BJ0AmMqpNfYStvfHVYiq%2BBT63bTX5c1iid6I0OXmDz6%2BeVBMq4gBoF8U5ABfocnuHMY%2FE7quL%2F7Xxq1O3WeQ2iHdJoEUou2w7%2FFBnQ5flSAP0NOSHtz947kXy6NU%2Btq9rgqD2QL0c--m3Y3viq%2FYaQk7qVc--AcjwysaQN9dy51xi8y8p4w%3D%3D"
})
resp = se.get('https://serpapi.com/search.json?q=%E7%A5%9E%E7%BB%8F%E7%94%9F%E7%89%A9%E5%AD%A6%E5%92%8C%E8%A1%8C%E4%B8%BA%E5%AD%A6+-%E5%A4%A7%E7%BA%B2+-%E7%9B%AE%E5%BD%95+-%E5%9F%B9%E5%85%BB%E6%96%B9%E6%A1%88+-%E6%95%99%E6%A1%88+-%E6%8B%9B%E7%94%9F%E7%AE%80%E7%AB%A0+-%E5%90%8D%E5%8D%95+-%E5%AF%B9%E8%B1%A1+-%E6%88%90%E7%BB%A9+-%E6%89%8B%E5%86%8C+-%E8%A7%84%E8%8C%83+filetype%3APDF+site%3Austc.edu.cn&hl=en&gl=us&async=true&gRecaptchaResponse=0cAFcWeA6dF3l6SZilBKz2O74FB1Jn6X2B3ot2gM-1_W_rSa8gMQcE8QFWr4qgc665C4GVnrFQl9mcyiaww5z0b2HJT9-MPbjXmcEltwhBZwYnc977sbcDi-a8ckmakwsMJyckI0zR4CMYeGeDtQ7WyBKXmN5wX09JIrAFPUyoJZbHBeHAKppC3LLEpxbel5_iPNz2K9y6gBt6EtH-g7JcG7jhXDej7g9OVWr2dZiLYH1lYBJsXBRTWrIM3J-l6M-TGFQAqA24nCiH7R9bzK-1Fvr-Z3VfgcXmLW2WF5WGezpX2rO7qIpQOwBaw1-nX4jI4Rz82y6RsL3CyoCXZJC7EXD6PjBkfpieyclMb8gQ9qYED3XRAqF8Tz7WJV0deFSb5FnqpWOlVVjHaiOYf3NDsk0mX1bqjBvkWj5FOJ9ku7w5tOUyv0SEcMzpTGxfHYc8KqK_TqeXsmaSkG5nAEr5DZzi9CGr-wGqwlY6HdoSptKPoLxzBoc65Vn54ECGpsue8dNkdnRZgk_vPJIPn2sY4d7tce9UuyXSyadcHnwd92z-nauTUP0A6uWYR2TBQ7ThBnjSC8i5c0Su4o5iB0BHCU1THaycCRUi_YeGBfNUcLvBisB4UHVIjCAPZvEPSgHQo9_J-ozvez60nFDQP6TtpTMzopnUBD1TMt_T-Nzq4irdjeuAS9YfwhuPCJvhSFneomHEd2jbrSyTNcL5pT92M6xmNm72w8HL7h_Wmj7lB7xFf3qyziw2iP_5u0VG5SRlVV6OBoMB6fFQz9oRqnj_6jU3oncat5FEei_fXquOc9f_WaClI7nVg6Bk9fKamRtHBZdiT4uQLgwy')
print(resp.cookies)
print(se.cookies.values())
url = "https://serpapi.com/search.json"
params = {
    "q": "神经生物学和行为学 -大纲 -目录 -培养方案 -教案 -招生简章 -名单 -对象 -成绩 -手册 -规范 filetype:PDF site:ustc.edu.cn",
    "hl": "en",
    "gl": "us",
    "async": "true",
    "gRecaptchaResponse": "0cAFcWeA7drgcTvt6k1pBP8tYPiv7YqLjkL91Zio-1uCXgA9gf23JgDgbBemOa5iOjtZ8WeOA3cccVL-pWTMi7NHLZFr_i3OzW2_Q1KroH07_CrtizcjPB7_QVqJTXhdFFbHbmyXgCzCpVnXns4bBNifhKV_0V6h6kfX2ZJnhYEdSpzfw2rbI3pNLIbeyfQ_kiti50mvU_WC8a8OSYkulVddgeDLD2K5VuTZh3kUy-mjwGuzvVMxBMoOpM9wuUzMfDnuZksl8y4fqWL-MHWAjqRMnTNJSCxxT88M8LkWhW_ERfc1a-MnYcowE5ErNivhDmg5eHqBJeKR7ZJJHfpfFwDDrjs9W_Zkcy_Lr053chPKV7yb3D-yLy53EGRTTa_EjkA52WTrTsvA2n6lT9kDkSDOqj7thqrZgJ3bcbQwdvsdDPkGxxZ-iVJlPEj0EgYROLbV8gzc41bdRvNgb0InGm8VKMxAfc1z1t0tIOSYmcV-Bey4DrPYqPHbr7hhs_jfDoQCpTCHjigLHu0-sDBG9tMd6gtPsHbG_hUOB_w_yOsSM9EO6Z-q88SmoVivLnQ4_sWaZiUTCXwpr9LzhrD2CkINca5USdMfyyKwrbgp8xrD0IT6X5j5asfoRYQn5_pY_XUZfJqezZBUFQzNWAb_PTvg1ovexpBh2cBFc3TRxDPG5cVnXM7l0dpvNH_ZxSiGT7gjfX7V_jTl4RQMST1EeRakH7XZzIS9zF44hiWOv02OEHKVJIIYq-wtZ9HOPFosAozQlT8Y0z5yoS"
}
response = se.get(url, params=params)

print(response.text)
