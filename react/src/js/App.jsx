import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import List from "./components/List";
import NewItemForm from "./components/NewItemForm";
import EditItemForm from "./components/EditItemForm";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={List} />
                    <Route path="/new" exact component={NewItemForm} />
                    <Route path="/:id(\d+)/show" exact component={List} />
                    <Route path="/:id(\d+)/edit" exact component={EditItemForm} />
                </div>
            </Router >);
    }
}

export default App;