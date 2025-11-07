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
      console.log("=== 开始追踪SkuDoloresRequest使用 ===");
      
      const SkuDoloresRequest = Java.use("cn.damai.commonbusiness.seatbiz.sku.qilin.request.SkuDoloresRequest");
      console.log("✓ SkuDoloresRequest类加载成功");
      
      // Hook构造函数
      SkuDoloresRequest.$init.overloads.forEach(function(overload, index) {
        console.log("构造函数[" + index + "]:", overload.argumentTypes.map(t => t.className));
        overload.implementation = function() {
          console.log("🔵 SkuDoloresRequest构造函数被调用[" + index + "]");
          console.log("参数:", Array.prototype.slice.call(arguments));
          var result = this.$init.apply(this, arguments);
          console.log("构造完成后字段值:");
          console.log("  itemId:", this.itemId.value);
          console.log("  bizCode:", this.bizCode.value);
          console.log("  scenario:", this.scenario.value);
          console.log("  exParams:", this.exParams.value);
          console.log("  API_NAME:", this.API_NAME ? this.API_NAME.value : "null");
          console.log("  VERSION:", this.VERSION ? this.VERSION.value : "null");
          return result;
        };
      });
      
      // Hook字段设置
      var originalItemId = Object.getOwnPropertyDescriptor(SkuDoloresRequest.class, 'itemId');
      if (originalItemId && originalItemId.set) {
        originalItemId.set = function(value) {
          console.log("🟢 itemId被设置为:", value);
          this.itemId.value = value;
        };
      }
      
      // Hook getApiName方法
      SkuDoloresRequest.getApiName.implementation = function() {
        console.log("🔵 getApiName被调用");
        var result = this.getApiName();
        console.log("getApiName返回:", result);
        return result;
      };
      
      // Hook getVersion方法
      SkuDoloresRequest.getVersion.implementation = function() {
        console.log("🔵 getVersion被调用");
        var result = this.getVersion();
        console.log("getVersion返回:", result);
        return result;
      };
      
      // Hook getNeedEcode方法
      SkuDoloresRequest.getNeedEcode.implementation = function() {
        console.log("🔵 getNeedEcode被调用");
        var result = this.getNeedEcode();
        console.log("getNeedEcode返回:", result);
        return result;
      };
      
      // Hook getNeedSession方法
      SkuDoloresRequest.getNeedSession.implementation = function() {
        console.log("🔵 getNeedSession被调用");
        var result = this.getNeedSession();
        console.log("getNeedSession返回:", result);
        return result;
      };
      
      // 尝试创建实例并直接设置字段
      console.log("=== 尝试创建实例并设置字段 ===");
      try {
        let skuRequest = SkuDoloresRequest.$new();
        console.log("✓ 实例创建成功");
        
        // 直接设置字段而不是调用setData
        console.log("设置itemId字段...");
        skuRequest.itemId.value = "730829764823";
        console.log("✓ itemId设置成功:", skuRequest.itemId.value);
        
        console.log("设置bizCode字段...");
        skuRequest.bizCode.value = "ali.china.damai";
        console.log("✓ bizCode设置成功:", skuRequest.bizCode.value);
        
        console.log("设置scenario字段...");
        skuRequest.scenario.value = "itemsku";
        console.log("✓ scenario设置成功:", skuRequest.scenario.value);
        
        // 查看SkuItem类
        console.log("=== 检查SkuItem类 ===");
        try {
          const SkuItem = Java.use("cn.damai.commonbusiness.seatbiz.sku.qilin.request.SkuDoloresRequest$SkuItem");
          console.log("✓ SkuItem内部类找到");
          let skuItem = SkuItem.$new();
          skuRequest.exParams.value = skuItem;
          console.log("✓ exParams设置成功");
        } catch(e) {
          console.log("SkuItem设置失败:", e.message);
          // 尝试查找正确的SkuItem类
          console.log("尝试查找其他SkuItem类...");
        }
        
        console.log("=== 最终实例状态 ===");
        console.log("itemId:", skuRequest.itemId.value);
        console.log("bizCode:", skuRequest.bizCode.value);
        console.log("scenario:", skuRequest.scenario.value);
        console.log("API_NAME:", skuRequest.API_NAME ? skuRequest.API_NAME.value : "null");
        console.log("VERSION:", skuRequest.VERSION ? skuRequest.VERSION.value : "null");
        console.log("NEED_ECODE:", skuRequest.NEED_ECODE ? skuRequest.NEED_ECODE.value : "null");
        console.log("NEED_SESSION:", skuRequest.NEED_SESSION ? skuRequest.NEED_SESSION.value : "null");
        
      } catch(e) {
        console.log("实例创建或字段设置失败:", e.message);
        console.log("错误堆栈:", e.stack);
      }
      
      console.log("=== 追踪设置完成 ===");
      
    } catch (e) {
      console.log("❌ 总体错误: " + e);
      console.log("堆栈: " + e.stack);
    }
  }, 3000);
});