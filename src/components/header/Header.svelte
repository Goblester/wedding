<script lang="ts">

    import {NAV_LINKS} from "../../constants/index.js";
    import {currentSection} from "../../store/currentSection/index.js";

    let y;
    $: fixed = y > 56;
</script>

<header class="header" class:fixed>
    <div class="logo">O х Д</div>
    <nav >
        <ul class="links">
            {#each NAV_LINKS as link}
                <li  class:active={link.href.includes($currentSection)}>
                    <a href={link.href}>{link.title}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>

<svelte:window bind:scrollY={y}/>

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
    }



    .fixed {
        position: fixed;
        background-color: white;
        color: black;
    }

    .logo {
        margin-left: 34px;
        font-size: 28px;
        font-family: Lobster, cursive;
    }

    .links {
        display: flex;
        list-style: none;
    }

    .links a {
        list-style: none;
        padding: 8px 16px;
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;
    }

    .header a {
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