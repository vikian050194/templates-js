import React from "react";
import { withRouter } from "react-router-dom";

class New extends React.Component {
    constructor(){
        super();

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (<button onClick={this.onClick} >New</button>);

    }

    onClick(){
        this.props.history.push("/new");
    }
}

export default withRouter(New);