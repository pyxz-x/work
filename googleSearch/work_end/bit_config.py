# 比特浏览器API配置
API_CONFIG = {
    "base_url": "http://127.0.0.1:54345"  # 比特浏览器本地服务的默认端口，根据实际情况修改
}

# 浏览器基础配置
BROWSER_CONFIG = {
    # 代理设置
    "proxy": {
        "method": 2,  # 代理方式 2=自定义
        "type": "http",  # 代理类型 http, https, socks5, ssh, noproxy
        # "host": "38.55.129.154",    # 代理主机地址
        "host": "feb23fa7b6fbf59f.vtv.eu.ipidea.online",  # 代理主机地址
        "port":2333 ,  # 代理端口
        "username": "lzh_123-zone-custom",  # 代理用户名，如果有
        "password": "lzh_123"  # 代理密码，如果有
    },

    # 启动配置
    "startup": {
        "clear_cache": True,  # 启动前清理缓存
        "clear_cookies": True,  # 启动前清理cookie
        "random_fingerprint": True,  # 每次启动随机指纹
        "wait_time": 120,  # 浏览器打开后等待时间(秒)
        "cooldown_time": 1,  # 浏览器关闭后冷却时间(秒)
        # "url": "https://arcteryx.com/ca/zh/shop/sima-5-panel-cap-9485"
        "url": 'https://www.google.com/search?q=213&oq=213&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg70gEHMTc4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'
    },

    # 浏览器指纹配置
    "fingerprint": {
        "core_product": "chrome",  # 浏览器内核: chrome 或 firefox
        "core_version": ["136"],  # 内核版本
        "ostype": "PC",  # 操作系统类型: PC, Android, IOS
        "os": "Win32"  # 平台: Win32, MacIntel, Linux x86_64
    },

    # 线程配置
    "threads": {
        "default_browsers": 1,  # 默认创建浏览器数量
        "default_cycles": 1,  # 默认循环次数
        "default_max_workers": 5  # 默认最大线程数
    }
}
