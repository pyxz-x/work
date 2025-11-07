// list_inner_retry.js
var MAX_TRIES = 30;    // 最多尝试次数
var INTERVAL_MS = 500; // 每次尝试间隔（毫秒）

function tryEnumerate(tryNo) {
    Java.perform(function () {
        var found = [];
        Java.enumerateLoadedClasses({
            onMatch: function (c) {
                if (c.indexOf("InnerSignImpl") !== -1) {
                    found.push(c);
                }
            },
            onComplete: function () {
                if (found.length > 0) {
                    // 去重并打印
                    var seen = {};
                    found.forEach(function (x) {
                        if (!seen[x]) {
                            console.log("[FOUND] " + x);
                            seen[x] = true;
                        }
                    });
                    console.log("[list_inner_retry] done - found " + Object.keys(seen).length + " class(es).");
                    // 如果你希望脚本在打印后退出（让 frida 会话回到交互模式），可以 process.exit 或者不做处理保持会话
                } else {
                    if (tryNo < MAX_TRIES) {
                        // 等待后再试
                        setTimeout(function () {
                            tryEnumerate(tryNo + 1);
                        }, INTERVAL_MS);
                    } else {
                        console.log("[list_inner_retry] gave up after " + MAX_TRIES + " tries.");
                    }
                }
            }
        });
    });
}

// Start trying
tryEnumerate(1);
