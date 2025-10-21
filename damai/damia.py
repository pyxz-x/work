# mtop_sign.py
# Python 3.8+
import hashlib
import hmac
import base64
from typing import Dict, Optional


def get_md5(data: str, encoding='utf-8') -> str:
    if data is None:
        data = ""
    m = hashlib.md5()
    m.update(data.encode(encoding))
    return m.hexdigest()


def convert_null2default(v: Optional[str]) -> str:
    return "" if v is None else v


def convertInnerBaseStrMap(params: Dict[str, str], appKey: str, include_extdata_if_flag: bool) -> str:
    # mirrors convertInnerBaseStrMap(map, str, z)
    # fields in exact order from Java implementation
    utdid = params.get("utdid")
    uid = params.get("uid")
    reqbizext = params.get("reqbizext") or params.get("reqBizExt") or params.get("reqbiz_ext")  # possible variants
    data = params.get("data")
    t = params.get("t")
    api = params.get("api")
    v = params.get("v")
    sid = params.get("sid")
    ttid = params.get("ttid")
    deviceId = params.get("deviceId")
    lat = params.get("lat")
    lng = params.get("lng")
    extdata = params.get("extdata")
    x_features = params.get("x-features")
    router_id = params.get("routerId") or params.get("router_id") or params.get("routerID")
    place_id = params.get("placeId") or params.get("place_id")
    open_biz = params.get("openBiz") or params.get("open_biz")
    mini_appkey = params.get("miniAppKey") or params.get("mini_appkey")
    req_appkey = params.get("reqAppKey") or params.get("req_appkey")
    access_token = params.get("accessToken") or params.get("access_token")
    open_biz_data = params.get("openBizData") or params.get("open_biz_data")

    sb = []
    sb.append(convert_null2default(utdid))
    sb.append("&")
    sb.append(convert_null2default(uid))
    sb.append("&")
    sb.append(convert_null2default(reqbizext))
    sb.append("&")
    sb.append(appKey or "")
    sb.append("&")
    sb.append(get_md5(data or ""))   # md5(data)
    sb.append("&")
    sb.append(convert_null2default(t))
    sb.append("&")
    sb.append(convert_null2default(api))
    sb.append("&")
    sb.append(convert_null2default(v))
    sb.append("&")
    sb.append(convert_null2default(sid))
    sb.append("&")
    sb.append(convert_null2default(ttid))
    sb.append("&")
    sb.append(convert_null2default(deviceId))
    sb.append("&")
    sb.append(convert_null2default(lat))
    sb.append("&")
    sb.append(convert_null2default(lng))
    sb.append("&")

    # extdata handling: if include_extdata_if_flag True -> always append convertNull2Default(extdata)
    # else append only if extdata is not blank (StringUtils.isNotBlank)
    if include_extdata_if_flag:
        sb.append(convert_null2default(extdata))
        sb.append("&")
    else:
        if extdata and extdata.strip() != "":
            sb.append(extdata)
            sb.append("&")
        else:
            # append nothing but keep the ampersand is omitted in Java only when extdata blank -> they still append nothing?
            # In Java code they append "&" only after adding extdata. So when extdata blank they don't append extra amp.
            pass

    sb.append(convert_null2default(x_features))
    sb.append("&")
    sb.append(convert_null2default(router_id))
    sb.append("&")
    sb.append(convert_null2default(place_id))
    sb.append("&")
    sb.append(convert_null2default(open_biz))
    sb.append("&")
    sb.append(convert_null2default(mini_appkey))
    sb.append("&")
    sb.append(convert_null2default(req_appkey))
    sb.append("&")
    sb.append(convert_null2default(access_token))
    sb.append("&")
    sb.append(convert_null2default(open_biz_data))

    return "".join(sb)


def convertSsrBaseStrMap(params: Dict[str, str], appKey: str) -> str:
    # Mirrors convertSsrBaseStrMap(map, str)
    utdid = params.get("utdid")
    uid = params.get("uid")
    data = params.get("data")
    t = params.get("t")
    sid = params.get("sid")
    ttid = params.get("ttid")

    sb = []
    sb.append(convert_null2default(utdid)); sb.append("&")
    sb.append(convert_null2default(uid)); sb.append("&")
    sb.append(""); sb.append("&")  # empty field as in Java
    sb.append(appKey or ""); sb.append("&")
    sb.append(get_md5(data or "")); sb.append("&")
    sb.append(convert_null2default(t)); sb.append("&")
    sb.append(""); sb.append("&")
    sb.append(""); sb.append("&")
    sb.append(convert_null2default(sid)); sb.append("&")
    sb.append(convert_null2default(ttid)); sb.append("&")
    # rest are a bunch of empty fields in original Java; we mimic by appending the same number of & and empties.
    # Java appended many "&" with empty strings; to be safe, append 13 more "&" (this reproduces the lots of empty segments)
    for _ in range(13):
        sb.append("&")
    return "".join(sb)


def sign_hmac_sha1(input_str: str, app_secret: str, output='base64') -> str:
    # output: 'base64' or 'hex'
    if app_secret is None:
        raise ValueError("app_secret is required for HMAC")
    key = app_secret.encode('utf-8')
    data = input_str.encode('utf-8')
    mac = hmac.new(key, data, hashlib.sha1).digest()
    if output == 'base64':
        return base64.b64encode(mac).decode('utf-8')
    else:
        return mac.hex()


# Example usage
if __name__ == "__main__":
    sample_params = {
        "utdid": "UT123",
        "uid": "UID456",
        "data": "{\"foo\":\"bar\"}",
        "t": "1600000000",
        "api": "mtop.test.api",
        "v": "1.0",
        "sid": "S1",
        "ttid": "TT1",
        "deviceId": "D1",
        "lat": "1.23",
        "lng": "4.56",
        "extdata": "{\"x\":1}",
        "x-features": "fset",
        "reqAppKey": "REQKEY",
        "accessToken": "ATOKEN",
    }
    appKey = "MY_APP_KEY"
    appSecret = "MY_APP_SECRET"  # your secret used for HMAC
    input_str = convertInnerBaseStrMap(sample_params, appKey, include_extdata_if_flag=False)
    print("INPUT:", input_str)
    sig_b64 = sign_hmac_sha1(input_str, appSecret, output='base64')
    sig_hex = sign_hmac_sha1(input_str, appSecret, output='hex')
    print("Signature (base64):", sig_b64)
    print("Signature (hex):", sig_hex)
