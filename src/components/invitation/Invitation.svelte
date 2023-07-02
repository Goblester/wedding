<script lang="ts">
    import Heart from "../icons/HeartIcon.svelte";
</script>
<section class="container">
    <h2>Привет!</h2>
    <p class="invText">Мы приглашаем вас на нашу свадьбу</p>
    <div class="couple">
        <div class="left">
            <div class="leftText">
                <p class="name">Даниил</p>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>
            <div class="imgContainer">
                <img src="src/assets/daniil.jpg" alt="daniil" class="image"/>
            </div>
        </div>
        <div class="heart" >
            <Heart />
        </div>
        <div class="right">
            <div class="rightText">
                <p class="name">Оля</p>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>

            <img src="src/assets/olya.jpg" alt="olga" class="image"/>
        </div>
    </div>
</section>

<style>
    .container {
        padding: 112px 0;
        height: 589px;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1140px;
        margin: 0 auto;
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

    .leftText {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 25px;
        text-align: right;
    }

    .rightText {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 25px;
    }

    .image {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }

    .name {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.2;
    }

    .description {
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 300;
        line-height: 1.7;
    }

    .heart {
        padding: 0 20px;
        height: 20px;
        margin-top: 65px;
        animation: pulse 1s ease infinite;
    }

    @keyframes pulse {
        from {
            transform: scale(1);
        }

        50% {
            transform: scale(1.3);
        }

        to {
            transform: scale(1);
        }
    }

</style>