<template>
    <div v-on:hand="getGameHand" id="game-area-container">
        <section id="player-south" class="player">
            <div v-for="(card, index) in hand" @click="playCard(index)">
                <PlayingCard  :value="card.value" :suit="card.shape" class="card" :class="[{target:index === playingCard}, style(index)]">
                </PlayingCard>
            </div>
        </section>
        <section id="player-north" class="player">
            <RemotePlayer>
            </RemotePlayer>
        </section>
        <section id="player-east" class="player">
            <RemotePlayer>
            </RemotePlayer>
        </section>
        <section id="player-west" class="player">
            <RemotePlayer>
            </RemotePlayer>
        </section>
    </div>
</template>
<script>
import PlayingCard from './PlayingCard.vue';
import RemotePlayer from './RemotePlayer.vue';
export default {
    components: {
        PlayingCard,
        RemotePlayer,
    },
    inject: ['ws'],
    methods: {
        //Get game hand from a Custom event
        getGameHand(e) {
            this.hand = e.detail;
            this.player_id = document.title;
        },
        style(index) {
            return "card-" + Number(index + 1);
        },
        playCard(index) {
            /* This is my time to play ? */
            /* Can I play this card ? */
            this.playingCard = index
            /* Voir pour l'usage de proxy MDN pour remplir la partie player_id et d'hypotetique autre valeur */
            this.ws.sendJson({"action":"playingCard", "player_id": this.player_id, "data": {"card": this.hand[index]}});
        }
    },
    data() {
        return {
            hand: null,
            player_id: null,
            /* Card selected by player to send via WS*/
            playingCard: null,
        }
    }
}
</script>

<style>

@media (max-height: 650px), (max-width: 1100px) {
    #player-west, #player-east, #player-north {
        display: none;
    }
}

</style>

<style scoped>
.card-1 {
    position: absolute;
}

/* Permit to move the card with @click event */
.target {
    position: absolute;
    transform: translateY(-100px);
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
    margin: 0;
    border: 0;
    padding: 0;
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
    justify-self: center;
    align-self: center;
    right: 250px;
    bottom: 6rem;
}

#player-north {
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: center;
    align-self: center;
    bottom: 6rem;
    right: 4rem;
}

#player-east {
    grid-column-start: 1;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
    bottom: 6rem;
    right: 4rem;
}

#player-west {
    grid-column-start: 3;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
    bottom: 6rem;
    right: 4rem;
}
</style>
