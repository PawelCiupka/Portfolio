function includeJS(source) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = source;
    document.body.appendChild(script);
}

window.onload = function () {
    includeJS('scripts/menuScript.js');
    includeJS('scripts/generalScript.js');
    includeJS('scripts/aboutScript.js');
    includeJS('scripts/portfolioScript.js');
    includeJS('scripts/contactScript.js');
}