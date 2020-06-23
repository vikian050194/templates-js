import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import List from "./components/List";
import NewItemForm from "./components/NewItemForm";
import EditItemForm from "./components/EditItemForm";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/new" exact component={NewItemForm} />
                    <Route path="/:id(\d+)/show" exact component={List} />
                    <Route path="/:id(\d+)/edit" exact component={EditItemForm} />
                </Switch>
            </Router >);
    }
}

export default App;