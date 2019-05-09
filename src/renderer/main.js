var webview_wrapper = document.getElementById("webview_wrapper")

// create_new_webview_instanse
var webview = document.createElement("webview")
webview.id = "webViewMain"
webview.setAttribute("src", "https://messages.google.com/web")

// append new_webview
webview_wrapper.appendChild(webview)
webview.addEventListener("dom-ready", function(){ 

    require('electron-context-menu')({
        window: webview
    })
})