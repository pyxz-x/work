// hook setRequestHeader
(function () {
    let _setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
    XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
        if (key === 'x-kpsdk-dt') {
            debugger;
        }
        return _setRequestHeader.apply(arguments)
    }
})();

// hook createElement
(function () {
    _createElement = document.createElement;
    document.createElement = function (tagname) {
        if (tagname === 'div') {
            debugger;
        }
        return _createElement(tagname)
    }
})();

// hook createElement children
(function () {
    _lzh = div_dom.children
    Object.defineProperty(div_dom, 'children', {
        get: function () {
            debugger;
            return _lzh
        }
    })
})();
// hook 
(function () {
    _lzh = div_dom.children[0].contentWindow
    Object.defineProperty(div_dom.children[0], 'contentWindow', {
        get: function () {
            debugger;
            return _lzh
        }
    })
})();


