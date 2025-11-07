// function hook_http() {
//     var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
//     var config = SwitchConfig.getInstance();
//     config.setGlobalSpdySslSwitchOpen(false);
//     config.setGlobalSpdySwitchOpen(false);
//     console.log('http hook success -----》 false')
// }
function hook_http() {
    var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
    SwitchConfig.isGlobalSpdySslSwitchOpen.implementation = function () {
        console.log('hook httpSSL success -----> return false')
        return false;
    }
    SwitchConfig.isGlobalSpdySwitchOpen.implementation = function () {
        console.log('hook http success -----> return false')
        return false;
    }
}

function hook_getunifiedsign() {
    var InnerSignImpl = Java.use('mtopsdk.security.InnerSignImpl')
    var getUnifiedSign_ = InnerSignImpl.getUnifiedSign;
    InnerSignImpl.getUnifiedSign.implementation = function () {
        console.log("[+]getUnifiedSign被调用----->")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log('getUnifiedSign参数1----->', arguments[0].toString());
        console.log('getUnifiedSign参数2----->', arguments[1].toString());
        console.log('getUnifiedSign参数3----->', arguments[2]);
        console.log('getUnifiedSign参数4----->', arguments[3]);
        console.log('getUnifiedSign参数5----->', arguments[4]);
        console.log('getUnifiedSign参数6----->', arguments[5]);
        var a = getUnifiedSign_.apply(this, arguments);
        console.log('getUnifiedSign返回值----->', a.toString());
        console.log('************************************************************************');
        return a;
    }
}
function hook_buildParams() {
    Java.perform(function () {
        var InnerProtocolParamBuilderImpl =
            Java.use("mtopsdk.mtop.protocol.builder.impl.InnerProtocolParamBuilderImpl");

        InnerProtocolParamBuilderImpl.buildParams.implementation = function (mtopContext) {
            console.log('************************************************************************')
            // console.log("[+]buildParams被调用----->")
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));

            console.log("[+]buildParams接收参数----->" + String(mtopContext));
            // 打印基本字段
            console.log("apiId: " + mtopContext.apiId.value);
            console.log("baseUrl: " + mtopContext.baseUrl.value);
            console.log("clazz: " + mtopContext.clazz.value);
            console.log("seqNo: " + mtopContext.seqNo.value);
            console.log("requestTotalLength: " + mtopContext.requestTotalLength.value);
            console.log("supportStreamJson: " + mtopContext.supportStreamJson.value);
            console.log("supportZstdDictionary: " + mtopContext.supportZstdDictionary.value);
            console.log("upstreamCompress: " + mtopContext.upstreamCompress.value);

            // 打印MtopRequest
            if (mtopContext.mtopRequest.value) {
                console.log("mtopRequest: " + mtopContext.mtopRequest.value);
            }

            // 打印统计信息
            if (mtopContext.stats.value) {
                console.log("stats: " + mtopContext.stats.value);
            }

            var result = this.buildParams(mtopContext);

            console.log("[+]buildParams返回参数----->");
            if (result) {
                var HashMap = Java.use("java.util.HashMap");
                var keySet = result.keySet();
                var iterator = keySet.iterator();
                while (iterator.hasNext()) {
                    var key = iterator.next();
                    var value = result.get(key);
                    // console.log("    " + key + " = " + value);
                }
            }

            return result;
        };
    });
}

function hook_MtopRequest() {
    const MtopRequest = Java.use("mtopsdk.mtop.domain.MtopRequest");
    let MtopRequest_ = MtopRequest.$new();
    MtopRequest_.setApiName("mtop.damai.trade.order.build___lzh123")
    MtopRequest_.setVersion("1.0")
    MtopRequest_.setNeedSession(true)
    MtopRequest_.setNeedEcode(true)
    MtopRequest_.setData("{\"buyNow\":\"true\",\"buyParam\":\"980568627563_1_5939452904634\",\"exParams\":\"{\\\"UMPCHANNEL_DM\\\":\\\"10001\\\",\\\"UMPCHANNEL_TPP\\\":\\\"50053\\\",\\\"atomSplit\\\":\\\"1\\\",\\\"channel\\\":\\\"damai_app\\\",\\\"coVersion\\\":\\\"2.0\\\",\\\"coupon\\\":\\\"true\\\",\\\"initIdHashNoList\\\":\\\"[\\\\\\\"\\\\\\\"]\\\",\\\"joinRateLimit\\\":0,\\\"pioneer\\\":\\\"0\\\",\\\"seatInfo\\\":\\\"\\\",\\\"signKey\\\":\\\"clh+aHZUUQFqRV14SVtvcHBfeWZ3X14NZUdOfU5OZ3p3U3lud1hbCnA7IxMqMBMEBjUcCgA5PGtwBwY5KA03JjQDOzckHlMLYU1ddE5Abn1mCSAyLgNSDWM=\\\",\\\"subChannel\\\":\\\"\\\",\\\"umpChannel\\\":\\\"10001\\\",\\\"websiteLanguage\\\":\\\"zh_CN_#Hans\\\"}\"}")
    console.log('************************************************************************');
    console.log('构造MtopRequest对象----->', MtopRequest_);

}
function hook_mtopbilder_init() {
    var MtopBuilder = Java.use("mtopsdk.mtop.intf.MtopBuilder");

    MtopBuilder.$init.overload('mtopsdk.mtop.intf.Mtop',
        'mtopsdk.mtop.domain.MtopRequest', 'java.lang.String').implementation = function (mtop,
            request, str) {
            console.log("[+] MtopBuilder.$init被调用");
            console.log("MtopBuilder.$init被调用参数1----->" + mtop);
            console.log("MtopBuilder.$init被调用参数2----->" + request);
            console.log("MtopBuilder.$init被调用参数3----->" + str);

            // 打印调用栈
            // console.log("[+] MtopBuilder.$init 调用栈----->");
            // console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));

            return this.$init(mtop, request, str);
        };
}
function hook_MtopBusiness_build() {
    var MtopBusiness = Java.use("com.taobao.tao.remotebusiness.MtopBusiness");
    // Hook所有build重载
    var overloads = [
        ['mtopsdk.mtop.domain.IMTOPDataObject'],
        ['mtopsdk.mtop.domain.MtopRequest'],
        ['mtopsdk.mtop.domain.IMTOPDataObject', 'java.lang.String'],
        ['mtopsdk.mtop.domain.MtopRequest', 'java.lang.String'],
        ['mtopsdk.mtop.intf.Mtop', 'mtopsdk.mtop.domain.IMTOPDataObject'],
        ['mtopsdk.mtop.intf.Mtop', 'mtopsdk.mtop.domain.MtopRequest'],
        ['mtopsdk.mtop.intf.Mtop', 'mtopsdk.mtop.domain.IMTOPDataObject',
            'java.lang.String'],
        ['mtopsdk.mtop.intf.Mtop', 'mtopsdk.mtop.domain.MtopRequest',
            'java.lang.String']
    ];

    overloads.forEach(function (params) {
        MtopBusiness.build.overload.apply(MtopBusiness.build,
            params).implementation = function () {
                console.log("[+] MtopBusiness.build被调用，参数数量: " +
                    arguments.length);

                for (var i = 0; i < arguments.length; i++) {
                    console.log("    参数[" + i + "]: " + arguments[i]);
                }

                console.log(Java.use("android.util.Log").getStackTraceString(Java.use(
                    "java.lang.Exception").$new()));

                return this.build.apply(this, arguments);
            };
    });

}
Java.perform(function () {
    hook_http();
    // hook_buildParams();
    // hook_getunifiedsign();
    // hook_MtopRequest()
    // hook_mtopbilder_init();
    // hook_MtopBusiness_build();
});