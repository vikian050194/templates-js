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

    model = (couturier) => {
        const state = this.store.getState();

        couturier.div({ class: "list" });

        couturier.h1().text(state.title).close();

        for (let item of state.items) {
            const props = { ...item, onClick: this.onItemClick };
            const cm = new Item(props);
            cm.model(couturier);
        }

        couturier.close();
    };
}
