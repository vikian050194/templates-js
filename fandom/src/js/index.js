import App from "./components/App";

window.addEventListener("load", function () {
    const $root = document.createElement("div");
    $root.id = "root";
    document.body.appendChild($root);

    App($root);
});

console.info(`App is started at ${(new Date()).toLocaleString()}`);