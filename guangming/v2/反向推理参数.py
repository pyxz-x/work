import hashlib
import random

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64
def aes(plaintext, key, iv_local, mode):
    if len(key) not in [16, 24, 32]:
        raise ValueError("密钥长度必须是 16, 24 或 32 字节")
    cipher = AES.new(key, AES.MODE_CBC, iv_local)
    if mode == 'encrypt':
        ciphertext = cipher.encrypt(pad(plaintext.encode('utf-8'), AES.block_size))
        return base64.b64encode(ciphertext).decode('utf-8')
    elif mode == 'decrypt':
        raw_data = base64.b64decode(plaintext)
        decrypted_data = unpad(cipher.decrypt(raw_data), AES.block_size)
        return decrypted_data.decode('utf-8')
def v78d98s(s):
    o = s[-8:]
    q = [ord(char) for char in "7748dc95"]
    r = ''
    for char in o:
        aE = ord(char)
        e6 = ((aE + 85 - 32) % 95) + 32
        r += chr(e6)
    ne = [ord(char) for char in r]
    for i in range(len(q)):
        ne[i] ^= q[i]
    return base64.b64encode(bytes(ne)).decode('utf-8')

def gfdc6456():
    r = 40
    t = True
    e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if t:
        i = e[10:]
    else:
        i = e
    n = ""
    for _ in range(r):
        index = random.randint(0, len(i) - 1)
        n += i[index]
    return n
# 第一次请求 获取DeviceConfig 解密拿到 secretKey与sessionId
devicedonfig = "GmPzYwAYtOn74vifnF6tzCV0fx6wWlo/EGLOg3hETq+60jm4xQLt/JbdvAha83/txNEWX6Is7/85jaq9KdeOHsbxWFGZ2iYlrL7TLW2so5XJVdMSMsvKhPfc8GCbmm74DW3Wrni22wXT1XGQHKitTmt6fzMpvdPqWfYUQTjZgYGGSwhsVnTgxJO3y0Up/yf51Ac/2ueztxo3LnrdpyavEulGk/QSMF9XWAlQ1h1JLrrB9c6+cUHPDnnuXMeBGUOsN5SGgG5PSOqtcy8D96CEng=="
a = aes(devicedonfig, b'87f879f135f27da7', b'0123456789ABCDEF', 'decrypt').split('#')
secretKey = base64.b64decode(a[0])
sessionId = a[2]
print(f'devicedonfig解密为：'
      f'{a}')
print(f'解密secretKey、sessionId成功\tsecretKey:{secretKey},sessionId{sessionId}')

# date
data = '0blQ85dGJrY0HYY8GlS4tTBVuksZpLI2N7miYiBeU9vY9wiqr1HDVrQu/nh24aQFOLx89WO+FhlMhh9mWcSTEdMdH1TxkrUJb57bwDleJc89TrkaizRkJYxhSrSVtfzN2M4ntO4GluPorGFCITs3dnCA3TSZKxP9e4LMAA2PWJrZBPHERBSTp9FrXIi/ff0QALAbcH20kVWfxMDtF9jodISFwpFrnGxxo+pMPRVifOr5zQwkKD6m81EyY7CCsJAdoS1Vf3Gx7Rp2MeTJbQvGOC/OwMCzpf2+9MX+OHFlkadVkosFT83L7iIBzASd/3VZ3cRdAMSCjjV3MvoFhysdNtXXSoTS7HBtldJQb5ukWGiUZpdbpyP8k8jIeyqaooLBtkP1tZsPzR5PlbxLFS3AHOeR1mSLZIkoY/VAWTKN1evyPuXUSZQ7OmaAncVPJAEvHo2bM8EhY+4Ev5tRDi6zI3qxk+SemT5I73INLuGcHSlv+AM4qkK7+jzM3Loy8o8iL6vCOyPvmKdNo3m2t0QpRnj4fKLE6wAVGmtjpn5ZZUKnbmJf1JacH4FpkeIH1+LkkiG2bDo7NJO6G2XXFJR+JwFPKEVK5pq5Cjr5EyhMbr6dzgRHs/WxtebnOOF7rKqrIxLlz/bL++zmXsuJ+ugLhujq00N/b/O0bAezyW1Iyawo1lq+JBZ4LLU6ah36PtDTqH4tycBBRULduqBEY6e4yEnrBcFIoMyNGFFJLyKXec047Tp0/vJmI1p0qQ39rhAlF7V6BLMp3IPg/voi0e5Ql3SK2OiOQoJQsfQMdxWZalnvkOM2GNmnHLTH2kwQefJ3g+sRqLEdAedca/ITvkeCJFC6RSOf46Q6KasWOUHOfoziUVdY8imOfg0m9YBKxVrPYLVwSpRl2yNzT9u7VV0zWB1Z80pTTLMMZYwUBkT1nmAtgxH+iBWJa6h+k9Mw+tXMPRdJZu29PfOl4XgLFNmV8UvWIX3/mqLR11J//0wei5CUYwnf9+cwTw6rs9Og4vKHU654ckPH9KVfnTIeMfVW8ALmr+75ps8seFbg1Eb+4y4W6Nk0g8adrJtw/loH19Klyc7q4iyctdPzQAXp6aOvMFxwR6BW72FA3fPlUCoT2Om0ZuJflGeYD4Unn6ojVHP3dzJ8tKPjbrGi5EeQfcAvWsMwmvAmHr4JxnpfyvuY4KawwozT+mws3zxw384eBtMJt5Fj34FrR/hXmXgpxgR6Qm14tzmsdLZ2sfRYagMyaD1X0TJLn9H2sF1sbyKkvHVmVuIyfxPhgD1E4V7yIyM4sm2QjGCR6Fcyzr5H1WxPYTXxTbHL/M38dsRLfMHfB/qezNExkwfHVb636Pt95o4Gdxdrg7drhewxPC4n8GmpU6RQYtb69v58mwrCOo++JF6EdXAEjS2J9f8iJHzShTOK8VoRuF/It/1S5ESoWL8th1YvB+0ZuHrZzTf4igRJFtrxbpBAeKZPjLBykPA3VBwJeXGwsvUjM5FIBXsIAqSwkLANnYoJ/XikuB5Hy1dVi5eGfLwawei8PiWyTroSNf8pglm4fpAnVe8BrOH08cuOwhdMXLgy0TD+sjjSkVciy3ow3fn9CQq76ogeoTutEYexYNxVAhXWtfuFjWf+PgRoDnisVtBYnLDw8Ugok3T9H0ThNDPCDo8nXnCqPzP91GIrKucl2l0Pc+WLCtv+8HMq8ov5KFIbi+RO5iHmIVaDCfZ+E07scAKBz5huM5uoBWOsTXJTCJFG3Pe/6XqlITz9wSUgDHBPJPDYH9Tcn7U/YQkeEeD3JBWaghfDKSBGDfMrih8+ROcsUGubJnmM5Oj93X/X8g7fgv0EPlT32woNO+5TyLdieoxkAwdpiE+OE39LAQvpIPMgz9+v2/oAX/Ybb6u1ghmTfeb+kg1HHXEC0eWC28HvtouyOmh7ocJJt3AkeWe1PMmrexgv4GTDxDvuCy0Eg5NaqpIxkGNpNLz0Rn+VTaB47+aOzyGAN3A0WFIrAepWtlFzKToouFB2HCbxW3iYQcJ5NHgu3EPCiWREjTV83IiupygzUFQV2XYfEeoqmUvXnBrpyLJS5XoQFfLr/orvu6iRw5ZPg9Ylz0lKGwilZJm8tEdIXUs2HL1BWdTFgNQ2Vg9Nkk6Fk+v9bP8BufV+fq5QU25gS0qZmEqrU2fYkwe1YRNx+woMUjarP/VSUwjL/Pdj0Nd0RUqVyRWmW9Rz+Yct/ge2GSU+rDAgq0HBMZcgm9xjtu9zLDRbnoDJ0m8gladPCBDqfKu/EVrMqPt1MVRHWVHWl7M1n0a7U/UIi3iqWiTruwnjftJF4QwWWhUszg7SB1VDptD0+Ru1guFsmYskkd5Cph756zbNykWTne8T+/gatfRsn5xStQw8MVi6jByt7mqh6JOFsF1/EjmFPD6ntvtjkqJQ6Mztv63IBSw2g+U4IDDvDOzdmUKRynxiyBGrCbxxFaTP1Hi9O/gh3fhJTu1ITgs2JN7c99x8JHHnRa5eopER7gANAb00kwDAiqa+S9paM/Nywqyn7dVZB4O0SCQmgWVztpxAsGu9bOB6k6zvDswstxKnso0NZqyutx9t44qLmugnVFxsw0Uk7FlFvximAlMwY3H1d6yu6FJybKy22Ei7By2RKOtbfj0hy339PhzRU3hOXkBWBEP0O/R40dfYUEU/UPlCRKTXAVkaBYp7ETCawJTfPS0/rQUAFDZHEdN9nOKD/CLoUvHiX3yw1gq0F2ubs/nyBNjwTWU+qP6+S7hNSTRX5+kGMr+K0bKa+DMwqT9cmTu6gSFbEcdSIRGE2r1KLqWs22Z9noMB1CXIQp/JQcU++/3vfyDsJwWMnLt3SHPyG8ofyF55A9p173iXDsVTJbnQ7ZdFHeRWj8AoJxDUcjm6ZSDf0JUqla1P0tuEf7O39vpsMkZxKiUxaPRXmrYdWnS28iypdX0PFo4prVNG4sk2STuZkcQ4zAk3ti1ySE5P5vkc6iPb9OPGL2UZU/Lr2AButtAjG2xRTXbvbJl7Y3JZsYOT1qIjCgnlZFli7oqH+5ue6v0K84cxEg9SD+W/JLOfrlLMoyjsgrCm+O+TGQHVWVREXbsmLiymuziERNf7lVKyUquggfuRSJKveli4AiLBgQ0NnpR0Nq+cD5zLR0xeoeYnKKaqkDR6+yKmQk0kqjvVHQcp6C2qP25shdRD/vT3phel4pOsJDd3dcOLs4UbpSFPQOd4IPzrKuRokWu433QFAT7+wlgfLy3dge2M4tNxIbABNlOoPI6F0UhL/0uCzVbtIs1CSOp47zD8klATUE6NTmYTN96T/PvnuL/kLqgc+rQYS83FP7MLx/oh4XyryzYj5wscvfcEBVbDnYzlbCKD46dqcNX+p/lXz+iRqJvXmZefT9++8430O/jFnAexcA5C5+QIg0vOb8RtrHohiflohPatNn5zWV6iCjfVetlHJ+qGwen31mRV/Ts+tLqlFyPECD2puC0Qn60lJuLzpsJbpslTMlAdl6EpQ3bJfW/7Z5/f9LPkXUwuBjLOf3EzWCC92GMRJX0h/uzfb7x+WMTIi2NT90mMJG/dwIPAC77trBpSGC5H7xDNdxk+LnNZcBfz/JeZf+dXC3b1s6sOINpbxFb84DKfbebLiGVy/6AIOR1/oCiao+SutweG15SQM249WsB3ZwkmZxPuhA6TGPh06JPtop6l/9YakR/s1VtjKC7jIVMXNfQlsDFote1gCG2gIxuvnwTOakg7tsmEDTktDJQYB1Y0bppSERToGjjGx+VwDY/cvD5QV3IQad/lev5UA8IICrWhtOeV1YcbtinM8ms='
b = aes(data,
        b"a549a55c60a39aa0", b'0123456789ABCDEF', 'decrypt').split('#')
print(f'解密第一层获取three list：{b}')
a = aes(b[2], secretKey, b'0123456789ABCDEF', 'decrypt')
print(f'解密three list参数2：{a}')
# 对three list[7] 进行解密还原参数
a = base64.decodebytes(b[7].encode()).decode().split('#')
print(f'解密three[7] 获取tow list:{a}')


print(aes(a[1], secretKey, b'0123456789ABCDEF','decrypt').split('#'))
print(aes(a[2], secretKey, b'0123456789ABCDEF','decrypt'))
print(aes(a[3], secretKey, b'0123456789ABCDEF','decrypt'))
print(aes(a[5], secretKey, b'0123456789ABCDEF','decrypt'))

# 解密滑块请求
print('解密轨迹参数')
deviceToken = 'V0VCI2FiMDM0ZWMwNjQzZjkxMzk5ZWIzM2UwNjJkYzdmYWUxLWgtMTc2MjA2ODM0ODA1Ni00YjBiMjNkMWUwMzI0NmFjYjM1ZmQxN2NjNTY2MDk2OSN5YllrY2tDL2RIbDIwSkxodjJsTDNNQVMzMVU5WmpKQlQ2Y1g4QWoyTDZ0MGw1NUV4NGJQYXdpd1dpSnpzSE40cHJUeVd6bUY0UkFEeE5CRGFDbFgzeFhyMEtCNkg1Zmo0TEV3cGxZc2RTVWVpVHRGdUI5RUxuc09VY29zTXF6WkJMaW1KdUd5NGk3NjljSWVzZkdVbGd6VjVVaDRYMWc3Yi9obk1ER1pMdjZlWE1lWllzOGw1UHRoWEdwaXhOblc1Yk9QMGNiVVVRZXlnTzVwaFNyK3hmN1p5aUFkWUovV2VpSE1MbGlkZ1E5bHE0bFBsZnVvcGtZUHlYaHByRUl1R2VCR0xxalJUeVgzOSs1dXlWWGRPaWpzVnBSSnN5ZTFURU5MZjNEai9DWVNIS1BDRE5EWUNzQmRVVGxSakdOZkZ1YVNKWHpsdEJjSEdscGVYdnkxY0xJZzcvQlZtZnh4K3VRMkIxdlBDbkdQc21zS2lwblNuK2lSdmc0Q2c1QzlIbEIvYVc2M2k2N3BhSElUT3d4RmtrbGFnSEYrS2NlQlZjVXcySDNRK0ozZFV0RDczUFlBSFZJOG9qcnh3U3l0Tm0rcnN0NnA5U053QVFmbXdqR3hwekQ5eHhheUZQd0tZbDMvM1VIOVMvOTU5YjZ1WWhnSGNyQ3V4WFgzSnJoZmttK2pNWktWcDd6WHNCQitvSEh6RHpFQTJKRDlhejdWNHFuMVg1MmRJWXVJNEEyc3dBS3UxY29LNlI0bEpMN0gyaWs5V0hueks0eFJHTC9oSkVsYS82MmR5R0pBWlRJRHQ3OTFKemdBZjU0cE5kMU9GNDdiRUMvaERaSmMvU2lhK2Rpa2pRbnBTeHJHWU11VkttYklGOFFSZWFsSEFCd0R2R2hFdW9WWWlRcG5lcEk1UEE1dnYxNUlEVmZ4cDJRKzhmL1F2UVZFaEJDSWI1bUtYci91N1E9PSMxMzQxI2IyYWMyNmU5MjA4NTllOGIxNTU5MTQ0YmNjYmI5ZTJl'
decoded_bytes = base64.b64decode(deviceToken)
a = decoded_bytes.decode('utf-8').split('#')
print(f'轨迹deviceToken参数第一层：{a}')
a = a[2]
a = aes(a, secretKey, b'0123456789ABCDEF', 'decrypt')
print(f'轨迹deviceToken参数[2]：{a}')



