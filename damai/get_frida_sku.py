# android_frida_example.py
import frida
import sys
import time
from time import sleep
def getSkuParams(lzh_t):
    # 全局变量存储提取的参数
    extracted_params = None
    def on_message(message, data):
        nonlocal extracted_params
        if message['type'] == 'send':
            payload = message['payload']
            if isinstance(payload, dict) and payload.get('type') == 'params':
                # 存储到变量供后续使用
                extracted_params = {
                    'data': payload['data'],
                    'headers': payload['headers']
                }
            else:
                print("[*] {0}".format(payload))
        else:
            print(message)

    app_name = "大麦"   # 应用名

    device = frida.get_usb_device(timeout=5)   # 手机通过 USB
    session = device.attach(app_name)          # 直接附加到运行中的应用
    with open("/Users/a1/Desktop/work2/work/damai/frida_code/get_sku_params.js", "r", encoding="utf-8") as f:
        js_code = f.read()
    js_code = js_code.replace('lzh_t', lzh_t)
    sleep(2)  # 短暂等待
    script = session.create_script(js_code)
    script.on('message', on_message)
    script.load()
    # 等待参数提取完成
    timeout = 10  # 30秒超时
    start_time = time.time()
    while extracted_params is None and (time.time() - start_time) < timeout:
        time.sleep(1)

    if extracted_params:
        # print("\n=== 参数提取成功 ===")
        # print(extracted_params)
        script.unload()
        session.detach()
        return extracted_params
        # print("Data字段:", extracted_params['data'])
        # print("headers字段:", extracted_params['headers'])
    else:
        print("\n参数提取超时或失败")
        script.unload()
        session.detach()
# a = getSkuParams('980568627563')
# print(a)
