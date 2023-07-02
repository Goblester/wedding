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
    <h2>The big day<br/>
        4 . August . 2023</h2>
    <p class="excitedText">We are so excited to celebrate our special day with our family and friends. Thank you so much
        for visiting our
        wedding website!</p>
    <div class="bottomContainer">
        <span class="sideText">Just some hours...</span>

        <div class="timerContainer">
            <div class="dateItem">
                <span class="dateValue">{days < 10 ? `0${days}` : days}</span>
                <span class="dateName">DAYS</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{hours < 10 ? `0${hours}` : hours}</span>
                <span class="dateName">HOURS</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{minutes < 10 ? `0${minutes}` : minutes}</span>
                <span class="dateName">MINUTES</span>
            </div>
            <div class="dateItem">
                <span class="dateValue">{seconds < 10 ? `0${seconds}` : seconds}</span>
                <span class="dateName">SECONDS</span>
            </div>
        </div>
        <span class="sideText">...until we get married!</span>
    </div>
</section>

<style>
    .container {
        /*background-image: url(../images/countdown-bg.jpg);*/
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        background-position: center center;
        width: 100%;
        padding: 7em 0;
        background-color: darkgrey;
        text-align: center;
        color: white;
    }

    .excitedText {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        line-height: 1.5;
        color: white;
        font-weight: 300;
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
        font-family: "Great Vibes", cursive;
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
</style>