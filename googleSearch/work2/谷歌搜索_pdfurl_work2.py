
from 谷歌搜索.google_model.google_getpdf import GETPDF
a = GETPDF()
a.inputfile_name = "ustc_chouqu_all_1000.json"
a.reslut_json_path = 'result.json'
a.proxy = {
    "http": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
    # "https": "http://myserver:123456@a2fec483f49537d8.yiu.us.ip2world.vip:6001",
}
a.run_GetPdf()

