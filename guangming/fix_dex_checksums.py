#!/usr/bin/env python3
# fix_dex_checksums.py
# 用法: python3 fix_dex_checksums.py classes.dex classes2.dex ...
# 或:   python3 fix_dex_checksums.py /path/to/folder/*.dex

import sys, os, hashlib, zlib, shutil

def is_dex(data):
    return len(data) >= 8 and data[:8] in (b'dex\n035\0', b'dex\n036\0')  # cover common versions

def u32_to_le_bytes(x):
    return x.to_bytes(4, 'little')

def fix_file(path, inplace=True):
    print(f"\n=== {path} ===")
    with open(path, 'rb') as f:
        data = bytearray(f.read())

    if not is_dex(data):
        print("  ✖ not a valid DEX magic header, 跳过")
        return False

    if len(data) < 32:
        print("  ✖ 文件太短 (<32 bytes)，疑似被截断，无法修复")
        return False

    # read existing values (for logging)
    old_checksum = int.from_bytes(data[8:12], 'little')
    old_sig = bytes(data[12:32])

    # compute signature = SHA1(data[32:])
    sha = hashlib.sha1(bytes(data[32:])).digest()
    # write signature (20 bytes) to offset 0x0C..0x1F
    data[12:32] = sha

    # compute adler32 checksum of bytes from offset 12 (0x0C) to end
    # zlib.adler32 returns signed int in some python versions; mask to 32-bit
    checksum = zlib.adler32(bytes(data[12:])) & 0xffffffff
    data[8:12] = u32_to_le_bytes(checksum)

    # backup original
    bak = path + ".bak"
    if not os.path.exists(bak):
        shutil.copy2(path, bak)
        print(f"  saved backup -> {bak}")

    # write fixed file (overwrite original)
    out_path = path
    with open(out_path, 'wb') as f:
        f.write(data)

    print(f"  old checksum: 0x{old_checksum:08x}")
    print(f"  new checksum: 0x{checksum:08x}")
    print(f"  old signature: {old_sig.hex()}")
    print(f"  new signature: {sha.hex()}")
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 fix_dex_checksums.py <file1.dex> [file2.dex ...]")
        return
    for path in sys.argv[1:]:
        # allow globbing
        import glob
        for p in glob.glob(path):
            try:
                fix_file(p)
            except Exception as e:
                print(f"  Exception on {p}: {e}")

if __name__ == '__main__':
    main()
