import { TreeBuilder, TreeConverter } from "fandom";
import { ItemsList } from "./ItemsList";
import { configureStore } from "../store";

const App = (rootSelector) => {
    const $root = document.querySelector(rootSelector);

    // var initialState = {
    //     items: []
    // };

    const store = configureStore();

    const list = new ItemsList(store);
    const builder = new TreeBuilder();
    const converter = new TreeConverter();

    const re = () => {
        while ($root.firstChild) {
            $root.removeChild($root.lastChild);
        }

        list.model(builder);

        const listModel = builder.build();

        const listNode = converter.convert(listModel)[0];

        $root.appendChild(listNode);
    };

    store.subscribe(re);
};

export default App;