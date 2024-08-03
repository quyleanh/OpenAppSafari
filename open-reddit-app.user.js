// ==UserScript==
// @name         Open Reddit App
// @version      1.0.0
// @author       beebeo
// @match        *://*.reddit.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-reddit-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-reddit-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

window.location.href = location.href.replace('https://', 'reddit://');
