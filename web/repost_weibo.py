# -*- coding: utf-8 -*-
import requests
import json
import sys
from comment_post import handle_verification

# Windows控制台编码处理
if sys.platform.startswith('win'):
    try:
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())
        sys.stderr = codecs.getwriter('utf-8')(sys.stderr.detach())
    except Exception:
        pass

def repost_weibo(weibo_id, repost_comment="", xsrf_token=None, cookies=None, pic_id="", is_repost=0, comment_ori=0, is_comment=0, visible=0, share_id="", proxies=None):
    """
    转发微博
    
    Args:
        weibo_id (str): 要转发的微博ID
        repost_comment (str): 转发时的评论内容，默认为空
        xsrf_token (str): XSRF令牌，需要从浏览器获取
        cookies (dict): 登录状态的cookies，需要从浏览器获取
        pic_id (str): 图片ID，默认为空
        is_repost (int): 是否转发，默认为0
        comment_ori (int): 评论原创，默认为0
        is_comment (int): 是否评论，默认为0
        visible (int): 可见性设置，默认为0
        share_id (str): 分享ID，默认为空
    
    Returns:
        dict: API响应结果
    """
    
    url = "https://weibo.com/ajax/statuses/normal_repost"
    
    headers = {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6",
        "client-version": "v2.47.100",
        "content-type": "application/x-www-form-urlencoded",
        "origin": "https://weibo.com",
        "referer": "https://weibo.com/u/1742566624",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest",
        "x-xsrf-token": xsrf_token
    }
    
    # 构建请求体数据
    data = {
        "id": weibo_id,
        "comment": repost_comment,
        "pic_id": pic_id,
        "is_repost": str(is_repost),
        "comment_ori": str(comment_ori),
        "is_comment": "0",
        "visible": str(visible),
        "share_id": share_id,
        "mark": "999_reallog_mark_ad:999|WeiboADNatural",
        "rid": "0_0_50_5044657900564058007_0_0_0"
    }
    
    import time
    
    # 不重试：代理失败立即返回，让外层切换代理
    max_retries = 1
    for attempt in range(max_retries):
        try:
            response = requests.post(
                url=url,
                headers=headers,
                data=data,
                cookies=cookies,
                proxies=proxies,  # 添加代理支持
                timeout=5,  # 调整为8秒超时，快速失败并切换代理
                verify=False  # 禁用SSL证书验证
            )
            # 添加详细的调试输出
            print(f"=== 转发操作调试信息 ===")
            print(f"请求URL: {url}")
            print(f"微博ID: {weibo_id}")
            print(f"转发评论: {repost_comment}")
            print(f"使用代理: {proxies}")
            print(f"HTTP状态码: {response.status_code}")
            
            
            # 先尝试解析JSON响应，获取业务错误信息
            try:
                response_data = response.json()
                print(f"转发API响应状态码: {response.status_code}")
                print(f"转发API响应头: {dict(response.headers)}")
                print(f"转发API响应文本: {response.text}")
                print(f"转发API响应JSON (完整): {response_data}")
                print("=" * 80)
                print("响应字段详细分析:")
                for key, value in response_data.items():
                    print(f"  {key}: {value} (类型: {type(value).__name__})")
                print("=" * 80)

                # 检查代理API相关错误
                response_text = response.text
                if 'FAILED_OPERATION' in response_text:
                    print(f"❌ 检测到FAILED_OPERATION错误")
                    # 提取request_id
                    import re
                    request_id_match = re.search(r'request id:([a-f0-9\-]+)', response_text)
                    if request_id_match:
                        request_id = request_id_match.group(1)
                        print(f"🔍 提取到request_id: {request_id}")
                    else:
                        print(f"⚠️ 未找到request_id")
                    
                    # 打印完整错误信息
                    print(f"完整错误响应: {response_text}")

                # 检查是否需要验证码
                if response_data.get('ok') != 1:  # ok不等于1都视为错误（包括0, -100等）
                    error_msg = response_data.get('message', '')

                    # 检查是否包含验证码相关的错误
                    verification_keywords = [
                        '验证', 'captcha', 'verify', 'verification',
                        'For your safety', 'please verify', 'security check'
                    ]
                    needs_verification = any(keyword.lower() in error_msg.lower() for keyword in verification_keywords)
                    
                    # 检查geetest数据是否存在且不为空
                    geetest_data = response_data.get('geetest', {})
                    has_geetest_data = bool(geetest_data and any(geetest_data.values()))

                    if needs_verification or response_data.get('errno') in [100003, 100015] or has_geetest_data:
                        print("检测到验证码验证，开始处理...")
                        
                    
                       
                        
                        # 提取geetest相关数据
                        if geetest_data:
                            print(f"geetest数据: {json.dumps(geetest_data, ensure_ascii=False, indent=2)}")
                            print(f"challenge: {geetest_data.get('challenge')}")
                            print(f"exception_key: {geetest_data.get('exception_key')}")
                            print(f"captcha_id: {geetest_data.get('captcha_id')}")
                        else:
                            print("响应中未找到geetest数据")
                        
                        # 打印其他验证码相关字段
                        print(f"errno: {response_data.get('errno')}")
                        print(f"message: {response_data.get('message')}")
                        print("=== 验证码相关值提取完成 ===")

                        # 处理验证码
                        verification_params = handle_verification(response_data, cookies, proxies, 'repost')

                        if verification_params:
                            print("验证码处理成功，重新转发...")

                            # 添加验证参数到请求数据
                            print(f"转发验证参数: {list(verification_params.keys())}")
                            data.update(verification_params)
                           
                            # 重新发送请求
                            response2 = requests.post(
                                url=url,
                                headers=headers,
                                data=data,
                                cookies=cookies,
                                proxies=proxies,
                                timeout=5,
                                verify=False
                            )

                            print(f"转发验证后响应状态码: {response2.status_code}")
                            try:
                                result2 = response2.json()
                                print(f"转发验证后响应: ok={result2.get('ok')}, message={result2.get('message', '')}")
                                response2.raise_for_status()
                                return result2
                            except json.JSONDecodeError:
                                print(f"转发验证后JSON解析失败: {response2.text[:200]}")
                                response2.raise_for_status()
                                return {"ok": 0, "message": "重新请求响应格式错误", "error_type": "json_error"}
                        else:
                            print("验证码处理失败")
                            return response_data
                    else:
                        # 不是验证码错误，直接返回
                        return response_data

                # 如果成功或没有明确错误信息，继续检查HTTP状态
                response.raise_for_status()
                return response_data
            except json.JSONDecodeError:
                # JSON解析失败，检查HTTP状态
                response.raise_for_status()
                return {"ok": 0, "message": "响应格式错误", "error_type": "json_error"}
            
        except requests.exceptions.SSLError as e:
            error_msg = f"SSL错误 (尝试 {attempt + 1}/{max_retries}): {e}"
            print(error_msg)
            if attempt < max_retries - 1:
                time.sleep(1)  # 等待1秒后重试
                continue
            return {"ok": 0, "message": f"SSL错误: {str(e)}", "error_type": "ssl_error"}
        except requests.exceptions.ConnectionError as e:
            error_msg = f"连接错误 (尝试 {attempt + 1}/{max_retries}): {e}"
            print(error_msg)
            if attempt < max_retries - 1:
                time.sleep(1)  # 等待1秒后重试
                continue
            return {"ok": 0, "message": f"连接错误: {str(e)}", "error_type": "connection_error"}
        except requests.exceptions.Timeout as e:
            error_msg = f"超时错误 (尝试 {attempt + 1}/{max_retries}): {e}"
            print(error_msg)
            if attempt < max_retries - 1:
                time.sleep(1)  # 等待1秒后重试
                continue
            return {"ok": 0, "message": f"请求超时: {str(e)}", "error_type": "timeout_error"}
        except requests.exceptions.HTTPError as e:
            error_msg = f"HTTP错误: {e}"
            print(error_msg)
            return {"ok": 0, "message": error_msg, "error_type": "http_error"}
        except json.JSONDecodeError as e:
            error_msg = f"JSON解析失败: {e}"
            print(error_msg)
            return {"ok": 0, "message": error_msg, "error_type": "json_error"}
        except Exception as e:
            error_msg = f"请求失败: {e}"
            print(error_msg)
            # 对于其他错误，检查是否包含SSL相关关键词
            error_str = str(e).lower()
            if any(keyword in error_str for keyword in ['ssl', 'certificate', 'handshake', 'tls']):
                print(f"检测到SSL相关错误 (尝试 {attempt + 1}/{max_retries})")
                if attempt < max_retries - 1:
                    time.sleep(1)  # 等待1秒后重试
                    continue
            return {"ok": 0, "message": error_msg, "error_type": "unknown_error"}
    
    return {"ok": 0, "message": "转发失败：已达到最大重试次数", "error_type": "max_retries_exceeded"}


def main():
    """
    使用示例
    注意：需要先从浏览器获取有效的XSRF token和cookies
    """
    
    # 示例参数 - 实际使用时需要替换为真实值
    weibo_id = "4754972942009490"  # 要转发的微博ID
    repost_comment = "1"  # 转发时的评论
    xsrf_token = "c377a4"  # 从浏览器开发者工具获取
    
    # cookies需要从浏览器获取，包含登录状态信息
    cookies = {
        'SCF': 'ArCuzciNrxCeYNWJOjmQWLIyZ992xfT6O9RU8vyt9-F8WiZiprVk43ZDG1q16Ue5EC4ZvNFPBggWX0sMrflIRjo.',
        'XSRF-TOKEN': 'c377a4',
        'PC_TOKEN': '110b131c78',
        'SUB': '_2A25FzBNHDeRxGe5M7VoS-C_OzD6IHXVk2CGPrDV6PUJbkdAYLU3NkWpNdSMHWXqGMGYETWL-3pBVCzCYYH01nOfU',
        'SUBP': '0033WrSXqPxfM725Ws9jqgMF55529P9D9WhsxgKBrjZEiDX5iAU9zdsv5JpX5KzhUgL.Fo-Re05Ne0n7SK52dJLoIpqLxK.L1hML1K2LxKMLBozLBo.7e0zc',
        'ALF': '02_1757303350',
        'WBPSESS': 'qXJSAyjkhIbBpoUH_nV63KPgBMlKLUNi3qlZo4hsi-pKF-DPhYIGh_2eW7k22MaIcCHDkLw6IN2JYwwXBFFnZ15sxX_Amm6gXo1qR1cbH0jzBpIdF3HKWIYm_LmT07ou0AIz7SpTUl-mCX6LfENrzA=='
    }
    
    print("开始转发微博...")
    result = repost_weibo(weibo_id, repost_comment, xsrf_token, cookies)
    
    if result:
        print("转发微博成功!")
        print(f"响应结果: {json.dumps(result, ensure_ascii=False, indent=2)}")
    else:
        print("转发微博失败!")


if __name__ == "__main__":
    main()