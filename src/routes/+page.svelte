<script>
    import Header from "../components/header/Header.svelte";
    import Main from "../components/main/Main.svelte";
    import Invitation from "../components/invitation/Invitation.svelte";
    import CountDown from "../components/countDown/CountDown.svelte";
</script>
<Header/>
<Main/>
<Invitation/>
<CountDown />


<style>
    :global(*) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, Arial, sans-serif;
    }
</style>