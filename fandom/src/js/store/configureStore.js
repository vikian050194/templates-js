import {
    combineReducers,
    listReducer
} from "reducers";
import {
    applyMiddleware,
    logger,
    thunk
} from "middlewares";
import { createAction, types } from "actions";
import { createStore } from "./createStore";

const defaultState = {
    items: []
};

export const configureStore = (initialState = {}) => {
    const reducer = combineReducers({
        items: listReducer
    });
    const state = { ...defaultState, ...initialState };
    const middlewares = [
        thunk,
        logger
    ];

    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const enhancer = composeEnhancers(
    //     applyMiddleware(...middlewares)
    // );
    const enhancer = applyMiddleware(...middlewares);
    // simple following dev tool based enhancer is not compatible with thunk
    // const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(reducer, state, enhancer);

    store.dispatch(createAction(types.APP_INIT)());

    return store;
};