import React from "react";

export class ClassicComponent extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);

        const id = parseInt(props.match.params.id);

        this.state = {
            id
        };
    }

    render() {
        return <>
            <h1>{this.state.id}</h1>
            <button onClick={this.onClick}>+1</button>
        </>;
    }

    onClick() {
        this.setState((state) => {
            return { id: state.id + 1 };
        });
    }
}

export default ClassicComponent;