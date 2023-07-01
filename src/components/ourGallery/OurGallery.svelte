<script lang="ts">
    import FilterGallery from "../../features/filterGallery/FilterGallery.svelte";
</script>

<section>
    <span class="memories">OUR MEMORIES</span>
    <h2>Wedding gallery</h2>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    <FilterGallery />
</section>

<style>
    section {
        padding-top: 112px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 112px;
    }

    .memories {
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
    }

    h2 {
        margin-bottom: 10px;
        line-height: 1.5;
        font-family: "Great Vibes", cursive;
        font-size: 50px;
        color: #000;
    }

    .description {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 80px;
    }
</style>