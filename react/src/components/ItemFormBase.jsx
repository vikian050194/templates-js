import React from "react";
import { Navigate } from "react-router-dom";

class ItemFormBase extends React.Component {
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
                return <Navigate to="/" />;
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

export default ItemFormBase;