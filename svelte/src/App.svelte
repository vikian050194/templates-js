<script>
    import { todoStore } from "./store.js";
</script>

<h1>Svelte Web App</h1>

{#each $todoStore as todo, index}
    <p>
        <input bind:value={todo} />
        <button on:click={() => todoStore.removeItem(index)}>Delete</button>
    </p>
{/each}

<button on:click={todoStore.addItem}>New</button>
