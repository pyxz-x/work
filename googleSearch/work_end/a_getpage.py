from google_getpage import GETLINK

a = GETLINK()
a.inputfile_name = "all.json"
a.page_links_path = "page_links.json"
a.input_value_getted_path = "input_getted.json"
a.max_workers = 10
a.proxy = {
"http": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333",
   #"https": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333"
}
a.run_GETPageLink_POOL()
