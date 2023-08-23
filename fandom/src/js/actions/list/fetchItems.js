import * as types from "../actionTypes";
import { createAction } from "../createAction";
import * as api from "api";

const onSuccess = (arena) => createAction(types.FETCH_LIST_SUCCESS)(arena);
const onFail = (error) => createAction(types.FETCH_LIST_ERROR)(error);

export const fetchItemsAction = () => {
    return dispatch =>
        api.getItems()
            .then(response => dispatch(onSuccess(response)))
            .catch(error => dispatch(onFail(error)));
};
