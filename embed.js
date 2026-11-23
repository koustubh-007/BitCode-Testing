(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/BitCode-Testing/",
    "verprefix": "",
    "workerjs": "/BitCode-Testing/worker.js",
    "monacoworkerjs": "/BitCode-Testing/monacoworker.js",
    "gifworkerjs": "/BitCode-Testing/gifjs/gif.worker.js",
    "serviceworkerjs": "/BitCode-Testing/serviceworker.js",
    "typeScriptWorkerJs": "/BitCode-Testing/tsworker.js",
    "pxtVersion": "13.2.5",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/BitCode-Testing/",
    "commitCdnUrl": "/BitCode-Testing/",
    "blobCdnUrl": "/BitCode-Testing/",
    "cdnUrl": "/BitCode-Testing/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/BitCode-Testing/simulator.html",
    "simserviceworkerUrl": "/BitCode-Testing/simulatorserviceworker.js",
    "simworkerconfigUrl": "/BitCode-Testing/workerConfig.js",
    "partsUrl": "/BitCode-Testing/siminstructions.html",
    "runUrl": "/BitCode-Testing/run.html",
    "docsUrl": "/BitCode-Testing/docs.html",
    "multiUrl": "/BitCode-Testing/multi.html",
    "asseteditorUrl": "/BitCode-Testing/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/BitCode-Testing/kiosk.html",
    "teachertoolUrl": "/BitCode-Testing/teachertool.html",
    "tutorialtoolUrl": "/BitCode-Testing/tutorialtool.html",
    "skillmapUrl": "/BitCode-Testing/skillmap.html",
    "multiplayerUrl": "/BitCode-Testing/multiplayer.html",
    "authcodeUrl": "/BitCode-Testing/authcode.html"
};

    var scripts = [
        "/BitCode-Testing/highlight.js/highlight.pack.js",
        "/BitCode-Testing/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/BitCode-Testing/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/BitCode-Testing/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/BitCode-Testing/target.js");
    scripts.push("/BitCode-Testing/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
