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
    try {
      console.log("开始调试模式...");
      
      // 首先Hook一些关键方法来观察调用
      try {
        const SkuDoloresRequest = Java.use("cn.damai.commonbusiness.seatbiz.sku.qilin.request.SkuDoloresRequest");
        console.log("SkuDoloresRequest类加载成功");
        
        // Hook构造函数
        SkuDoloresRequest.$init.overloads.forEach(function(overload, index) {
          console.log("构造函数[" + index + "]:", overload.argumentTypes.map(t => t.className));
          overload.implementation = function() {
            console.log("SkuDoloresRequest构造函数被调用[" + index + "]");
            var result = this.$init.apply(this, arguments);
            console.log("构造函数执行完成，实例:", this);
            return result;
          };
        });
        
        // 先尝试基本的实例创建
        console.log("尝试创建SkuDoloresRequest实例...");
        let MtopRequest_ = SkuDoloresRequest.$new();
        console.log("SkuDoloresRequest实例创建成功:", MtopRequest_);
        
        // 检查实例的字段
        console.log("检查实例字段...");
        console.log("实例类名:", MtopRequest_.$className);
        
        // 安全地尝试获取API信息
        try {
          console.log("API名称:", MtopRequest_.getApiName());
        } catch(e) {
          console.log("获取API名称失败:", e);
        }
        
        try {
          console.log("版本:", MtopRequest_.getVersion());
        } catch(e) {
          console.log("获取版本失败:", e);
        }
        
        // 先不进行复杂操作，只测试基本的实例化
        console.log("基本实例化测试完成");
        
      } catch(e) {
        console.log("SkuDoloresRequest处理错误:", e);
        console.log("错误堆栈:", e.stack);
      }

    } catch (e) {
      console.log("总体错误: " + e);
      console.log("堆栈: " + e.stack);
    }
  }, 3000);
});