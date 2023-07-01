<script lang="ts">
    import Gallery from "../../components/gallery/Gallery.svelte";
    import {GALLERY_IMAGES, GALLERY_TABS} from "../../constants";

    let currentTab = 'all';

    $: filteredImages = GALLERY_IMAGES.filter(image => currentTab === 'all' || image.category === currentTab);
</script>

<div class="tabs">
    {#each GALLERY_TABS as tab}
        <button class="tabItem" class:active={currentTab === tab} on:click={() =>{currentTab = tab}}>{tab}</button>
    {/each}
</div>
<div class="container">
    <Gallery maxColumnWidth="200">
        {#each filteredImages as image}
            <img src={image.src} alt="" />
        {/each}
    </Gallery>
</div>


<style>
    .tabs {
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;
        margin: 0 10px 50px;
    }

    .tabItem {
        border: none;
        background: none;
        padding: 0 10px 10px;
        border-bottom: 2px solid transparent;
        font-size: 14px;
        text-transform: uppercase;
        outline: none;
    }

    .active {
        border-bottom: 2px solid #000;
    }

    .container {
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
</style>