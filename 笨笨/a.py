import pandas as pd
import jieba
from collections import Counter


def count_words(*columns):
    result = {}
    for column in columns:
        if column not in df.columns:
            print(f"列名 {column} 不存在")
            continue
        text = ' '.join(df[column].dropna().astype(str))
        words = list(jieba.cut(text))
        word_count = dict(Counter(words).most_common())
        result[column] = word_count
    return result

# 读取文件
excel_file = pd.ExcelFile('/Users/a1/Desktop/work2/work/笨笨/2019年以来涉及我省注射泵生产企业的不良事件报告.xls')

# 获取指定工作表中的数据
df = excel_file.parse('Sheet0')

# 直接指定要分析的列名
columns = ['事件原因分析描述', '器械故障表现']
word_frequency = count_words(*columns)
print(word_frequency)