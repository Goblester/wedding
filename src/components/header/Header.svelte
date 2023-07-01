<script>

    import {NAV_LINKS} from "../../constants";
    import {currentSection} from "../../store/currentSection";

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
        background-color: transparent;
        transition: all .1s;
    }



    .fixed {
        position: fixed;
        background-color: white;
        color: black;
        border-bottom: 1px solid  rgb(206, 212, 218);
    }

    .logo {
        margin-left: 34px;
        font-size: 28px;
        font-family: Caveat, cursive;
        font-weight: 700;
    }

    .links {
        display: flex;
        list-style: none;
    }

    .links a {
        list-style: none;
        padding: 8px 16px;
        font-size: 16px;
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