import React from "react";
import PropTypes from "prop-types";
import FormBase from "./ItemFormBase";
import { withRouter } from "./withRouter";

class EditItemForm extends FormBase {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`/api/list/${this.props.params.id}`)
            .then((response) => {
                return response.json();
            })
            .then((item) => {
                this.setState({ ...item, isLoading: false });
            });
    }

    onSubmit(e) {
        e.preventDefault();

        fetch(`/api/list/${this.props.params.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                isCompleted: this.state.isCompleted,
                description: this.state.description
            })
        }).then(() => {
            this.setState({ isSubmitted: true });
        });

    }
}

EditItemForm.propTypes = {
    params: PropTypes.object.isRequired
};

export default withRouter(EditItemForm);