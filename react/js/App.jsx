import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/Layout";
import Routes from "./Routes";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Router>
                    <Routes />
                </Router >
            </Layout>
        );
    }
}

export default App;