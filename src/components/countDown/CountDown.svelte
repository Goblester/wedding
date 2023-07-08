<script>


    import {onMount} from "svelte";

    let currentDate = new Date();
    $: finalDate = new Date('August 4, 2023 12:00:00');
    $: differenceDate = new Date(finalDate - currentDate);
    const day = 1000 * 60 * 60 * 24;
    const hour = day / 24;
    const minute = hour / 60;
    const second = minute / 60;
    $: days = Math.floor(differenceDate / day);
    $: hours = Math.floor(differenceDate % day / hour);
    $: minutes = Math.floor(differenceDate % hour / minute);
    $: seconds = Math.floor(differenceDate % minute / second);

    onMount(() => {
        setInterval(() => {
            currentDate = new Date();
        }, 1000);

    })
</script>

<section class="container">
    <h2>День свадьбы<br/>
        4 . Августа . 2023</h2>
    <p class="excitedText">
        Мы очень рады отпраздновать этот особый день в кругу семьи и близких друзей!
    </p>
    <div class="bottomContainer">
        <span class="sideText">Всего несколько часов</span>

        <div class="timerContainer">
            <div class="dateItem">
                <span class="dateValue">{days < 10 ? `0${days}` : days}</span>
                <span class="dateName">ДНЕЙ</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{hours < 10 ? `0${hours}` : hours}</span>
                <span class="dateName">ЧАСОВ</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{minutes < 10 ? `0${minutes}` : minutes}</span>
                <span class="dateName">МИНУТ</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{seconds < 10 ? `0${seconds}` : seconds}</span>
                <span class="dateName">СЕКУНД</span>
            </div>
        </div>
        <span class="sideText">...до того как мы поженимся!</span>
    </div>
</section>

<style>
    .container {
        position: relative;
        width: 100%;
        padding: 112px 20px;
        text-align: center;
        color: white;
    }

    h2 {
        color: white;
    }

    .excitedText {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        line-height: 1.5;
        color: white;
        font-weight: 700;
    }

    .bottomContainer {
        margin-top: 144px;
        margin-left: auto;
        margin-right: auto;
        max-width: 1160px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }

    .sideText {
        font-family: 'Caveat', cursive;
        font-size: 34px;
    }

    .timerContainer {
        display: flex;
    }

    .dateItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
    }

    .dateValue {
        font-size: 47px;
        line-height: 40px;
    }

    .dateName {
        font-size: 14px;
        opacity: .7;
    }

    @media (max-width: 769px) {
        .container {
            padding: 60px 0;
        }

        .bottomContainer {
            margin-top: 60px;
            flex-direction: column;
        }

        .dateValue {
            font-size: 42px;
        }

        .dateName {
            font-size: 12px;
        }
    }

    @media (max-width: 425px) {
        .dateItem {
            width: 75px;
        }

        .sideText {
            font-size: 29px;
        }
    }
</style>