// ==UserScript==
// @name       BBS for OA
// @namespace  http://joyma.me
// @version    0.1
// @description  make the width of the image to 100%
// @match      http://bbs.oa.com/forum/*
// @copyright  2012+, Yevolcn
// ==/UserScript==
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
var styles = ".view_content .content img{width:100%;}";
includeStyleElement(styles,"newstyle");
