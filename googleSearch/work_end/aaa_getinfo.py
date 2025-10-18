import json
from time import sleep

def main(num):
    input_ = set()
    input_getted = set()
    input_finished = set()
    pagelinks = set()
    pagelinks_finished = set()
    shixiao_pagelinks = set()
    pdf = set()
    with open('all.json', 'r', encoding='utf-8') as f:
        datas = f.readlines()
        for data in datas:
            data_json = json.loads(data)
            input_.add(data_json['input'])
    with open('input_getted.json', 'r', encoding='utf-8') as f:
        datas = json.loads(f.read())
        for key in datas.keys():
            input_getted.add(key)
    with open('result.json', 'r', encoding='utf-8') as f:
        datas = f.readlines()
        for data in datas:
            data_json = json.loads(data)
            input_finished.add(data_json['input'])
            pdf.add(data_json['url'])
    with open('page_links.json', 'r', encoding='utf-8') as f:
        datas = f.readlines()
        for data in datas:
            data_json = json.loads(data)
            pagelinks.add(data_json['url'])
    with open('shixiao_pagelink.txt', 'r', encoding='utf-8') as f:
        datas = f.readlines()
        for data in datas:
            shixiao_pagelinks.add(data.replace('\n', ''))
    with open('finished.txt', 'r', encoding='utf-8') as f:
        datas = f.readlines()
        for data in datas:
            pagelinks_finished.add(data.replace('\n', ''))
    num['input_'] = len(input_)
    num['input_getted'] = len(input_getted)
    num['input_finished'] = len(input_finished)
    num['pagelinks'] = len(pagelinks)
    num['pagelinks_finished'] = len(pagelinks_finished)
    num['shixiao_pagelinks'] = len(shixiao_pagelinks)
    num['pdf'] = len(pdf)
    return num

while True:
    log_num = {
        'input_':0,
        'input_getted': 0,
        'input_finished': 0,
        'pagelinks': 0,
        'pagelinks_finished': 0,
        'shixiao_pagelinks': 0,
        'pdf': 0,
    }
    log_num1 = main(log_num)
    print(log_num1)
    sleep(1)
    log_num2 = main(log_num)
    print('#' * 20, '\trun 30s\t', '*'*20)
    print(f'input: {log_num1["input_"]}'+'\n',
          f'获取input: {log_num2["input_getted"] - log_num1["input_getted"]}'+'\n',
          f'完成input: {log_num2["input_finished"] - log_num1["input_finished"]}'+'\n',
          f'获取页面: {log_num2["pagelinks"] - log_num1["pagelinks"]} '+'\n',
          f'完成input: {log_num2["pagelinks_finished"] - log_num1["pagelinks_finished"]}'+'\n',
          f'失效input: {log_num2["shixiao_pagelinks"] - log_num1["shixiao_pagelinks"]}'+'\n',
          f'获取pdf: {log_num2["pdf"] - log_num1["pdf"]}'+'\n',
          )
