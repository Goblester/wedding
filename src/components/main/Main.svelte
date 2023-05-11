<main class="container">
    <div class="textContainer">
        <h1>Save the date</h1>
        <div class="info">
            <span class="place">Вологда<br/>Россия</span>
            <span class="names">Даниил и Ольга</span>
            <span class="date">6 Августа<br/>2023</span>
        </div>
    </div>
</main>

<style>
    .container {
        height: 100vh;
        background-color: chocolate;
        padding-bottom: 80px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    .textContainer {
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
        font-size: 40px;
        line-height: 43px;
    }

    .place {
        border-right: 2px solid white;
    }

    .date {
        border-left: 2px solid white;
    }
</style>