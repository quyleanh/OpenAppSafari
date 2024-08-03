// ==UserScript==
// @name         Open Twitter App
// @version      1.0.0
// @author       beebeo
// @match        *://*.twitter.com/*
// @match        *://x.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-twitter-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-twitter-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

function redirect () {
    let type = document.querySelector('[property="og:type"]')?.getAttribute('content')
    if (type === 'article') window.location.href = 'twitter://tweet?id=' + location.pathname.split('/').at(-1)
    if (type === 'profile') window.location.href = 'twitter://user?screen_name=' + location.pathname.split('/').at(-1)

    !type && requestAnimationFrame(redirect)
}

redirect()
