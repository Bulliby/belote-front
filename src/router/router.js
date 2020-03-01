import GameArea from '../App/GameArea.vue';
import Home from '../App/Home.vue'
import Login from '../App/Login.vue'
import VueRouter from 'vue-router'

export function createRouter () {
    return new VueRouter({ 
        routes: [
            { path: '/game', component: GameArea },
            { path: '/gretting', component: Home },
            { path: '/login', component: Login }
        ]
    });
};
