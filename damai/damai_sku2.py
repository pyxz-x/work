import requests


headers = {
  "x-sgext": "JBSd374OpUlCriH9fiDmQ9%2Bs76%2Ftqfys7a7vrvyv7r78rOir7qvsr%2B6v6b7vre%2Bt763vre%2Bt763vre%2Bt%2FK%2Fuvu%2B%2B7638re%2Bt777vvu6%2B7r7uvu6%2B7r7uvu%2B%2B6b7svu%2B%2B777vvu%2B%2B777vvu%2B%2B%2FPj8rfyt%2FKjqqrmt777vre%2Bt777vvu35vr7vvvyu%2FKz8rvyu%2FOez3Ia%2B777%2Fve6o%2F73uqfykgKzyrPLCvsLtu%2Bu76KqA%2F4Cs7aXyrPKt8qnqsO6t68K7worLkc%2BJrJHPiqyaoID7gK7yrO%2Bo6LDtr%2B%2Bq8q%2FnrvKr5q%2BArO%2FC%2B%2BSv9qrHkvCV1e3Nt8qe9YXctfaW2Lz6kqWtqbjf7%2B22%2BKXQ76y2x5LVntqe3O%2FVnPzq85THpfeR0J7MldS%2B3J7cjtDn25jZtNuZ97ffnsmWrZL6kt6P1K3fl%2Fa47J7Zm9Cy9YzZkfyJ%2BpH8ifqS07TZnuy82LDcsaue3JL28NSHybDcgKztwu6q8q%2FrrvKk5qiArOzCnvqe3J7cntye2ajcntye3J7cntye3J7cntye3ICs68Ke%2Bp7Znsye3J36ntyexOr%2Fu86y%2FJ7MntydypfTtLLqyLz6jsqdzI3skfvqyI%2FcuMqdzI3skfvqyI%2FquN6424%2FMhdSsrLbksbaJ3qjXltyO2J7N6siUzLD6ndyO3%2FDxjqWc%2Bru2itjn1pn6vNWezerI7%2Bm5yafxjtadxYrzjMXqzIXqsKD5xJjt7taF8p3cntziwu6rgK2ArL3C6LDvwu7%2BgKztpfmt%2Ba%2Fnu%2Br86K75rOul6675ru347bvnrPmw7K75pei76a3ou%2B7C7vmAqO277sLu%2BICs7K7ssO6u7K6Ar%2B%2FC77Dtwu2sgK2Ar%2BzC7q%2Fnu%2B%2Bz76jrrvmq%2Bav5q%2Fms77vvu%2B%2B777vvu%2B2ugK%2Frwu6w77DprvKv8qzvquaw77DvsO2w7anvsO7C7aqArO2l%2BbDus%2B%2Bt7635r%2B277qz5rO%2B77qz5rO%2B77K7qreeo6q3rq%2FmtgA%3D%3D",
  "x-sign": "azG34N007xAAKuXs5llh8ChsovWUuuXq6BzanGavqa9KPAXzTZ5WLAF0RcNHYGmw2lZiRWfDMLHGqNHmtquhVly2U3rl6uXq5arl6u",
  "x-sid": "1d693c2a6380030e44bb76eb82365d17",
  "x-uid": "2216798991040",
  "x-nettype": "WIFI",
  "x-pv": "6.3",
  "x-nq": "WIFI",
  "x-features": "27",
  "x-app-conf-v": "0",
  "x-mini-wua": "a%2BgSqN8Go0nzm2BDeHsHYNx3SzD79eXc15mYp37lKWr1rjjiCgJjxzSfa6dR4sPnxn6qyuC%2F43dv14%2BuDGpIKF0qSaE3bvcbD1DoBv9lNcwETTbPEVw34i%2FweeaPvayytfDR7uVPHHkTffh2eoxTwA9TUUMjeUI1JGXovMp3g21hHfertMC5LuW0iJYjtg%2FV%2F8CInK%2BaOOpfyRMH4MREXq1%2F8TrELsQyxDKW0rCliz06CUYJovvf%2F00rB",
  "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
  "cache-control": "no-cache",
  "x-t": "1761632152",
  "Cookie": "x5sec=7b22733b32223a2261653938333735393731363331653535222c22617365727665723b33223a22307c434a712b6763674745492b7334646e352f2f2f2f2f774569436d4e6863484e736157526c646a4977775a37443941593d227d; tfstk=g9N-4sa3tB6-TxP-ozWcKsULWP4L2t4zuuz6tDmkdoEYxkRodz4IRXEbxaouRgrL9mi4q3c7r2ZL8mbrt8XE9vEnmW2oxT5dJmUeEwlhUHdKDlyktM7rRXhzi8AnqglLRlcdAGfGszzraXsGj-FTiplIR6mCnYNhGVH5jGfGsTTj9gIgr1YFet3EcHOSdkMfGmueVXiSdn9j5mGIOviWhxgEyQiIR4_YlmuIODZIOZhj02Or8GoHJmALUlNzcIXdoBdLM4H-vCiv9XVDsYi_PmdCYS3RTcaSDBOnXI42pPEd2Cu794Fte-SeazlxGlHb3GdrxvFY2JHy5CMbGzNSUWjvOg8Ts5z-qYgqMLQAkpJEFqYJju-JO0L2lqnGo69eLYQikcbAkpJEFquxjZbpLpkRS",
  "x-bx-version": "6.7.250504",
  "f-refer": "mtop",
  "x-extdata": "openappkey%3DDEFAULT_AUTH",
  "x-ttid": "10005894%40damai_android_8.10.21",
  "x-app-ver": "8.10.21",
  "x-c-traceid": "null17616321524190021112303",
  "x-umt": "%2FW4BmodLPG5J6gKaKKjFo%2FvIevginVWy",
  "a-orange-q": "appKey=23781390&appVersion=60002023&clientAppIndexVersion=1120251022103608097&clientVersionIndexVersion=0",
  "x-utdid": "aPdj3tB0ObUDAH8m6odGE5ac",
  "x-appkey": "23781390",
  "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
  "Host": "acs.m.taobao.com",
  "Accept-Encoding": "gzip",
  "Connection": "Keep-Alive"
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