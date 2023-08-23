import { Builder } from "fandom";

import Item from "./Item";
import { fetchItemsAction, toggleItemAction } from "actions";

export class ItemsList {
    constructor(dispatch) {
        this.builder = new Builder();
        this.dispatch = dispatch;
        dispatch(fetchItemsAction());
    }

    describe(items) {
        const onClick = (id) => this.dispatch(toggleItemAction(id));

        for (let item of items) {
            const props = { ...item, onClick };
            const i = new Item();
            const im = i.describe(props);
            this.builder.push(im);
        }

        return this.builder.done();
    }
}
