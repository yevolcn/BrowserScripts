// ==UserScript==
// @name       Fuck8000
// @namespace  http://joyma.me
// @version    0.1
// @description  fuck the 8k.
// @match      http://*/*
// @copyright  2012+, Yevolcn
// ==/UserScript==
// fk8k
function fk8k () {
    console.log('fk8k begin');
    var el = document.getElementById('btnVisit30') ;
    if(el) {
        el.click() ;
        //console.log('fk8k works!');
    }else{
        //console.log('fk8k does not works!');
    }
}

fk8k();