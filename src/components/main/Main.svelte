<script lang="ts">
    import Parallax from 'svelte-parallax/src/Parallax.svelte';
    import ParallaxLayer from 'svelte-parallax/src/ParallaxLayer.svelte';
    import StickyLayer from 'svelte-parallax/src/StickyLayer.svelte';
    import mainImg from './../../assets/main.jpg';
</script>

<section id="main" class="container" data-section="true">
    <Parallax sections={2} config={{stiffness: 0.2, damping: 0.3}}>
        <StickyLayer rate={0} span={1} style="z-index: -1">
            <div class="imageContainer">
                <img src={mainImg} alt="starring Olya and Danya" />
            </div>
        </StickyLayer>
        <ParallaxLayer rate={0} offset={0.6}>
            <div class="textContainer">
                <h1>Приглашение на свадьбу</h1>
                <div class="info">
                    <span class="place">Надеево<br/>Вологда</span>
                    <span class="names">Даниил и Ольга</span>
                    <span class="date">4 Августа<br/>2023</span>
                </div>
            </div>
        </ParallaxLayer>
    </Parallax>
</section>

<style>
    .container {
        overflow: hidden;
        position: relative;
        height: 100vh;
    }

    .imageContainer {
        position: relative;
        height: 100vh;
        width: 100%;
    }

    img {
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
    }

    .textContainer {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
    }

    h1 {
        font-size: 75px;
        margin-bottom: 20px;
        line-height: 1.3;
        font-family: Caveat, cursive;
        font-weight: 500;
    }

    .info {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .names {
        padding: 0 15px;
        font-family: Caveat, cursive;
        font-weight: 400;
        font-size: 40px;
        line-height: 43px;
    }

    .place {
        font-size: 16px;
        line-height: 170%;
        padding-right: 15px;
        text-align: right;
        border-right: 2px solid white;
    }

    .date {
        font-size: 16px;
        line-height: 170%;
        padding-left: 15px;
        text-align: left;
        border-left: 2px solid white;
    }

    @media (max-width: 768px) {

        h1 {
            font-size: 50px;
        }

        .names {
            padding: 0 10px;
            font-size: 28px;
        }

        .place {
            font-size: 14px;
            padding-right: 10px;
        }

        .date {
            font-size: 14px;
            padding-left: 10px;
        }
    }

    @media (max-width: 375px) {

        h1 {
            font-size: 36px;
        }


        .names {
            padding: 0 10px;
            font-size: 24px;
        }

        .place {
            padding-right: 10px;
        }

        .date {
            padding-left: 10px;
        }
    }
</style>