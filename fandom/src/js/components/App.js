import { Couturier, replace, convert } from "fandom";
import { ItemsList } from "./ItemsList";
import { configureStore } from "../store";

const App = (rootSelector) => {
    const root = document.querySelector(rootSelector);

    // var initialState = {
    //     items: []
    // };

    const store = configureStore();

    const list = new ItemsList(store);
    const couturier = new Couturier();

    const re = () => {
        while (root.firstChild) {
            root.removeChild(root.lastChild);
        }

        list.model(couturier);

        const listModel = couturier.done();

        const domElements = convert(listModel);

        replace(root, domElements);
    };

    store.subscribe(re);
};

export default App;