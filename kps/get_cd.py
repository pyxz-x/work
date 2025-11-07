import base64
import hashlib
import json
import random
import time
import zlib

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36 Edge/137.0.0.0"

def sha256(msg):
    return hashlib.sha256(msg.encode('utf-8')).hexdigest()


def random_id():
    random.seed(time.time())
    return ''.join([random.choice('0123456789abcdef') for _ in range(32)])


def hash_difficulty(hex_str):
    return 4503599627370496 / (int(hex_str[:13], 0x10) + 1)

_LK = {'k2584': 'd%A|o3@', 'k6881': '5,a3n@T', 'k6635': '&x3VXn3', 'k5333': 'oHLWdHq', 'k1711': 'pW2xZwv', 'k8527': 'lUmA7hC', 'k9785': '\x7fHUny9I', 'k3045': ':hQ:1{U', 'k7201': 'jRMWL:v', 'k2291': '@S=Pf6d', 'k5803': '6q5'}

_SEQ = ['k2584', 'k6881', 'k6635', 'k5333', 'k1711', 'k8527', 'k9785', 'k3045', 'k7201', 'k2291', 'k5803']

_salt_cache = None
def _resolve_salt():
    global _salt_cache
    if _salt_cache is not None:
        return _salt_cache
    shifted = ''.join(_LK[k] for k in _SEQ)
    b85 = ''.join(chr(ord(c) - 1) for c in shifted)
    comp = base64.b85decode(b85)
    salt = zlib.decompress(comp).decode('utf-8')

    _salt_cache = salt
    return salt


def _0x520eb0(_0x4d02a6, _0x18a966, _0x29883e):
    _hidden_salt = _resolve_salt()
    _515b4c = sha256(f"{_0x4d02a6['platformInputs']}, {_0x18a966}, {_0x29883e}, {_hidden_salt}")
    _5d8495 = _0x4d02a6['difficulty'] / _0x4d02a6['subchallengeCount']
    _274bf7 = []
    for _ in range(_0x4d02a6['subchallengeCount']):
        _1b96d1 = 1
        while True:
            _3b6bb8 = sha256(f"{_1b96d1}, {_515b4c}")
            if hash_difficulty(_3b6bb8) >= _5d8495:
                _274bf7.append(_1b96d1)
                _515b4c = _3b6bb8
                break
            _1b96d1 += 1
    _1d983a = {'answers': _274bf7, 'finalHash': _515b4c}
    return _1d983a


def solve_challenge(_360ac5, _2de741):
    _345064 = int(time.time() * 1000)
    _521dfd = time.perf_counter()
    _a8cff3 = _345064 - _2de741
    _900c8d = random_id()
    _222447 = _0x520eb0(_360ac5, _a8cff3, _900c8d)
    _3da7a9 = time.perf_counter()
    _2ee488 = round((_3da7a9 - _521dfd) * 1000, 3)
    _285b91 = dict()
    _285b91['workTime'] = _a8cff3
    _285b91['id'] = _900c8d
    _285b91['answers'] = _222447['answers']
    _285b91['duration'] = _2ee488
    _285b91['d'] = _2de741
    _285b91['st'] = 0
    _285b91['rst'] = 0
    return _285b91


def get_x_kpsdk_cd(_0x427769, _0x40320e, x_kpsdk_st):
    result = solve_challenge(_0x427769, _0x40320e)
    result["st"] = x_kpsdk_st  # x-kpsdk-st 返回时间
    result["rst"] = int(time.time() * 1000)
    result = json.dumps(result, separators=(',', ':'))
    return result




def get_cd(st, ct):
    cd = get_x_kpsdk_cd(
                {"platformInputs": 'tp-v2-input' + ct[0: 16], "difficulty": 10, "subchallengeCount": 2},
                random.randint(0, 309), int(st)
            )
    return cd

print(get_cd('1', '2'))