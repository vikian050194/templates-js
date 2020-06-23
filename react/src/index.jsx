import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

window.addEventListener("load", function() { 
    ReactDOM.render(<App />, document.getElementById("root"));
});

console.info(`App is started at ${(new Date()).toLocaleString()}`);