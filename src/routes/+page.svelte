<script>
    import './../fonts/style.css';
    import Header from "../components/header/Header.svelte";
    import Main from "../components/main/Main.svelte";
    import Invitation from "../components/invitation/Invitation.svelte";
    import CountDown from "../components/countDown/CountDown.svelte";
    import WeddingEvents from "../components/weddingEvents/WeddingEvents.svelte";
    import {currentSection} from "../store/currentSection";
    import {onDestroy, onMount} from "svelte";
    import Contacts from "../components/contacts/Contacts.svelte";
    import ContactsModal from "../components/contacts/ContactsModal.svelte";
    import {modal} from "../store/modal";
    let timeout;
    onMount(() => {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSection.set(entry.target.id);
                }
            })
        }, {threshold: 0.5})
        const sections = document.querySelectorAll('[data-section]');
        sections.forEach(section => sectionObserver.observe(section));

        timeout = setTimeout(() => {
            if(!document.cookie.includes('CONTACTS_SHOWED')) {
                modal.set('contacts');
            }
        }, 3000)
    });

    onDestroy(() => {
        clearTimeout(timeout);
    });

</script>
<Header/>
<Main/>
<Invitation/>
<CountDown />
<WeddingEvents />
<Contacts />
<ContactsModal />

<style>
    :global(html) {
        scroll-behavior: smooth;
    }

    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
        font-weight: 300;
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
        font-family: Caveat, cursive;
        font-weight: 700;
        font-size: 50px;
        color: #000;
    }

    :global(button) {
        cursor: pointer;
    }
</style>