// ==UserScript==
// @name         Open Reddit App
// @version      1.0.0
// @author       beebeo
// @match        *://*.reddit.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-apollo-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-apollo-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

if (window.location.pathname === '/redirect') return;
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`