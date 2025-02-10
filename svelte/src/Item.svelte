<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let todo;
</script>

<p>
    <input
        type="checkbox"
        checked={todo.isCompleted}
        on:change={() => dispatch("toggle")}
    />
    <span class:complete={todo.isCompleted}>{todo.description}</span>
    <button on:click={() => dispatch("delete")}>Delete</button>
</p>

<style>
</style>
