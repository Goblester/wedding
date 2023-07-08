<script>
    import {ACCORDION_IMAGES} from "../../constants";
    import LocationIcon from "../icons/LocationIcon.svelte";
    import {ACCORDION_DATA} from "../../constants";
    import {slide} from "svelte/transition";
    import {cubicInOut} from 'svelte/easing';

    let currentIndex = 0;
    let direction = 'down'

    const scrolling = (
        _,
        {duration, move},
    ) => ({
        duration,
        css: (t) =>
            `transform: translateY(${
                direction === 'up' ?
                    move === 'out' ? '' : '-'
                    : move === 'out' ? '-' : ''}${100 - cubicInOut(t) * 100}%);`,
    });

</script>

<div id="events" class="container" data-section="true">
    <p class="special">ОСОБЫЕ СОБЫТИЯ</p>
    <h2>Наше расписание</h2>
    <div class="accordionPanel">
        <div class="imgContainer">
            {#each ACCORDION_IMAGES as image, index}
                {#if index === currentIndex}
                    <div class="accImage"
                         in:scrolling={{duration: 300, move: 'in'}}
                         out:scrolling={{duration: 300, move: 'out'}}
                    >
                        <img src={image} alt="wedding event"/>
                    </div>

                {/if}
            {/each}
        </div>
        <div class="rightContainer">
            <h3>4 Августа, 2023 Вологда, Россия</h3>
            <div class="textContainer">
                {#each ACCORDION_DATA as accItem, index}
                    <div class="textItemContainer">
                        <button type="button" on:click={() =>{
                            direction = currentIndex < index ? 'up': 'down';
                            currentIndex = index;
                        }}>{accItem.time}</button>
                        {#if currentIndex === index}
                            <div class="accordion" transition:slide|global={{duration: 300}}>
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
        background-color: white;
        text-align: center;
        padding-top: 112px;
    }

    .special {
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
    }

    .accordionPanel {
        margin-top: 80px;
        max-width: 936px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .imgContainer {
        position: relative;
        width: calc(50% - 12px);
        overflow: hidden;
        height: 600px;
    }


    .rightContainer {
        width: calc(50% - 12px);
    }

    .accImage {
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: auto;
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

    @media (max-width: 937px) {
        .container {
            padding: 60px 20px 0;
        }

        .accordionPanel {
            margin-top: 40px;
        }

        .rightContainer {
            width: 100%;
        }

        .imgContainer {
            width: 100%;
        }
    }

    @media (max-width: 500px) {
        .imgContainer {
            height: 374px;
        }
    }

</style>