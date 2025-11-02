import requests


headers = {
    # "User-Agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
    # "Connection": "Keep-Alive",
    # "Accept-Encoding": "gzip",
    "x-sgext": "JBS3bw4kFWPyhJHXzgpWaW%2BGX4Vdg0yFVo9Xh0yEXpRMhliBXoZWgF%2BBVpRfhAzWX4dfhwvVDIFegV6FTIRelF6ETNRalF%2BHX4BMgkyGTIZMhkyFTIVMhUyGTIZalFqUX5RflF%2BUX5RflF%2BUX5RM0kyHTIdMglqACYdelF%2BHX4dflF%2BUXdMOlF%2BUTIRMhkyETIRMzQP2NpRflE%2BXXo5Pl17STIEwhkmFSYJJjknUSdNJhl7oVuheml%2BaMNYwhUmDSYBY6A3oXoVXml6aX5pajkKGXo4w0zDiOfk94V75PeJe8lLoCehcml6CXYVChViBWJpcjleaWY5W6F6HMJMV%2FQScNfoD81yBLMc69gfdLtwFgyrcCv8Ixj7%2FLYcf3h7NIode3jX6KNAu9i6HKN4OggH8Nc0F%2BSL2LvYA1i72LvYijyn%2FBfIp%2FwXtLs07%2Fl%2F6CY8o4yXRLf0E0AHALfMi2gf6K%2FkO4D71DuA%2B9ibmLN8i2Aj2Lv9E9i72PJwH5zfuLuhehTCFWJpdjlmaVo5a6F6EMPYI9i72LvYu9ivALvYu9i72LvYu9i72LvYu9i7oXoMw9gj2K%2FY%2B9i7yLvYu9graKN8YnA72PvYu9gKCBdYo%2FSL6CMACxSzALvYu%2BRruXd8G4wX6Iv0ewBzhLvY49hjbOfYpzQf1PI8uxSzPOvYu%2FQDgVuUD%2FCvmIP1ZwBzUGOIr7ymcIO0chxbzLNYc%2ByLiJ5Ed2Fn%2FK4IA9S72LoowhlnoX%2Bhe1TCAQocwhgzoXoVXkV%2BRXodJgl3TV5FZ01nUSYUO0QmRWI5JmlyBSY5fkV2GC5Fe6F7TMIJdkV7oXtIwg1qFQoNagzCFX%2Bhfml3oXYYwhzCFXOhehVeRX5lfhluBSYVekV6ESYZckV2ESYdJh0mHSYdJgljoXYMwhkKHQoRamluaXIJdml%2BaX5pbmlyCWZpe6F2AMIZdj0maXplfh1%2BHSYJZkV6GSYZfkV6HSYZfkVyBWY9fjleEWYBJhzA%3D",
    "x-sign": "azG34N007xAALbw7IQrKnqMMEou9zbw9scuDSz948HgWJkwk1ekP8AEdzBQczQtuQAMorGz%2Ff5E%2Ff4gx73z4gQVhCq2sPbw9vK28Pb",
    "x-sid": "1d693c2a6380030e44bb76eb82365d17",
    "x-uid": "2216798991040",
    # "x-nettype": "WIFI",
    "x-pv": "6.3",
    # "x-nq": "WIFI",
    "x-features": "27",
    # "x-app-conf-v": "0",
    "x-mini-wua": "aKASM%2FeEyHfJrc0c%2FiLeZE6LcdD9aNslIK4nJGpJaQQHXruKI8wL4J9NaB2R8IsAMw8yvh66tSoMtbyo%2FEWHLkU2c3ldk6UMOA3mddRQ28LM11GKWNmoL%2BvPygCXjH64TKgOi9aUJYtnV22QLIwfSnl8mBgs4j06vPAgufwpPjXAxSBPoAelIBM4tWglaRV9EebqUIAZthnKUDzwrA3Ja7llcKuhubEKW6aCpUIdPdsb9tBlfkPi5eASy",
    # "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    # "cache-control": "no-cache",
    "x-t": "1761197149",
    # "x-bx-version": "6.7.250504",
    # "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "10005894%40damai_android_8.10.21",
    # "x-app-ver": "8.10.21",
    # "x-c-traceid": "null17611971498620031129880",
    # "x-umt": "ob8Blp1LPNvSBwKaDwt1P8PpSR0MLDrI",
    "a-orange-q": "appKey=23781390&appVersion=60002023&clientAppIndexVersion=1120251022103608097&clientVersionIndexVersion=0",
    "x-utdid": "aPdj3tB0ObUDAH8m6odGE5ac",
    "x-appkey": "23781390"
}
cookies = {
    # "x5sec": "7b22733b32223a2233636335303364333966636235653963222c22617365727665723b33223a22307c43494c353573634745494f623372762f2f2f2f2f2f774569436d4e6863484e736157526c646a4977775a37443941593d227d",
    # "tfstk": "gvkE4X0Z-6i1G5aLtAwP0ykwy-ALN88XrYa7q0muAy4H9eUo_Va1FHeBw8uz74UQOJ2hza4i7TaQF02y42gWv3dKquWrD4oQF04CE7o-z2GIqv6zqq3VFHHr2Troq4KLPHdsXDe8EETjUKiKvVBOB1T_E3mgFuRNxuXrvDe8EG_kGfmd4Mtgy02orG4g4Pqlx44hIhruVwflK4xwbuZF-kq3rNVgquwur42kbc4Tq8qnr8AlUcihnkNHfmLBoS-EiWzmxPWqYArH6r9YuTXoQzmaoDjGETDaYWHMBvE4x8loDbyuQUWuXXizNAqHUZrtsmHKZDJwoDea8myZIFXTPjmc4pb8feQ9bhJRZWqTbrtwjSFRCh55rXOFw_FLUlzXjo5RwWqTbrtwb_C89uqalhqV."
}
url = "http://acs.m.taobao.com/gw/mtop.alibaba.detail.subpage.getdetail/2.0/"
params = {
    "data": "{\"itemId\":\"980568627563\",\"scenario\":\"itemsku\",\"bizCode\":\"ali.china.damai\",\"exParams\":\"{}\",\"platform\":\"271\",\"comboChannel\":\"1\"}"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)