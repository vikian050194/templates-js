import { Builder } from "fandom";

import Item from "./Item";
import { fetchItemsAction, toggleItemAction, deleteItemAction } from "actions";

export class ItemsList {
    constructor(dispatch) {
        this.builder = new Builder();
        this.dispatch = dispatch;
        dispatch(fetchItemsAction());
    }

    describe(items) {
        const onToggle = (id) => this.dispatch(toggleItemAction(id));
        const onDelete = (id) => this.dispatch(deleteItemAction(id));

        for (let item of items) {
            const props = { ...item, onToggle, onDelete };
            const i = new Item();
            const im = i.describe(props);
            this.builder.push(im);
        }

        return this.builder.done();
    }
}
