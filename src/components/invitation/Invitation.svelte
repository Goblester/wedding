<script lang="ts">
    import Heart from "../icons/Heart.svelte";
</script>
<section class="container">
    <h2>Hello</h2>
    <p class="invText">We invite you to celebrate our wedding</p>
    <div class="couple">
        <div class="left">
            <p>Даниил</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div class="imgContainer">
                <img src="src/assets/daniil.jpg" alt="daniil" class="image"/>
            </div>
        </div>
        <Heart/>
        <div class="right">
            <p>Оля</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <div class="imgContainer">
                <img src="src/assets/olya.jpg" alt="olga" class="image"/>
            </div>
        </div>
    </div>
</section>

<style>
    .container {
        padding: 112px 0;
        height: 589px;
        background-color: cadetblue;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin-bottom: 10px;
        line-height: 1.5;
        font-family: "Great Vibes", cursive;
        font-size: 50px;
        color: #000;
    }

    .invText {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 80px;
    }

    .couple {
        display: flex;
    }

    .left, .right {
        display: flex;
    }

    .right {
        flex-direction: row-reverse;
    }

    .imgContainer {

    }

    .image {
        height: 150px;
        width: 150px;
    }
</style>