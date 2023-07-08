<script>
    import Navigation from "../navigation/Navigation.svelte";

    let y;

    $: fixed = y > 56;
</script>

<header class="header" class:fixed>
    <div class="logo">Д + О</div>
    <Navigation fixed={fixed} />
</header>

<svelte:window bind:scrollY={y} />

<style>
    .header {
        position: absolute;
        width: 100%;
        height: 56px;
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        color: white;
        background-color: transparent;
        transition: all .1s;
    }

    .fixed {
        position: fixed;
        background-color: white;
        color: black;
        border-bottom: 1px solid rgb(206, 212, 218);
    }

    .logo {
        margin-left: 34px;
        font-size: 28px;
        font-family: 'Caveat', cursive;
        font-weight: 500;
    }

    @media(max-width: 769px) {
        .logo {
            margin-left: 8px;
        }
    }
</style>