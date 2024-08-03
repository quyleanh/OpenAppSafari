// ==UserScript==
// @name         Open TikTok App
// @version      1.0.2
// @author       beebeo
// @match        *://*.tiktok.com/*
// @downloadURL  https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-tiktok-app.user.js
// @updateURL    https://raw.githubusercontent.com/quyleanh/zeranoe-ffmpeg-mirror/main/open-tiktok-app.user.js
// @homepage     https://github.com/quyleanh/OpenInAppSafari
// ==/UserScript==

let redirect = document.querySelector('[property="al:ios:url"]')?.getAttribute('content')
if (redirect === 'snssdk1180://user/profile/') {
    let data = JSON.parse(document.getElementById('SIGI_STATE').textContent)
    redirect += Object.values(data.UserModule?.users || data.MobileUserModule?.users)[0].id
}

if (location.pathname.includes('/view/product/')) {
    let searchParam = new URLSearchParams(window.location.search)
    let render_data = JSON.parse(decodeURIComponent(document.getElementById('RENDER_DATA').textContent))
    let tiktok_shop = 'snssdk1233://ec/pdp?gd_label={{gd_label}}&needlaunchlog=1&page_name=reflow_pdp&params_url={{location.href}}&refer=web&requestParams=%7B%22product_id%22%3A%5B%22{{product_id}}%22%5D%7D&trackParams={{trackParams}}'
    let direct_shop = tiktok_shop.replace('{{gd_label}}', 'click_wap_pdp').replace('{{location.href}}', encodeURIComponent(location.href)).replace('{{product_id}}', render_data[2].initialData.productInfo.product_id).replace('{{trackParams}}', encodeURIComponent(searchParam.get('trackParams')))
    redirect = direct_shop
}

if (redirect) window.location.href = redirect
