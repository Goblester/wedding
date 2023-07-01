<script lang="ts">
    import Parallax from 'svelte-parallax/src/Parallax.svelte';
    import ParallaxLayer from 'svelte-parallax/src/ParallaxLayer.svelte';
    import mainImg from './../../assets/main.jpg';
</script>

<section class="container">
    <Parallax sections={3} config={{stiffness: 0.2, damping: 0.3}}>
        <ParallaxLayer rate={0} span={3}>
            <div class="imageContainer">
                <img src={mainImg} alt="starring Olya and Danya" />
            </div>
        </ParallaxLayer>
        <ParallaxLayer rate={1} offset={0.5}>
            <div class="textContainer">
                <h1>Save the date</h1>
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
        height: 100%;
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
        font-size: 150px;
        margin-bottom: 20px;
        line-height: 1.3;
        /*font-family: "Amatic SC", cursive;*/
        font-weight: 700;
    }

    .info {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info span {
        padding: 0 15px;
        font-size: 16px;
        line-height: 170%;
    }

    .info .names {
        font-family: "Great Vibes", cursive;
        font-size: 40px;
        line-height: 43px;
    }

    .place {
        text-align: right;
        border-right: 2px solid white;
    }

    .date {
        text-align: left;
        border-left: 2px solid white;
    }
</style>