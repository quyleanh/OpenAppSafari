// ==UserScript==
// @name         Open Instagram App
// @version      1.0.0
// @author       beebeo
// @match        *://*.instagram.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-instagram-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/OpenInAppSafari/main/open-instagram-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

let redirect = document.querySelector('[property="al:ios:url"]')?.getAttribute('content')
if (redirect) {
  window.location.href = redirect;
}
