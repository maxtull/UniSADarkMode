let IsInitialized = false;
document.addEventListener("load", function () {
    if (IsInitialized) return;
    IsInitialized = true;

    const styles = document.createElement("link");
    styles.rel = "stylesheet";
    styles.type = "text/css";

    if (window.location.href.includes("my.unisa.edu.au")) {
        styles.href = chrome.runtime.getURL("css/my.css");
    } else {
        styles.href = chrome.runtime.getURL("css/lo.css");
    }

    document.head.appendChild(styles);
}, true);