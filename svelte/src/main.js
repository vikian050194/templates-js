import App from "./App.svelte";
import "./global.css";

const app = new App({
    target: document.body,
    props: {
        name: "Svelte Web App"
    }
});

export default app;