// 深度分析 - 对比finally.js与lzh_a.js的实现

const test1Json = '{"TrackList":{"mc":"194,500,742, ,1","tc":"","mu":"280,493,906, ,1","te":"","mp":"410,514,5,1|392,514,8,1|376,514,21,1|362,513,24,1|355,512,32,1","tmv":"","mm":"194,500,740,1|196,498,782,1|199,498,785,1","ks":"","fi":"","startTime":1762408643410,"si":"626,1920,861,626,846,982,1080,105.26315789473684,1813"},"TrackStartTime":1762408643410,"VerifyTime":1762408644333,"xPos":"33","slidePos":"86","arg":"EcsfLxFBPR5CfA=="}';
const key = '0000';

console.log('='.repeat(80));
console.log('深度分析 - 对比finally.js实现与日志执行轨迹');
console.log('='.repeat(80));
console.log('\n测试JSON长度:', test1Json.length);
console.log('Key:', key);

// 步骤1: 初始化buffer为i*17
console.log('\n【步骤1】初始化buffer为i*17序列');
const buffer = [];
for (let i = 0; i < 16; i++) {
    const val = (i << 4) + (i % 16);
    buffer.push(val);
    console.log(`  buffer[${i}] = (${i} << 4) + (${i} % 16) = ${i * 16} + ${i} = ${val}`);
}
console.log('初始buffer:', buffer);

// 步骤2: 使用key进行16次置换
console.log('\n【步骤2】使用key "0000" 进行16次置换操作');
let a = 0;
for (let i = 0; i < 16; i++) {
    const d = (i + a + buffer[i] + buffer[a]) >>> 1;
    const b = key.charCodeAt(-(-i % 4)); // '0'.charCodeAt(0) = 48
    const newA = (d + b) & 15;
    
    console.log(`  [${i}] d=(${i}+${a}+${buffer[i]}+${buffer[a]})>>>1=${d}, b=charCodeAt(${-(-i % 4)})=${b}, newA=(${d}+${b})&15=${newA}`);
    console.log(`       交换 buffer[${i}]=${buffer[i]} <-> buffer[${newA}]=${buffer[newA]}`);
    
    const temp = buffer[i];
    buffer[i] = buffer[newA];
    buffer[newA] = temp;
    
    console.log(`       交换后 buffer[${i}]=${buffer[i]}, buffer[${newA}]=${buffer[newA]}`);
    a = newA;
}
console.log('\nKey置换后buffer:', buffer);

// 步骤3: 处理JSON字符串的前几个字符（验证）
console.log('\n【步骤3】处理JSON字符串（前10个字符）');
let n = 0;
for (let i = 0; i < Math.min(10, test1Json.length); i++) {
    const m = i & 15;
    const aVal = m ^ n;
    const bVal = buffer[m] ^ buffer[n];
    const newN = (aVal + bVal) & 15;
    
    console.log(`  [${i}] char='${test1Json[i]}' charCode=${test1Json.charCodeAt(i)}`);
    console.log(`       m=${m}, n=${n}, a=${aVal}, b=${bVal}, newN=${newN}`);
    console.log(`       交换前: buffer[${m}]=${buffer[m]}, buffer[${newN}]=${buffer[newN]}`);
    
    const temp = buffer[m];
    buffer[m] = buffer[newN];
    buffer[newN] = temp;
    
    let c = test1Json.charCodeAt(i) + (m + newN);
    c ^= (buffer[m] ^ buffer[newN]);
    c &= 255;
    
    console.log(`       c = ${test1Json.charCodeAt(i)}+(${m}+${newN}) = ${test1Json.charCodeAt(i) + (m + newN)}`);
    console.log(`       c ^= (${buffer[m]} ^ ${buffer[newN]}) = ${(buffer[m] ^ buffer[newN])}, 结果 c=${c}`);
    console.log(`       buffer[${m}] = ${c}`);
    
    buffer[m] = c;
    n = newN;
}

console.log('\n处理前10字符后buffer:', buffer);
console.log('\n注意：完整算法需要处理全部', test1Json.length, '个字符');
