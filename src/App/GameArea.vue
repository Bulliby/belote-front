<template>
    <div v-on:hand="getGameHand" id="game-area-container">
        <section id="player-south" class="player">
            <div v-for="(card, index) in hand" @click="current = index">
                <PlayingCard  :value="card.value" :suit="card.shape" class="card" :class="[{target:index === current}, style(index)]">
                </PlayingCard>
            </div>
        </section>
    </div>
</template>
<script>
import PlayingCard from './PlayingCard.vue';
import Hand from '../../build/Hand'
export default {
    components: {
        PlayingCard,
    },
    methods: {
        //Get game hand from a Custom event
        getGameHand(e) {
            let test = new Hand();
            this.hand = e.detail;
        },
        style(index) {
            return "card-" + Number(index + 1);
        },
    },
    data() {
        return {
            hand: null,
            current: null,
        }
    }
}
</script>

<style scoped>

.card-1 {
    position: absolute;
}

.target {
    position: absolute;
    transform: translateY(-300px);
}

.card-2 {
    position: absolute;
    left: 50px;
}

.card-3 {
    position: absolute;
    left: 100px;
}

.card-4 {
    position: absolute;
    left: 150px;
}

.card-5 {
    position: absolute;
    left: 200px;
}

.card-6 {
    position: absolute;
    left: 250px;
}

.card-7 {
    position: absolute;
    left: 300px;
}

.card-8 {
    position: absolute;
    left: 350px;
}

.card {
}


.player {
    position: relative;
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
    justify-self: left;
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

