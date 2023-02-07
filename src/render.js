window.addEventListener('DOMContentLoaded', () => {
    function closeApp(e) {
        backContext.quitAppSig()
    }

    document.getElementById("closeBtn").addEventListener("click", closeApp);
})