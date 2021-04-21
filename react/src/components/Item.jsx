import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

            return <Link to={this.props.id + "/show"} className="show">Show</Link>;
        };

        return <tr>
            <td>
                {this.props.id}
            </td>
            <td>
                <input type="checkbox" onChange={this.onChange} defaultChecked={this.state.isCompleted} />
            </td>
            <td>
                <label className={this.state.isCompleted ? "complete" : "incomplete"}>
                    {this.props.description}
                </label>
            </td>
            <td>
                {showLink()}
            </td>
            <td>
                <Link to={"../" + this.props.id + "/edit"} className="edit">Edit</Link>
            </td>
            <td>
                <button onClick={this.onDelete} className="delete">Delete</button>
            </td>
        </tr>;
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