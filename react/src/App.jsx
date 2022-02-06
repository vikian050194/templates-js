import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./components/List";
import NewItemForm from "./components/NewItemForm";
import EditItemForm from "./components/EditItemForm";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<List />} />
                    <Route path="/new" exact element={<NewItemForm />} />
                    <Route path="/:id/show" exact element={<List />} />
                    <Route path="/:id/edit" exact element={<EditItemForm />} />
                </Routes>
            </Router >);
    }
}

export default App;