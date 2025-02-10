import React from "react";
import PropTypes from "prop-types";
import LinkButton from "./LinkButton";

class Item extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);

        this.state = {
            isCompleted: this.props.isCompleted,
            isDeleted: false
        };
    }

    render() {
        const showLink = () => {
            if (this.props.renderInShowMode) {
                return null;
            }

            return <LinkButton text="Show" to={this.props.id + "/show"} className="show" />
        };

        return <p>
            <input type="checkbox" onChange={this.onChange} defaultChecked={this.state.isCompleted} />
            <span className={this.state.isCompleted ? "complete" : "incomplete"}>{this.props.description}</span>
            {showLink()}
            <LinkButton text="Edit" to={this.props.id + "/edit"} className="edit" />
            <button onClick={this.onDelete} className="delete">Delete</button>
        </p>;
    }

    onChange() {
        const completed = !this.state.isCompleted;
        this.setState({ isCompleted: completed });
        fetch(`/api/list/${this.props.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                description: this.props.description,
                isCompleted: completed
            })
        });
    }

    onDelete() {
        fetch(`/api/list/${this.props.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            this.props.onDelete(this.props.id);
        });
    }
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    renderInShowMode: PropTypes.bool
};

export default Item;