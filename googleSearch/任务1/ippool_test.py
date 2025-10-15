from 谷歌搜索.google_model.google_getpdf import GETPDF
from ipipde import get_ip
a = GETPDF()
a.inputfile_name = "ustc_chouqu_all_1000.json"
a.reslut_json_path = 'result.json'
# ip = get_ip().replace('\n', '')
a.proxy = {
    "http": "http://lzh_123-zone-custom-region-eu:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333",
    "https": "http://lzh_123-zone-custom-region-eu:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333"
}
a.max_workers = 1
a.run_GETPdf_POOL()
