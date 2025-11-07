function p1(jsonString, key = '0000') {
    const buffer = [];
    const BUFFER_SIZE = 16;
    
    for (let i = 0; i < BUFFER_SIZE; i++) {
        buffer.push((i << 4) + (i % BUFFER_SIZE));
    }
    
    let prevIndex = 0;
    
    for (let i = 0; i < BUFFER_SIZE; i++) {
        const midValue = (i + prevIndex + buffer[i] + buffer[prevIndex]) >>> 1;
        const keyCharCode = key.charCodeAt(-(-i % key.length));
        const newIndex = (midValue + keyCharCode) & 15;
        const temp = buffer[i];
        buffer[i] = buffer[newIndex];
        buffer[newIndex] = temp;
        prevIndex = newIndex;
    }
    
    let indexN = 0;
    
    for (let i = 0; i < jsonString.length; i++) {
        const indexM = i & 15;
        const indexXor = indexM ^ indexN;
        const bufferXor = buffer[indexM] ^ buffer[indexN];
        indexN = (indexXor + bufferXor) & 15;
        const temp = buffer[indexM];
        buffer[indexM] = buffer[indexN];
        buffer[indexN] = temp;
        let charValue = jsonString.charCodeAt(i) + (indexM + indexN);
        charValue ^= (buffer[indexM] ^ buffer[indexN]);
        charValue &= 255;
        buffer[indexM] = charValue;
    }
    
    let currentPos = 0;
    
    for (let round = 0; round < 32; round++) {
        const prevPos = currentPos ? currentPos - 1 : BUFFER_SIZE - 1;
        const xorValue = buffer[currentPos] ^ buffer[prevPos];
        buffer[currentPos] = xorValue;
        currentPos++;
        if (currentPos > BUFFER_SIZE - 1) {
            currentPos = 0;
        }
    }
    
    const hexResult = buffer.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hexResult;
}

const test1Json = '{"TrackList":{"mc":"194,500,742, ,1","tc":"","mu":"280,493,906123, ,1","te":"","mp":"410,514,5,1|392,514,8,1|376,514,21,1|362,513,24,1|355,512,32,1","tmv":"","mm":"194,500,740,1|196,498,782,1|199,498,785,1","ks":"","fi":"","startTime":1762408643410,"si":"626,1920,861,626,846,982,1080,105.26315789473684,1813"},"TrackStartTime":1762408643410,"VerifyTime":1762408644333,"xPos":"33","slidePos":"86","arg":"EcsfLxFBPR5CfA=="}'
const result1 = p1(test1Json);
console.log(result1)
