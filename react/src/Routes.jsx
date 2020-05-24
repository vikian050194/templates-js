import React from "react";
import { Route, Switch, Link } from "react-router-dom";

const Home = () => <div className="home">
    <div>
        Components
    </div>
    <div>
        <Link to="classic/33">
            classic
        </Link>
    </div>
    <div>
        <Link to="functional/42">
            functional
        </Link>
    </div>
</div>;

import ClassicComponent from "./components/ClassicComponent";
import FunctionalComponent from "./components/FunctionalComponent";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/classic/:id(\d+)" exact component={ClassicComponent} />
            <Route path="/functional/:id(\d+)" exact component={FunctionalComponent} />
        </Switch>
    );
};

export default Routes;