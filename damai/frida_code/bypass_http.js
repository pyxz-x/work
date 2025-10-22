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
        console.log('getUnifiedSign参数----->', arguments[0].toString());
        console.log('getUnifiedSign参数----->', arguments[1].toString());
        var a = InnerSignImpl.getUnifiedSign.apply(this, arguments);
        console.log('getUnifiedSign返回值----->', a.toString());
        console.log('************************************************************************');
        return a;
    }

}
Java.perform(function () {
    hook_http();
    hook_getunifiedsign();
});