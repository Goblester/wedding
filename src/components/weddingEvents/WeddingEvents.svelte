<script lang="ts">
    import {ACCORDION_IMAGES} from "../../constants";
    import LocationIcon from "../icons/LocationIcon.svelte";
    import {ACCORDION_DATA} from "../../constants";
    import {slide} from "svelte/transition";
    import {cubicInOut} from 'svelte/easing';

    let currentIndex = 0;

    const scrolling = (
        _,
        {duration, move},
    ) => ({
        duration,
        css: (t: number) =>
            `transform: translateY(${move === 'out' ? '-' : ''}${100 - cubicInOut(t) * 100}%);`,
    });

</script>

<div id="events" class="container" data-section="true">
    <p class="special">OUR SPECIAL EVENTS</p>
    <h2>Wedding events</h2>
    <p class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam</p>
    <div class="accordionPanel">
        <div class="imgContainer">
        {#each ACCORDION_IMAGES as image, index}
                {#if index === currentIndex}
                    <img class="accImage"
                         in:scrolling={{duration: 300, move: 'in'}}
                         out:scrolling={{duration: 300, move: 'out'}}
                         src={image}
                         alt="wedding event" />
                {/if}
        {/each}
        </div>
        <div class="rightContainer">
            <h3>4 Августа, 2023 Вологда, Россия</h3>
            <div class="textContainer">
                {#each ACCORDION_DATA as accItem, index}
                    <div class="textItemContainer">
                        <button type="button" on:click={() =>{
                            currentIndex = index;
                        }}>{accItem.time}</button>
                        {#if currentIndex === index}
                            <div class="accordion" transition:slide={{duration: 300}}>
                                <span class="location"><LocationIcon/>{accItem.location}</span>
                                <p class="eventDesc">{accItem.description}</p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>

    .container {
        background-color: cornsilk;
        text-align: center;
        padding: 112px 0;
    }

    .special {
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
    }

    .desc {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        line-height: 1.5;
    }

    .accordionPanel {
        margin-top: 80px;
        width: 936px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        gap: 24px;
    }

    .imgContainer {
        position: relative;
        width: 50%;
        overflow: hidden;
        height: 600px;
    }

    .accImage {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .rightContainer {
        width: 50%;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    .textItemContainer {
        display: flex;
        flex-direction: column;
    }

    button {
        width: 100%;
        padding: 10px 15px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        background-color: #e9e9e9;
        border: transparent;
        outline: transparent;
        text-align: left;
        color: #000;
        font-weight: 600;
        font-size: 16px;
        margin-top: 5px;
    }

    .eventDesc {
        text-align: left;
        font-weight: 300;
        padding: 0 15px 5px;
        font-size: 16px;
        line-height: 1.7;
    }

    .location {
        text-align: left;
        font-weight: 300;
        padding: 5px 15px 0;
        line-height: 2;
        font-size: 16px;
    }

    .accordion {
        display: flex;
        flex-direction: column;
    }

</style>