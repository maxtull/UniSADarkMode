let isInitialized = false;

const stylesheets = [
    {
        host: "lo.unisa.edu.au",
        stylesheets: ["css/lo.css"]
    },
    {
        host: "uo.unisa.edu.au",
        stylesheets: ["css/lo.css"]
    },
    {
        host: "my.unisa.edu.au",
        stylesheets: ["css/my.css"]
    }
];

const inject = (path) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = chrome.runtime.getURL(path);
    document.head.appendChild(link);
};

const main = () => {
    if (isInitialized) return;
    isInitialized = true;

    const injectableHost = stylesheets.find((h) => h.host === window.location.hostname);
    if (!injectableHost) return;

    injectableHost.stylesheets.forEach(inject);
    inject("css/base.css");
};

document.addEventListener("DOMContentLoaded", main, true);