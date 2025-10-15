
from googleSearch.google_model.google_getpage import GETLINK

a = GETLINK()
a.inputfile_name = "site_bangdan_keywords_select_youxian1_ustc.json"
a.page_links_path = "page_links.json"
a.input_value_getted_path = "input_getted.json"
a.run_GetPageLinks()
