from lxml import etree

html = open('正常页面.html', 'r', encoding='utf').read()
html = etree.HTML(html)

divs = html.xpath('//div[@class="Gx5Zad xpd EtOod pkphOe"]')
for div in divs:
    # print(div.xpath('.//div[@class="ilUpNd UFvD1 aSRlid"]//text()'))
    if div.xpath('.//div[@class="ilUpNd UFvD1 aSRlid"]//text()'):
        title = div.xpath('.//div[@class="ilUpNd UFvD1 aSRlid"]//text()')[0].replace('[PDF] ', '')
        url = div.xpath('./div[@class="egMi0 kCrYT"]/a/@href')[0].split('&sa=')[0].replace('/url?q=', '')
        dep = "".join(div.xpath('.//div[@class="ilUpNd H66NU aSRlid"]//text()')).strip().replace('\n', '').replace(' ', '')
        print(url, title, dep)