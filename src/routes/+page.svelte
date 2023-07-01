<script>
    import './../fonts/style.css';
    import Header from "../components/header/Header.svelte";
    import Main from "../components/main/Main.svelte";
    import Invitation from "../components/invitation/Invitation.svelte";
    import CountDown from "../components/countDown/CountDown.svelte";
    import WeddingEvents from "../components/weddingEvents/WeddingEvents.svelte";
    import OurGallery from "../components/ourGallery/OurGallery.svelte";
    import Footer from "../components/footer/Footer.svelte";
    import {currentSection} from "../store/currentSection";
    import {onMount} from "svelte";

    onMount(() => {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSection.set(entry.target.id);
                }
            })
        })
        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => sectionObserver.observe(section));
    })

</script>
<Header/>
<Main/>
<Invitation/>
<CountDown />
<WeddingEvents />
<OurGallery />
<Footer />

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', Arial, sans-serif;
    }

    :global(body) {
        font-family: 'Open Sans', Arial, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 1.7;
        color: #000;
        background: #fff;
    }

    :global(h2) {
        margin-bottom: 10px;
        line-height: 1.5;
        font-family: cursive;
        font-size: 50px;
        color: #000;
    }

    :global(button) {
        cursor: pointer;
    }
</style>