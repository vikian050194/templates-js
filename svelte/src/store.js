import { writable } from "svelte/store";

const createTodoStore = () => {
    let todos = [""];
    const { subscribe, update, set } = writable(todos);

    return {
        set,
        subscribe,
        addItem: () => update(() => todos = [...todos, ""]),
        removeItem: (index) => update(() => todos = [...todos.slice(0, index), ...todos.slice(index + 1)])
    };
};

export const todoStore = createTodoStore();