<script>
    import { todoStore } from "./store.js";
    import Item from "./Item.svelte";

    let lastId = 0;

    const createTodo = (text, done = false) => ({
        id: ++lastId,
        description: text,
        isCompleted: done,
    });

    let todoText = "";

    let todos = [
        createTodo("learn Svelte", true),
        createTodo("build a Svelte app"),
    ];

    const addTodo = () => {
        todos.push(createTodo(todoText));
        todos = todos;
        todoText = "";
        isAddingState = false;
    };

    const deleteTodo = (todoId) =>
        (todos = todos.filter((t) => t.id !== todoId));

    const toggleDone = (todo) => {
        const { id } = todo;
        todos = todos.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
        );
    };

    let isAddingState = false;
</script>

<div>
    {#each todos as todo}
        <Item
            {todo}
            on:delete={() => deleteTodo(todo.id)}
            on:toggle={() => toggleDone(todo)}
        />
    {/each}
    {#if isAddingState}
        <form on:submit|preventDefault={addTodo}>
            <input bind:value={todoText} />
            <button disabled={!todoText}>Add</button>
        </form>
    {:else}
        <button on:click={() => isAddingState = true}>New</button>
    {/if}
</div>
