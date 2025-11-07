Java.perform(function () {
  var application = Java.use("android.app.Application");
  var classloader;
  application.attach.overload("android.content.Context").implementation =
    function (context) {
      var result = this.attach(context);
      classloader = context.getClassLoader();
      Java.classFactory.loader = classloader;
      return result;
    };

  // 延迟执行主逻辑
  setTimeout(function () {
    var MtopRequest = Java.use("mtopsdk.mtop.domain.MtopRequest");
    var MtopBusiness = Java.use("com.taobao.tao.remotebusiness.MtopBusiness");
    var MethodEnum = Java.use("mtopsdk.mtop.domain.MethodEnum");
    var System = Java.use("java.lang.System");
    var ApiID = Java.use("mtopsdk.mtop.common.ApiID");
    var MtopStatistics = Java.use("mtopsdk.mtop.util.MtopStatistics");
    var ProtocolEnum = Java.use('mtopsdk.mtop.domain.ProtocolEnum')
    var InnerProtocolParamBuilderImpl = Java.use("mtopsdk.mtop.protocol.builder.impl.InnerProtocolParamBuilderImpl");
    var MtopListener = Java.use('mtopsdk.mtop.common.MtopListener')
    var CookieManager = Java.use("anetwork.channel.cookie.CookieManager");
    // 构造 MtopRequest
    var MtopRequest_ = MtopRequest.$new();
    MtopRequest_.setApiName("mtop.alibaba.detail.subpage.getdetail");
    MtopRequest_.setVersion("2.0");
    MtopRequest_.setNeedSession(false);
    MtopRequest_.setNeedEcode(false);
    MtopRequest_.setData(
      "{\"itemId\":\"980568627563\",\"scenario\":\"itemsku\",\"bizCode\":\"ali.china.damai\",\"exParams\":\"{}\",\"platform\":\"271\",\"comboChannel\":\"1\"}"
    );

    // 构造 MtopBusiness
    var myMtopBusiness = MtopBusiness.build(MtopRequest_);
    myMtopBusiness.reqMethod(MethodEnum.GET.value);
    myMtopBusiness.protocol(ProtocolEnum.HTTPSECURE.value)

    // 调用startRequsts
    myMtopBusiness.reqStartTime = System.currentTimeMillis();
    myMtopBusiness.isCancelled = false;
    myMtopBusiness.isCached = false;
    myMtopBusiness.clazz = null;
    myMtopBusiness.requestType = 0;
    myMtopBusiness.requestContext = null;
    myMtopBusiness.mtopCommitStatData(false);
    myMtopBusiness.sendStartTime = System.currentTimeMillis();
    //MtopBuilder.asyncRequest
    var createListenerProxy = myMtopBusiness.$super.createListenerProxy(myMtopBusiness.$super.listener.value);
    var createMtopContext = myMtopBusiness.createMtopContext(createListenerProxy);

    var myMtopStatistics = MtopStatistics.$new(null, null);
    createMtopContext.stats.value = myMtopStatistics;
    myMtopBusiness.$super.mtopContext.value = createMtopContext;
    createMtopContext.apiId.value = ApiID.$new(null, createMtopContext);
    var myMtopContext = createMtopContext;
    myMtopContext.mtopRequest.value = MtopRequest_;
    // 获取cookie
    var CookieManager = Java.use('anetwork.channel.cookie.CookieManager')
    var base_url = 'https://acs.m.taobao.com/gw/mtop.alibaba.detail.subpage.getdetail/2.0/?data=%7B%22itemId%22%3A%22980568627563%22%2C%22scenario%22%3A%22itemsku%22%2C%22bizCode%22%3A%22ali.china.damai%22%2C%22exParams%22%3A%22%7B%7D%22%2C%22platform%22%3A%22271%22%2C%22comboChannel%22%3A%221%22%7D'
    var cookies = CookieManager['d'](base_url)

    // 调用 buildParams
    var myInnerProtocolParamBuilderImpl = InnerProtocolParamBuilderImpl.$new();
    var res = myInnerProtocolParamBuilderImpl.buildParams(myMtopContext);
    var a = {}
    if (res) {
      var keySet = res.keySet();
      var iterator = keySet.iterator();
      while (iterator.hasNext()) {
        var key = iterator.next();
        var value = res.get(key);
        a[key] = String(value)
        // console.log("    " + key + " = " + String(value));
      }

    }
    var data = {
      wua: a['wua'],
      data: a["data"]
    };
    var headers = {
      "Cookie":cookies,
      "x-sgext": encodeURIComponent(a["x-sgext"]),
      "x-bx-version": '6.7.250504',
      "f-refer": a["f-refer"],
      "x-extdata": encodeURIComponent(a["extdata"]),
      "x-ttid": encodeURIComponent(a["ttid"]),
      "x-app-ver": a["x-app-ver"],
      "x-sign": encodeURIComponent(a["sign"]),
      "x-sid": a["sid"],
      "x-c-traceid": a["x-c-traceid"],
      "x-uid": a["uid"],
      "x-pv": a["pv"],
      "x-features": a["x-features"],
      "x-app-conf-v": a["x-app-conf-v"],
      "x-umt": encodeURIComponent(a["umt"]),
      "a-orange-q": 'appKey=23781390&appVersion=60002023&clientAppIndexVersion=1120251022103608097&clientVersionIndexVersion=0',
      "x-appkey": a['appKey'],
      "x-mini-wua": encodeURIComponent(a["x-mini-wua"]),
      // "x-mini-wua":"%2FW4BmodLPG5J6gKaKKjFo%2FvIevginVWy",
      "x-utdid": a["utdid"],
      "x-t": a["t"],
      "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
      "content-type": 'application/x-www-form-urlencoded;charset=UTF-8',
      "Host": 'acs.m.taobao.com',
      "Accept-Encoding": 'gzip',
      "Connection": 'Keep-Alive',
      // "x-c-traceid":a['x-c-traceid'],
      // "x-nettype":"WIFI",
      // "x-nq":"WIFI"
    };
    // 使用send函数发送数据给Python端
    send({
      type: 'params',
      data: data,
      headers: headers
    });

  }, 3000); // 延迟3秒执行
});