function hookNetwork(){
var enableSpdy = false;
var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
var instance = SwitchConfig.getInstance();

instance.setGlobalSpdySslSwitchOpen(enableSpdy);
instance.setGlobalSpdySwitchOpen(enableSpdy);

}

Java.perform(function () {
hookNetwork();
});