<script>
    import Heart from "../icons/HeartIcon.svelte";
    import daniilImg from '../../assets/daniil.jpeg';
    import olgaImg from '../../assets/olga.jpg';

</script>
<section>
    <div id="invitation" class="container" data-section="true">
        <h2>Привет!</h2>
        <p class="invText">Мы приглашаем вас на нашу свадьбу</p>
        <p class="description">
            На нашей свадьбе не будет фотографа, поэтому будем рады, если вы поснимаете нас на телефон! А мы посмотрим
            на свадьбу глазами дорогих гостей :)
        </p>
        <p class="description">
            Дресс-код расслабленный: не нужны официальные костюмы, каблуки и черный цвет. Выберите что-то удобное и
            веселенькое! Синие джинсы лучше оставьте на второй день ;) В любом случае надевайте то, что вам нравится, мы
            не обидимся
        </p>
        <p class="description last">
            Мы сейчас копим на квартиру и будем рады, если вы нам в этом поможете! Но если вы уже придумали другой
            подарок — обязательно дарите, нам будет очень приятно!
        </p>
        <div class="couple">
            <div class="left">
                <div class="leftText">
                    <p class="name">Даниил</p>
                </div>
                <div class="imgContainer">
                    <img src={daniilImg} alt="daniil" class="image"/>
                </div>
            </div>
            <div class="heart">
                <Heart/>
            </div>
            <div class="right">
                <div class="rightText">
                    <p class="name">Ольга</p>
                </div>
                <img src={olgaImg} alt="olga" class="image"/>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background-color: white;
        width: 100%;
    }

    .container {
        padding: 112px 0;
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
        margin-bottom: 20px;
    }

    .description {
        text-align: center;
        max-width: 750px;
        font-weight: 500;
        font-size: 18px;
        border-bottom: 1px solid black;
        padding: 6px 12px;
    }

    .last {
        margin-bottom: 40px;
        border: none;
    }

    .couple {
        display: flex;
        justify-content: center;
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
        align-items: center;
        justify-content: center;
        margin-right: 25px;
        text-align: right;
    }

    .rightText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

    @media (max-width: 769px) {

        .description {
            width: 80%;
        }

        .container {
            padding: 60px 0;
        }

        .invText {
            margin-bottom: 40px;
        }

        .couple {
            display: flex;
            flex-direction: column;
            width: 80%;
        }


        .heart {
            display: none;
        }

        .left, .right {
            flex-direction: column-reverse;
            align-items: center;
        }

        .left {
            margin-bottom: 40px;
        }

        .leftText, .rightText {
            align-items: center;
            text-align: center;
            margin-left: 0;
            margin-right: 0;
        }

        .name {
            margin-top: 15px;
        }
    }

</style>