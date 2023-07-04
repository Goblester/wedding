<script>
    import {fade} from "svelte/transition";

    export let isOpen = false;
</script>
{#if isOpen}
    <div class="modal" transition:fade={{duration: 300}}>
        <slot/>
    </div>
    <div class="overlay" transition:fade={{duration: 300}}></div>
{/if}
<style>
    .overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, .5);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
</style>