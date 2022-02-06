import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "./withNavigation";

class New extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (<button onClick={this.onClick} >New</button>);

    }

    onClick() {
        this.props.navigate("/new");
    }
}

New.propTypes = {
    navigate: PropTypes.func.isRequired
};

export default withNavigation(New);