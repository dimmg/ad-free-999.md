function injectScript(file) {
    var s = document.createElement('script');
    s.setAttribute('src', file);

    (document.head || document.documentElement).appendChild(s);
}

injectScript(chrome.extension.getURL('/cleaner.js'));
