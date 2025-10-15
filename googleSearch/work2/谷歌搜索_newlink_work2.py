
from 谷歌搜索.google_model.google_getpage import GETLINK

a = GETLINK()
a.inputfile_name = "ustc_chouqu_all_1000.json"
a.page_links_path = "page_links.json"
a.input_value_getted_path = "input_getted.json"
a.proxy = {
    "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
}
a.run_GetPageLinks()
