import Item from "./Item";
import { fetchItemsAction, toggleItemAction } from "../actions";

export class ItemsList {
    constructor(store) {
        this.store = store;

        store.dispatch(fetchItemsAction());
    }

    onItemClick = (targetItemId) => {
        this.store.dispatch(toggleItemAction(targetItemId));
    };

    model = (builder) => {
        const state = this.store.getState();

        builder.div({ class: "list" });

        builder.h1().text(state.title).close();

        for (let item of state.items) {
            const props = { ...item, onClick: this.onItemClick };
            const cm = new Item(props);
            cm.model(builder);
        }

        builder.close();
    };
}
