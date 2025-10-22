// __handlers__\mtopsdk.security.InnerSignImpl\getUnifiedSign.js

{
  onEnter(log, args, state) {
    // 增加了HashMap2Str函数，将HashMap类型转换为字符串
    function HashMap2Str(params_hm) {
      var HashMap = Java.use('java.util.HashMap');
      var args_map = Java.cast(params_hm, HashMap);
      return args_map.toString();
    };
    // 当调用函数时，输出函数参数
    log(`InnerSignImpl.getUnifiedSign(${HashMap2Str(args[0])},${HashMap2Str(args[1])},${args[2]},${args[3]})`);
  }, onLeave(log, retval, state) {
    function HashMap2Str(params_hm) {
      var HashMap = Java.use('java.util.HashMap');
      var args_map = Java.cast(params_hm, HashMap);
      return args_map.toString();
    };
    if (retval !== undefined) {
      // 当函数运行结束时，输出函数结果
      log(`<= ${HashMap2Str(retval)}`);
    }
  }
}