window.addEventListener('DOMContentLoaded', () => {
    function closeApp(e) {
        backContext.quitAppSig()
    }

    function refresh(e) {
        document.getElementById("chat-web-view").reload()
    }

    document.getElementById("closeBtn").addEventListener("click", closeApp);
    document.getElementById("refreshBtn").addEventListener("click", refresh);
})