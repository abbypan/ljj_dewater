// --------------------------------------------------------------------
//
// ==UserScript==
// @name          ljj_m_dewater
// @namespace     http://abbypan.github.io/
// @version       0.1
// @author        Abby Pan (abbypan@gmail.com)
// @description   绿晋江( http://www.jjwxc.net ) 小说合集，手机页
// @copyright     2017, Abby Pan (http://abbypan.github.io/)
// @grant         GM_getResourceText
// @include       http://m.jjwxc.net/book2/*?more=0&whole=1*
// @include       https://m.jjwxc.net/book2/*?more=0&whole=1*
// @resource      ljj_m_dewater https://raw.githubusercontent.com/abbypan/ljj_dewater/master/ljj_m_dewater.js
// @resource      bbs_dewater https://raw.githubusercontent.com/abbypan/bbs_dewater/master/bbs_dewater.js
// ==/UserScript==
//
// --------------------------------------------------------------------


function add_js_file(js) {
    var text = GM_getResourceText(js);

    var add = document.createElement('script');
    add.setAttribute('type', "text/javascript");
    add.appendChild(document.createTextNode(text));

    document.getElementsByTagName('head')[0].appendChild(add);
}

function GM_wait() {
    if (typeof unsafeWindow.jQuery == 'undefined') {
        window.setTimeout(GM_wait, 100);
    } else {
        add_js_file('ljj_m_dewater');
        add_js_file('bbs_dewater');
    }
}

(function(){
    if (typeof unsafeWindow.jQuery == 'undefined') {
        //ljj has jquery
        //add_js_file('jquery');
    }
    GM_wait();
})();

