<template>
    <body>
        <h1>Bienvenu sur la Belotte</h1>
        <h3>Ce site appartient a ma super Moune the beast</h3>
        If you aren't connected yet this can be done here :
        <router-link to="/login">Connect</router-link>
        If you want to play it's here
        <router-link to="/game">Play</router-link>
        <router-view></router-view>
    </body>
</template>
<script>
    export default { 
    }
</script>
