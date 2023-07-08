

<footer id="contacts" data-section="true">
    <span class="memories">Обратная связь</span>
    <h2>Контакты</h2>
    <p class="description">
        Пожалуйста, пройдите опрос и помогите нам все правильно организовать!
    </p>
    <a class="quizBtn" href="https://docs.google.com/forms/u/0/d/1veLfqbBfKjfAVuEgoXmebgOTSszeTgukF7M6Vb-xWtI/viewform?edit_requested=true">
        Принять участие
    </a>
</footer>

<style>
    footer {
        background-color: white;
        padding: 60px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .memories {
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.4);
    }

    h2 {
        margin-bottom: 10px;
        line-height: 1.5;
        font-family: 'Caveat', cursive;
        font-size: 50px;
        color: #000;
    }

    .description {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
    }

    .quizBtn {
        margin-top: 60px;
        padding: 14px 42px;
        font-size: 1.25rem;
        text-transform: capitalize;
        color: #212529;
        background-color: rgba(33,37, 41, 0);
        border: 1px solid #212529;
        transition: all 0.25s;
        text-decoration: none;
    }

    .quizBtn:hover {
        color: white;
        background-color: rgba(33,37, 41, 100);
        border: 1px solid white;
    }

    @media(max-width: 768px) {
        footer {
            padding-top: 60px;
            padding-bottom: 60px;
        }
    }
</style>