import * as types from "../actionTypes";
import { createAction } from "../createAction";
import * as api from "api";
import { fetchItemsAction } from "./fetchItems";

const onSuccess = (data) => createAction(types.UPDATE_ITEM_SUCCESS)(data);
const onFail = (error) => createAction(types.UPDATE_ITEM_ERROR)(error);

export const updateItemAction = (item) => {
    return dispatch =>
        api.updateItem(item)
            .then(response => dispatch(onSuccess(response)))
            .catch(error => dispatch(onFail(error)));
};

export const toggleItemAction = (id) => {
    return (dispatch, getState) => {
        const item = getState().items.find(i => i.id === id);
        item.isCompleted = !item.isCompleted;
        api.updateItem(item)
            .then(() => dispatch(fetchItemsAction()))
            .catch(error => dispatch(onFail(error)));
    };
};