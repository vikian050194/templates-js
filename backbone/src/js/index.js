import App from "./app";

window.addEventListener("load", function() { 
    var app = new App({el: document.body});
    app.render();
    app.start();
});