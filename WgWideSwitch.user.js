// ==UserScript==
// @name       QQbuy Wide Switch
// @namespace  http://joyma.me
// @version    0.1
// @description  turn on or turn off the wg_wide_show 
// @match      http://buy.qq.com/*
// @match      http://*.buy.qq.com/*
// @copyright  2012+, Yevolcn
// ==/UserScript==

function addJQ(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
function main() {
    var hotKey = function (codeAct) { 
        document.onkeyup = function (e) {
            var kc = (window.event || e).keyCode;
            for (var i = 0, k ; k = codeAct[i] ; i++ ) {
                if (k[0] === kc && k[1] && typeof k[1] == 'function') {
                    k[1]();
                }
            }
        };
    };
    function widgetPageTips() {
        var B = $(document.body);
        hotKey([
            // 左方向键切换至窄屏
            [37, function () {
                B.removeClass('wg_wide_show');
            }],
            // 右方向键切换至宽屏
            [39, function () { 
                B.addClass('wg_wide_show');
            }]
        ]);
    };
    widgetPageTips();     
}
addJQ(main);