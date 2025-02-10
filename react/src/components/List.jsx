import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import LinkButton from "./LinkButton";
import { withRouter } from "./withRouter";

class List extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);

        this.state = {
            items: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        fetch("/api/list/")
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }

                return response.json();
            })
            .then((items) => {
                this.setState({ items, isLoading: false });
            });
    }

    render() {
        const createItem = (item) => {
            return (<Item key={item.id} {...item} onDelete={this.onDelete} />);
        };

        const filter = () => {
            let items = this.state.items;

            if (this.props.params.id) {
                items = [items.find((i) => i.id === this.props.params.id)];
            }

            const renderInShowMode = !isNaN(this.props.params.id);

            items.forEach((i) => {
                i.renderInShowMode = renderInShowMode;
            }, this);

            return items.map(createItem, this);
        };

        const renderItems = () => {
            if (this.state.isLoading) {
                return <h1>Loading...</h1>;
            } else {
                return filter();
            }
        };

        return (
            <div>
                {renderItems()}
                <LinkButton text="New" to="new" />
            </div>);
    }

    onDelete(id) {
        const newItemsList = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItemsList });
    }
}

List.propTypes = {
    params: PropTypes.object.isRequired
};

export default withRouter(List);