import { ItemModel } from "models";
import { types } from "actions";

const defaultState = [];

export const listReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        case types.TOGGLE_LIST_ITEM: {
            const item = previousState.find(({ id }) => action.value === id);
            const index = previousState.indexOf(item);
            const prev = previousState.slice(0, index);
            const next = previousState.slice(index + 1);
            const updatedItem = new ItemModel(item.id, item.description, !item.isCompleted);
            const updatedItems = [
                ...prev,
                updatedItem,
                ...next
            ];
            return updatedItems;
        }
        case types.FETCH_LIST_SUCCESS: {
            const items = action.value.map(i => new ItemModel(i.id, i.description, i.isCompleted));
            return items;
        }
        default:
            return previousState;
    }
};