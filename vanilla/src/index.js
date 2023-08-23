import { foo } from "./foo.js"

window.addEventListener("load", () => {
    document.querySelector("h1").innerHTML = "Text inserted from JavaScript";
    foo();
});