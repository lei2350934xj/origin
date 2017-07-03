(function (doc, win) {
        var docEl = doc.documentElement,
            isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
            dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
            scale = 1 ,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

        docEl.dataset.dpr = dpr;

        var metaEl = doc.createElement('meta');
        metaEl.name = 'viewport';
        metaEl.content = 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';
        docEl.firstElementChild.appendChild(metaEl);

        var recalc = function () {
            var width = docEl.getBoundingClientRect().width;
            if (width / dpr > 640) {
                width = 640 * dpr;
            }
            var rem = width / 10;
            docEl.style.fontSize = rem + 'px';
        };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
    })(document, window);