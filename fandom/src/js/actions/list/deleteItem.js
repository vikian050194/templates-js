import * as types from "../actionTypes";
import { createAction } from "../createAction";
import * as api from "api";

const onSuccess = (item) => createAction(types.DELETE_ITEM_SUCCESS)(item);
const onFail = (error) => createAction(types.DELETE_ITEM_ERROR)(error);

export const deleteItemAction = (id) => {
    return (dispatch, getState) => {
        const item = getState().items.find(i => i.id === id);
        api.deleteItem(item)
            .then(() => dispatch(onSuccess(item)))
            .catch(error => dispatch(onFail(error)));
    };
};