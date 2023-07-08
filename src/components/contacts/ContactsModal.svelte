<script lang="ts">
    import Modal from "../modal/Modal.svelte";
    import {modal} from "../../store/modal";
    import QuizIcon from "../icons/QuizIcon.svelte";

    $: isOpen = $modal === 'contacts';

    const onClose = () => modal.set(null);
</script>

<Modal isOpen={isOpen}>
    <div class="container">
        <button class="closeBtn" aria-label="Close button" on:click={onClose}></button>
        <div class="description">
            <div class="iconContainer">
                <QuizIcon />
            </div>
            <p>Пожалуйста, пройдите опрос и помогите нам все правильно организовать!</p>
            <a class="quizBtn" target="_blank" on:click={onClose} href="https://docs.google.com/forms/u/0/d/1veLfqbBfKjfAVuEgoXmebgOTSszeTgukF7M6Vb-xWtI/viewform?edit_requested=true">
                Принять участие
            </a>
        </div>

    </div>

</Modal>

<style>
    .container {
        background-color: white;
        border-radius: 8px;
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 400px) {
        .container {
            width: 300px;
        }
    }

    p {
        margin-top: 10px;
        font-weight: 700;
        font-size: 18px;
        padding: 0 20px;
    }

    .description {
        padding: 0 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 40px;
    }

    .iconContainer {
        margin-top: 40px;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .iconContainer::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba(133, 210, 133, 0.3);
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


    .quizBtn {
        margin-top: 20px;
        padding: 14px 42px;
        font-size: 1.25rem;
        text-transform: capitalize;
        color: #212529;
        border-radius: 8px;
        background-color: rgba(33,37, 41, 0);
        border: 1px solid #212529;
        transition: all 0.25s;
        text-decoration: none;
    }

    .quizBtn:hover {
        color: white;
        background-color: rgba(33,37, 41, 100);
        border: 1px solid white;
    }

</style>