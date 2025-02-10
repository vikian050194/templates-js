import { Builder, replace, convert } from "fandom";
import { ItemsList } from "./ItemsList";
import { configureStore } from "store";
import { throttle, LocalStorage } from "utils";

const App = ($root) => {
    var initialState = {
        items: []
    };
    const persistedState = LocalStorage.get("state");
    const store = configureStore({...initialState, ...persistedState});

    store.subscribe(throttle(() => {
        const { items } = store.getState();
        LocalStorage.set("state", { items });
    }, 1000));

    const components = {
        items: new ItemsList(store.dispatch)
    };

    const builder = new Builder();

    for (const key in components) {
        builder.div({ id: key }).close();
    }

    const containers = builder.done();
    const domElements = convert(containers);

    replace($root, domElements);

    const storeSnapshot = store.getState();

    const onUpdate = (currentState) => {
        for (const key in components) {
            const substate = currentState[key];
            const model = components[key].describe(substate);
            const elements = convert(model);
            replace(document.getElementById(key), elements);
        }
    };

    store.subscribe(onUpdate);

    onUpdate(storeSnapshot);
};

export default App;