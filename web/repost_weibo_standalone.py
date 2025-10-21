# -*- coding: utf-8 -*-
import requests
import json
import sys
import hashlib
import random
import time

# Windows系统编码设置
if sys.platform.startswith('win'):
    try:
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.detach())
        sys.stderr = codecs.getwriter('utf-8')(sys.stderr.detach())
    except Exception:
        pass

def calculate_s(from_param, uid):
    """
    计算微博API的s参数 - 基于SHA512算法

    Args:
        from_param (str): from参数值 (如 "12DC193010")
        uid (str): 用户ID

    Returns:
        str: 计算得到的s参数
    """
    # 计算 key2_s
    key2_s = hashlib.sha512(from_param.encode()).hexdigest().lower()

    # 计算 key1_s
    secret_key = "CypCHG2kSlRkdvr2RG1QF8b2lCWXl7k7"
    key1_s = hashlib.sha512((secret_key + uid + from_param).encode()).hexdigest().lower()

    # 循环逻辑
    s = ""
    j = 0
    hex_chars = "0123456789abcdef"

    for i in range(8):
        char_at_j = key2_s[j] if j < len(key2_s) else '0'
        j = j + hex_chars.find(char_at_j)
        print(j)
        if j < len(key1_s):
            s += key1_s[j]
        else:
            s += '0'

    return s

def generate_i_param(uid):
    """
    生成i参数 - 基于计算S函数

    Args:
        uid (str): 用户ID

    Returns:
        str: 生成的i参数
    """
    i = calculate_s("1081093010", uid)
    return i

def randomize_repost_text(original_text):
    """
    随机化转发文本，避免重复内容错误
    
    Args:
        original_text (str): 原始转发文本
        
    Returns:
        str: 随机化后的转发文本
    """
    if not original_text:
        original_text = ""
    
    # 随机后缀选项
    random_suffixes = [
        "👍", "✨", "💯", "🔥", "👏", "💪", "🎉", "⭐", "🌟", "💫",
        "~", "！", "。", "...", "~~~", "！！", "。。。",
        " 👀", " 🤔", " 😊", " 😄", " 🙂", " 👌", " ✌️", " 🤝",
        f" #{random.randint(1, 999)}", f" {random.randint(1, 99)}",
        f" [{random.randint(1, 9)}]", f" ({random.randint(1, 9)})"
    ]
    
    # 随机前缀选项（偶尔使用）
    random_prefixes = [
        "", "", "", "", "",  # 大部分时候不使用前缀
        "转发 ", "分享 ", "👀 ", "✨ ", "🔥 "
    ]
    
    # 随机选择前缀和后缀
    prefix = random.choice(random_prefixes)
    suffix = random.choice(random_suffixes)
    
    # 组合文本
    randomized_text = f"{prefix}{original_text}{suffix}"
    
    # 确保文本长度不超过微博限制（一般为140字符）
    if len(randomized_text) > 140:
        # 如果超长，只保留原文本和一个简单后缀
        simple_suffixes = ["👍", "✨", "~", "！", "。"]
        suffix = random.choice(simple_suffixes)
        randomized_text = f"{original_text}{suffix}"
        
        # 如果还是超长，截断原文本
        if len(randomized_text) > 140:
            max_original_length = 140 - len(suffix)
            randomized_text = f"{original_text[:max_original_length]}{suffix}"
    
    return randomized_text

def repost_weibo(weibo_id, repost_comment="", cookies=None, proxies=None):
    """
    转发微博 - 使用iOS客户端API（简化版，无验证码处理）

    Args:
        weibo_id (str): 要转发的微博ID
        repost_comment (str): 转发时的评论内容，默认为空
        cookies (dict): 登录状态的cookies，需要从中提取SUB和uid
        proxies (dict): 代理设置

    Returns:
        dict: API响应结果
    """

    # 从cookies中提取gsid（SUB值）和uid
    if not cookies:
        return {"ok": 0, "message": "缺少cookies参数", "error_type": "missing_params"}

    gsid = cookies.get('SUB')
    uid = cookies.get('uid')

    if not gsid:
        return {"ok": 0, "message": "cookies中缺少SUB字段", "error_type": "missing_params"}

    if not uid:
        return {"ok": 0, "message": "cookies中缺少uid字段", "error_type": "missing_params"}

    # iOS API地址
    url = "https://api.weibo.cn/2/statuses/repost"

    # 动态计算签名参数
    from_param = "12DC193010"
    s_param = calculate_s(from_param, str(uid))
    i_param = generate_i_param(str(uid))
    
    # 随机化转发文本，避免重复内容错误
    randomized_comment = randomize_repost_text(repost_comment)
    print(f"原始转发文本: '{repost_comment}'")
    print(f"随机化后文本: '{randomized_comment}'")

    # 请求头
    headers = {
        "Host": "api.weibo.cn",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "User-Agent": "WeiboOverseas/6.5.1 (com.weibo.international; build:6.5.1.1; iOS 15.8.0) Alamofire/5.9.1",
        "Accept-Language": "zh-Hans-JP;q=1.0",
        "X-Sessionid": "test_session_id_123"
    }

    # 请求体参数
    data = {
        "aid": "",
        "c": "weicoabroad",
        "from": from_param,
        "gsid": gsid,
        "i": i_param,
        "id": weibo_id,
        "is_comment": "0",
        "lang": "zh_CN",
        "s": s_param,
        "source": "",
        "status": randomized_comment,
        "ua": "iPhone8%2C1_iOS15.8_Weibo_intl._6510_wifi__iphone__os15.8",
        "v_p": "59",
        "visible": "1"
    }

    try:
        response = requests.post(
            url=url,
            headers=headers,
            data=data,
            cookies=cookies,
            proxies=proxies,
            timeout=10,
            verify=False
        )

        # 添加详细的调试输出
        print(f"=== 转发操作调试信息 ===")
        print(f"请求URL: {url}")
        print(f"微博ID: {weibo_id}")
        print(f"转发评论: {repost_comment}")
        print(f"使用代理: {proxies}")
        print(f"HTTP状态码: {response.status_code}")
        print(f"动态计算的s参数: {s_param}")
        print(f"动态计算的i参数: {i_param}")

        # 尝试解析JSON响应
        try:
            response_data = response.json()
            
            # 检查response_data是否为字典类型
            if not isinstance(response_data, dict):
                print(f"响应数据类型异常: {type(response_data)}, 值: {response_data}")
                return {"ok": 0, "message": f"响应数据格式错误: {response_data}", "error_type": "invalid_response_type"}

            # 检查错误信息
            errno = response_data.get("errno")
            errmsg = response_data.get("errmsg", "")
            
            # 如果遇到验证码要求，直接返回失败（简化版不处理验证码）
            verification_keywords = [
                '验证', 'captcha', 'verify', 'verification',
                'For your safety', 'please verify', 'security check'
            ]
            needs_verification = any(keyword.lower() in errmsg.lower() for keyword in verification_keywords)
            
            if needs_verification or errno in [100003, 100015] or 'geetest' in response_data:
                print("检测到需要验证码，但简化版不支持验证码处理")
                return {"ok": 0, "message": f"需要验证码验证，请稍后重试: {errmsg}", "error_type": "verification_required"}

            # 检查其他错误
            if errno and errno != 0:
                print(f"转发失败 - errno: {errno}, errmsg: {errmsg}")
                return {"ok": 0, "message": f"转发失败: {errmsg}", "data": response_data}

            # 检查成功标识
            retweeted_mid = response_data.get("statuses", {}).get("retweeted_status", {}).get("mid", "")
            idstr = response_data.get("idstr", "")

            if retweeted_mid or idstr:
                print(f"转发成功")
                return {"ok": 1, "message": "转发成功", "data": response_data}
            else:
                # 即使没有明确的成功标识，只要没有错误就认为成功
                print(f"转发完成")
                return {"ok": 1, "message": "转发完成", "data": response_data}

        except json.JSONDecodeError:
            # JSON解析失败，检查HTTP状态
            response.raise_for_status()
            return {"ok": 0, "message": "响应格式错误", "error_type": "json_error"}

    except requests.exceptions.SSLError as e:
        error_msg = f"SSL错误: {e}"
        print(error_msg)
        return {"ok": 0, "message": error_msg, "error_type": "ssl_error"}
    except requests.exceptions.ConnectionError as e:
        error_msg = f"连接错误: {e}"
        print(error_msg)
        return {"ok": 0, "message": error_msg, "error_type": "connection_error"}
    except requests.exceptions.Timeout as e:
        error_msg = f"请求超时: {e}"
        print(error_msg)
        return {"ok": 0, "message": error_msg, "error_type": "timeout_error"}
    except requests.exceptions.HTTPError as e:
        error_msg = f"HTTP错误: {e}"
        print(error_msg)
        return {"ok": 0, "message": error_msg, "error_type": "http_error"}
    except Exception as e:
        error_msg = f"请求失败: {e}"
        print(error_msg)
        return {"ok": 0, "message": error_msg, "error_type": "unknown_error"}

def main():
    """
    主函数 - 转发微博示例
    """
    # 示例参数
    weibo_id = "5222732339087453"  # 要转发的微博ID
    repost_comment = "测试转发"  # 转发文本（会自动添加随机后缀避免重复）
    
    # 登录状态的cookies（需要包含SUB和uid字段）
    cookies = {
        'SUB': '_2A25F9WtfDeRxGe9P7lQU-S_Fzz-IHXVko_mXrDV6PUJbkdAbLVTakWpNdRp_QYpEIbJK9NN7X5sG3lgH6avWbdLs',  # 替换为实际的SUB值
        'uid': '9156591943'  # 替换为实际的uid值
    }
    
    # 代理设置（可选）
    proxies = None  # 或者设置为 {'http': 'http://proxy_ip:port', 'https': 'http://proxy_ip:port'}
    
    print("开始转发微博...")
    result = repost_weibo(weibo_id, repost_comment, cookies, proxies)
    
    if result["ok"]:
        print(f"✅ {result['message']}")
        print(f"响应数据: {json.dumps(result.get('data', {}), ensure_ascii=False, indent=2)}")
    else:
        print(f"❌ {result['message']}")
        if 'data' in result:
            print(f"错误详情: {json.dumps(result['data'], ensure_ascii=False, indent=2)}")

if __name__ == "__main__":
    main()