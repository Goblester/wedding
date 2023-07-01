<header class="header">
    <div class="logo"></div>
    <nav>
        <div class="links">
            <a href="home">Главная</a>
            <a href="events">События</a>
            <a href="Gallery">Галлерея</a>
            <a href="Contacts">Контакты</a>
        </div>
    </nav>
</header>


<style>
    .header {
        position: absolute;
        width: 100%;
        height: 56px;
        padding: 8px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }

    .logo {
        width: 16px;
        height: 16px;
        background-color: saddlebrown;
    }

    .links {
        display: flex;
    }

    .links a {
        list-style: none;
        padding: 8px 16px;
        font-size: 16px;
        color: #ffffff;
        font-weight: 300;
        text-decoration: none;
    }
</style>