// ==UserScript==
// @name         Open Twitter App
// @version      1.0.0
// @author       beebeo
// @match        *://*.twitter.com/*
// @match        *://*.x.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-twitter-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-twitter-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

function redirect () {
    var locationArr = window.location.pathname.split("/").reverse()
    if (locationArr[0] && !locationArr[1]) {
        var tw;
        if (locationArr[0] === "home") {
            tw = `twitter://timeline`
        } else {
            tw = `twitter://user?screen_name=${locationArr[0]}`
        }
        window.location.href = tw
    } else if (locationArr[0] && locationArr[1] === "status") { // tweet
        var tw = `twitter://status?id=${locationArr[0]}`
        window.location.href = tw
    }

    !locationArr && requestAnimationFrame(redirect)
}

redirect()
