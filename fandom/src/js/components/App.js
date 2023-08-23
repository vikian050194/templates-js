import { Builder, replace, convert } from "fandom";
import { ItemsList } from "./ItemsList";
import { configureStore } from "store";

const App = (rootSelector) => {
    const root = document.querySelector(rootSelector);

    var initialState = {
        title: "default title",
        items: []
    };

    const store = configureStore(initialState);

    const components = {
        items: new ItemsList(store.dispatch)
    };

    const builder = new Builder();

    for (const key in components) {
        builder.div({ id: key }).close();
    }

    const containers = builder.done();
    const domElements = convert(containers);

    replace(root, domElements);

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