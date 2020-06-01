import React from "react";
import { Redirect } from "react-router-dom";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            description: "",
            isSubmitted: false,
            isLoading: false
        };
    }

    render() {
        const redirect = () => {
            if (this.state.isSubmitted) {
                return <Redirect to="/" />;
            }
        };

        return (() => {
            if (this.state.isLoading) {
                return <h1>...</h1>;
            } else {
                return <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="What do you have to do?" name="description" value={this.state.description} onChange={this.onChange} />
                    <button >Save</button>
                    {redirect()}
                </form>;
            }
        })();

    }

    onChange(e) {
        this.setState({ description: e.target.value });
    }
}

export default Form;