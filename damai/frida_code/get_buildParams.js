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
    const MtopRequest = Java.use("mtopsdk.mtop.domain.MtopRequest");
    let MtopRequest_ = MtopRequest.$new();
    MtopRequest_.setApiName("mtop.damai.trade.order.build")
    MtopRequest_.setVersion("1.0")
    MtopRequest_.setNeedSession(true)
    MtopRequest_.setNeedEcode(true)
    MtopRequest_.setData("{\"buyNow\":\"true\",\"buyParam\":\"980568627563_1_5939452904634\",\"exParams\":\"{\\\"UMPCHANNEL_DM\\\":\\\"10001\\\",\\\"UMPCHANNEL_TPP\\\":\\\"50053\\\",\\\"atomSplit\\\":\\\"1\\\",\\\"channel\\\":\\\"damai_app\\\",\\\"coVersion\\\":\\\"2.0\\\",\\\"coupon\\\":\\\"true\\\",\\\"initIdHashNoList\\\":\\\"[\\\\\\\"\\\\\\\"]\\\",\\\"joinRateLimit\\\":0,\\\"pioneer\\\":\\\"0\\\",\\\"seatInfo\\\":\\\"\\\",\\\"signKey\\\":\\\"lzh_t\\\",\\\"subChannel\\\":\\\"\\\",\\\"umpChannel\\\":\\\"10001\\\",\\\"websiteLanguage\\\":\\\"zh_CN_#Hans\\\"}\"}")
    // console.log('************************************************************************');
    // console.log('构造MtopRequest对象----->', MtopRequest_);
    // console.log(MtopRequest_)
    const MtopBusiness = Java.use("com.taobao.tao.remotebusiness.MtopBusiness");
    const MtopBuilder = Java.use("mtopsdk.mtop.intf.MtopBuilder");
    // let RemoteBusiness = Java.use("com.taobao.tao.remotebusiness.RemoteBusiness");
    const MethodEnum = Java.use("mtopsdk.mtop.domain.MethodEnum");
    const MtopListenerProxyFactory = Java.use(
      "com.taobao.tao.remotebusiness.listener.MtopListenerProxyFactory"
    );
    const System = Java.use("java.lang.System");
    const ApiID = Java.use("mtopsdk.mtop.common.ApiID");
    const MtopStatistics = Java.use("mtopsdk.mtop.util.MtopStatistics");
    const InnerProtocolParamBuilderImpl = Java.use(
      "mtopsdk.mtop.protocol.builder.impl.InnerProtocolParamBuilderImpl"
    );

    // 初始化MtopBusiness
    var myMtopBusiness = MtopBusiness.build(MtopRequest_);
    myMtopBusiness.useWua();
    myMtopBusiness.reqMethod(MethodEnum.POST.value);
    myMtopBusiness.setCustomDomain("mtop.damai.cn");
    myMtopBusiness.setBizId(24);
    myMtopBusiness.setErrorNotifyAfterCache(true);
    // startRequest
    myMtopBusiness.reqStartTime = System.currentTimeMillis();
    myMtopBusiness.isCancelled = false;
    myMtopBusiness.isCached = false;
    myMtopBusiness.clazz = null; //l
    myMtopBusiness.requestType = 0;
    myMtopBusiness.requestContext = null;
    myMtopBusiness.mtopCommitStatData(false);
    myMtopBusiness.sendStartTime = System.currentTimeMillis();
    // syncRequest
    var createListenerProxy = myMtopBusiness.$super.createListenerProxy(
      myMtopBusiness.$super.listener.value
    );
    
    // asyncRequest
    var createMtopContext = myMtopBusiness.createMtopContext(createListenerProxy);
    var myMtopStatistics = MtopStatistics.$new(null, null); //创建一个空的统计类
    createMtopContext.stats.value = myMtopStatistics;
    myMtopBusiness.$super.mtopContext.value = createMtopContext;
    createMtopContext.apiId.value = ApiID.$new(null, createMtopContext);

    var myMtopContext = createMtopContext;
    myMtopContext.mtopRequest.value = MtopRequest_;
    // 创建好MtopContext对象直接调用buildParams函数
    /////////
    // 打印基本字段
    console.log("apiId: " + myMtopContext.apiId.value);
    console.log("baseUrl: " + myMtopContext.baseUrl.value);
    console.log("clazz: " + myMtopContext.clazz.value);
    console.log("seqNo: " + myMtopContext.seqNo.value);
    console.log("requestTotalLength: " + myMtopContext.requestTotalLength.value);
    console.log("supportStreamJson: " + myMtopContext.supportStreamJson.value);
    console.log("supportZstdDictionary: " + myMtopContext.supportZstdDictionary.value);
    console.log("upstreamCompress: " + myMtopContext.upstreamCompress.value);

    // 打印MtopRequest
    if (myMtopContext.mtopRequest.value) {
      console.log("mtopRequest: " + myMtopContext.mtopRequest.value);
    }

    // 打印统计信息
    if (myMtopContext.stats.value) {
      console.log("stats: " + myMtopContext.stats.value);
    }
    /////////
    var myInnerProtocolParamBuilderImpl = InnerProtocolParamBuilderImpl.$new();
    var res = myInnerProtocolParamBuilderImpl.buildParams(myMtopContext);
    var a = {}
    if (res) {
      var HashMap = Java.use("java.util.HashMap");
      var keySet = res.keySet();
      var iterator = keySet.iterator();
      while (iterator.hasNext()) {
        var key = iterator.next();
        var value = res.get(key);
        a[key] = String(value)
        // console.log("    " + key + " = " + value);
      }

    }
    var data = {
      wua: a['wua'],
      data: a["data"]
    };
    var headers = {
      "x-sgext": encodeURIComponent(a["x-sgext"]),
      "Dm-token": '1c7a6f3d298f79c5130a581d1a9b872e',
      "x-bx-version": '6.7.250504',
      "f-refer": a["f-refer"],
      "x-extdata": encodeURIComponent(a["extdata"]),
      "x-ttid": encodeURIComponent(a["ttid"]),
      "x-app-ver": a["x-app-ver"],
      "x-sign": a["sign"],
      "x-sid": a["sid"],
      "x-c-traceid": a["x-c-traceid"],
      "x-uid": a["uid"],
      "x-pv": a["pv"],
      "x-features": a["x-features"],
      "x-app-conf-v": a["x-app-conf-v"],
      "x-umt": encodeURIComponent(a["umt"]),
      "x-appkey": a['appKey'],
      "x-mini-wua": encodeURIComponent(a["x-mini-wua"]),
      "x-utdid": a["utdid"],
      "x-t": a["t"],
      "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B10%3BGoogle%3BPixel+4%29+DeviceType%28Phone%29",
      "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8',
      "Host": 'mtop.damai.cn',
      "Accept-Encoding": 'gzip',
      "Connection": 'Keep-Alive',
    };
    // 使用send函数发送数据给Python端
    send({
      type: 'params',
      data: data,
      headers: headers
    });

  }, 3000); // 延迟3秒执行
});