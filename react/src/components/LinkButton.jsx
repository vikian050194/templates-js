import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "./withNavigation";

class LinkButton extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (<button onClick={this.onClick} className={this.props.className} >{this.props.text}</button>);

    }

    onClick() {
        this.props.navigate(`/${this.props.to}`);
    }
}

LinkButton.propTypes = {
    navigate: PropTypes.func.isRequired
};

export default withNavigation(LinkButton);