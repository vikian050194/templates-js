import {
    combineReducers,
    listReducer
} from "reducers";
import {
    applyMiddleware,
    logger,
    thunk
} from "middlewares";
// import { compose } from "utils";
import { createAction, types } from "actions";
import { createStore } from "./createStore";

const defaultState = {
    title: "",
    items: []
};

export const configureStore = (initialState = {}) => {
    const reducer = combineReducers({
        items: listReducer
    });
    const state = { ...defaultState, ...initialState };

    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const enhanser = composeEnhancers(
    //     applyMiddleware(
    //         thunk,
    //         logger
    //     )
    // );
    const enhanser = applyMiddleware(
        logger,
        thunk
    );
    // const enhanser = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(reducer, state, enhanser);

    store.dispatch(createAction(types.APP_INIT)());

    return store;
};