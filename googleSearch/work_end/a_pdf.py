from google_getpdf import GETPDF
a = GETPDF()
a.inputfile_name = "ustc_chouqu_all_1000.json"
a.reslut_json_path = 'result.json'
#ip = get_ip().replace('\n', '')
# a.cookies = {'NID': '525=GmVNVKVQ7sv72oEM6RkMd2400dioLVJmUq0XdAp9Ag7PcpA2DyOWtYpRC2CdqmTwTPiMpc3uLoNsZpV0tRYPDMwtvExwS-VlCiEtR2tVg5Gx7kySeLlhktQWVORNdm8GC2It5Jzfro4xLiwQ8rvY7SPsTwB86uxSg7UzpRRnZi7JpaeJrLsbIekcPhECz5BZRlCN7jsWTHTmj2DcZaQCAs8baNqclfPbjarI6tDXcil0qgC7vk5apSi_XgJBxzzD2ko', 'AEC': 'AaJma5vSstJj0kqdpEjXzUFN_V1AoTe4d7fdxy60n3_6wagBEBLMABb-PA'}




a.proxy = {
"http": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333",
   #"https": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333"
}

a.max_workers = 1
a.run_GetPdf()
