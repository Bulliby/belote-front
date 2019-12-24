<template>
    <div id="game-area-container">
        <section id="player-south" class="player">
            <PlayingCard>
            </PlayingCard>
        </section>
        <section id="player-north" class="player">
            <PlayingCard>
            </PlayingCard>
        </section>
        <section id="player-east" class="player">
            <PlayingCard>
            </PlayingCard>
        </section>
        <section id="player-west" class="player">
            <PlayingCard>
            </PlayingCard>
        </section>
    </div>
</template>
<script>
import PlayingCard from './PlayingCard.vue';

export default {
    components: {
        PlayingCard,
    }
}
</script>

<style>

.player {
    /*background-color: blue; */
}

#game-area-container {
    width: 100%;
    height: 100%;
    background-color: green;
    display: grid;
    grid-template-columns: 35% auto 35%;
    grid-template-rows: auto 35% auto;
}

#player-south {
    grid-column-start: 2;
    grid-row-start: 3;
    justify-self: center;
}

#player-north {
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: center;
}

#player-east {
    grid-column-start: 1;
    grid-row-start: 2;
    justify-self: center;
}

#player-west {
    grid-column-start: 3;
    grid-row-start: 2;
    justify-self: center;
}
</style>

