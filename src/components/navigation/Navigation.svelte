<script>
    import {slide} from "svelte/transition";
    import CloseIcon from "../icons/CloseIcon.svelte";
    import MenuIcon from "../icons/MenuIcon.svelte";
    import {NAV_LINKS} from "../../constants";
    import {currentSection} from "../../store/currentSection";

    export let fixed = false
    let isMenuOpened = false;
    let width;
    $: isMobile = width < 769;
</script>

{#if isMobile}
    <button on:click={() => {isMenuOpened = !isMenuOpened}}>
        {#if isMenuOpened }
            <CloseIcon color={fixed ? '#000000' : '#ffffff'}/>
        {:else}
            <MenuIcon color={fixed ? '#000000' : '#ffffff'}/>
        {/if}
    </button>
    {#if isMenuOpened}
        <nav class:fixed class="mobile" transition:slide>
            <ul class="links">
                {#each NAV_LINKS as link}
                    <button class:active={link.href.includes($currentSection)} on:click={()=> {isMenuOpened = false}}>
                        <a href={link.href}>{link.title}</a>
                    </button>
                {/each}
            </ul>
        </nav>
    {/if}

{:else}
    <nav class:fixed>
        <ul class="links">
            {#each NAV_LINKS as link}
                <li class:active={link.href.includes($currentSection)}>
                    <a href={link.href}>{link.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
{/if}


<svelte:window bind:innerWidth={width}/>

<style>
    button {
        outline: transparent;
        border: none;
        padding: 8px;
        background-color: transparent;
    }

    .mobile {
        display: block;
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: transparent;
        z-index: 2;
        transition: all .1s;
    }

    .mobile.fixed {
        background-color: white;
        border-bottom: 1px solid rgb(206, 212, 218);
    }

    .mobile .links {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .mobile a {
        font-size: 22px;
        padding: 12px 16px;
    }


    .links {
        display: flex;
        list-style: none;
    }

    a {
        display: block;
        list-style: none;
        padding: 8px 16px;
        font-size: 16px;
        text-decoration: none;
    }

    nav a {
        color: white;
    }

    .fixed a {
        color: black;
    }

    .active {
        border-bottom: 1px solid;
        border-color: white;
    }

    .fixed .active {
        border-color: black;
    }
</style>