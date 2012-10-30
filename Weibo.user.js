// ==UserScript==
// @name       Weibo
// @namespace  http://joyma.me
// @version    0.1
// @description  make the sidebar position:fixed and hide the ads
// @match      http*://weibo.com/*
// @copyright  2012+, Yevolcn
// ==/UserScript==
// fk8k
function includeStyleElement(styles,styleId) {

    if (document.getElementById(styleId)) 
        {
            return
        }
    var style = document.createElement("style");
    style.id = styleId;
    (document.getElementsByTagName("head")[0] || document.body).appendChild(style);
    if (style.styleSheet) 
    { //for ie
        style.styleSheet.cssText = styles;
    } else {
        //for w3c
        style.appendChild(document.createTextNode(styles));
    }
}

var styles = ".B_index .W_main_l{position:fixed}#plc_main{margin-left:150px;}#pl_rightmod_ads35{display:none}";

includeStyleElement(styles,"newstyle");

