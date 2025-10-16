import requests


def request_with_proxy():
    # 目标URL（可以替换为你需要请求的网站）
    url = "https://www.baidu.com/"

    # 配置本地8080端口作为代理
    proxies = {
        # HTTP请求通过本地8080代理
        "http": "http://127.0.0.1:8080",
        # HTTPS请求也通过本地8080代理
        "https": "http://127.0.0.1:8080",
    }

    try:
        # 发送带代理的请求
        response = requests.get(
            url,
            proxies=proxies,
            # 超时设置（防止代理无响应时卡住）
            timeout=10,
        )

        print(f"请求成功，状态码：{response.status_code}")
        print("响应内容：")
        print(response.text)

    except requests.exceptions.ConnectTimeout:
        print("连接超时，请检查本地8080端口是否有代理服务在运行")
    except requests.exceptions.ProxyError:
        print("代理错误，请确认代理配置是否正确")
    except requests.exceptions.RequestException as e:
        print(f"请求失败：{e}")


if __name__ == "__main__":
    print("使用本地8080端口作为代理发送请求...")
    request_with_proxy()
