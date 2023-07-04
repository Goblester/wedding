<script lang="ts">
    import Modal from "../modal/Modal.svelte";
    import {modal} from "../../store/modal";

    $: isOpen = $modal === 'contacts';

    const onClose = () => modal.set(null);
</script>

<Modal isOpen={isOpen}>
    <div class="container">
        <button class="closeBtn" aria-label="Close button" on:click={onClose}></button>
    </div>
</Modal>

<style>
    .container {
        background-color: white;
        border-radius: 8px;
        width: 500px;
        height: 600px;
    }

    .closeBtn {
        border: none;
        border-radius: 50%;
        outline: transparent;
        position: absolute;
        top: 16px;
        right: 16px;
        height: 34px;
        width: 34px;
        transition: .2s all;
        background-color: rgba(166, 166, 166, 0);
    }

    .closeBtn:hover {
        background-color: rgba(166, 166, 166, .1);
    }

    .closeBtn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        background-color: rgb(166, 166, 166);
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .closeBtn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 2px;
        height: 20px;
        background-color: rgb(166, 166, 166);
        transform: translate(-50%, -50%) rotate(-45deg);
    }
</style>