    // 封装scroll函数的原因 ： scrollTop ／scrollLeft 有兼容性问题
    function scroll() {
        // IE9+ 浏览器
        if (window.pageXOffset != null) {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        // 火狐浏览器 （用DTD声明了的）
        else if (document.compatMode == "CSS1Compat") {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        // 谷歌浏览器 和 没有用DTD声明的
        else {
            return {
                left: document.body.scrollLeft,
                top: document.body.scrollTop
            }
        }
    }