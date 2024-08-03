// ==UserScript==
// @name         Open Spotify App
// @version      1.0.0
// @author       beebeo
// @match        *://*.spotify.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-spotify-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-spotify-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

let redirect = document.querySelector('[name="al:ios:url"]')?.getAttribute('content')
if (redirect) {
  window.location.href = redirect;
}
