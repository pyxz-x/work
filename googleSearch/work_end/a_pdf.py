from google_getpdf import GETPDF
a = GETPDF()
a.inputfile_name = "ustc_chouqu_all_1000.json"
a.reslut_json_path = 'result.json'
#ip = get_ip().replace('\n', '')
a.cookies = {'__Secure-YNID': '12.YT=RT9Ltl9GeAOvOUqrwVtCVWUnsd4FwWhb575rCa8Vl0Dn4rAvr8xkP0NtYKVWcwIStVKpGOBg5f7e16mWcj_AobHM0ERkgqycAVILvwZab_AbQktSrdwFkc9YLjefyUedXZkB2tDbYNGWTNPZJ6mGPSvXOgK1IIu6F2V52lITNL2jSIftzkl8vz3R0wvtYgIYeVFFEh5WGsyuekDSqYEtbxBSqwiBgu9lhG0woNTqd8jFfYsiL37WPahuhG-wNneWbP_sVHZehZUV66L7d3x6Mbn1RaY1j_T-nzEtC5MhHr_Emajw7hjE_k5niKoXEdCsCFpRJBIwSb4Jf3G5SmcUFw', '__Secure-ROLLOUT_TOKEN': 'CPOF9J3Z_7KVZxCkzPbL46iQAxiI-5vM46iQAw%3D%3D', 'VISITOR_PRIVACY_METADATA': 'CgJISxIEGgAgEw%3D%3D', 'VISITOR_INFO1_LIVE': 'qT-nzWqR_B8', 'NID': '525=DuS78tKR9emQYM8dwg6r1bXPkpuNFQ_iI2_O5Q3KT9MtEINhUovFsiqkC0X_Su3QuQK_aM-hjFYsx_wg5u-0GnrH5tZcEse9_A1YN7cDYLjXevXLNC84IGAXmeRGw16RFws3lOCEJOvz9BLHMa-ACsrA_2-QRZuHqahk6oRIxrTFfxweVUdaEwz9K5rWeidyCvlKtYHhMk0dkuqrsJ0Qdo_QqbB8VI2240qarbd8i5qclCWNzEQAJwbn2A', 'YSC': 'V6BBAOJtCQk', 'DV': 'Y2zWh-B6VUkV0J-HU_sc0ecyg9DRnhk', 'AEC': 'AaJma5thLNg6N7t0rFhXcpqPODedRoUPHO6ZcTydFRw1UP3EkUBHbLCfMys'}




a.proxy = {
"http": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333",
   #"https": "http://lzh_123-zone-custom:lzh_123@feb23fa7b6fbf59f.vtv.eu.ipidea.online:2333"
}

a.max_workers = 1
a.run_GETPdf_POOL()
