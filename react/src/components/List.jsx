import React from "react";

import Item from "./Item";
import NewItemButton from "./NewItemButton";

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
        this.setState({ isLoading: true });

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
            // eslint-disable-next-line react/prop-types
            const targetId = this.props.match.params.id;

            if (targetId) {
                items = [items.find((i) => i.id === targetId)];
            }

            const renderInShowMode = !isNaN(targetId);

            items.forEach((i) => {
                i.renderInShowMode = renderInShowMode;
            }, this);

            return items.map(createItem, this);
        };

        const renderItems = () => {
            if (this.state.isLoading) {
                return <h1>Loading...</h1>;
            } else {
                return <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th></th>
                            <th>Description</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter()}
                    </tbody>
                </table>;
            }
        };

        return (
            <div>
                <NewItemButton />
                <hr />
                {renderItems()}
            </div>);
    }

    onDelete(id) {
        const newItemsList = this.state.items.filter(item => item.id !== id);
        this.setState({ items: newItemsList });
    }
}

export default List;