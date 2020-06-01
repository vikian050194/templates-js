import App from "./app";

document.addEventListener("DOMContentLoaded", function() { 
    var app = new App({el: document.body});
    app.render();
    app.start();
});