let IsInitialized = false;
document.addEventListener("load", function () {
    if (IsInitialized) return;
    IsInitialized = true;
    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.type = "text/css";
    styles.href = chrome.runtime.getURL("css/lo.css");
    document.head.appendChild(styles);
}, true);