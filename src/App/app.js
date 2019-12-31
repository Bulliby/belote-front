import Vue from 'vue'
import App from './App.vue'

const ws = new WebSocket('ws://127.0.0.1:6001');

var hand = null;

ws.onmessage = (e) => {
    let data = JSON.parse(e.data);

    if (data['hand']) {
        hand = data['hand'];
        var el = document.getElementById('game-area-container');
        var evt = new CustomEvent("hand", {detail: hand});
        el.dispatchEvent(evt);
    }
};

var app = new Vue({
    el: '#app',
    render: h => h(App),
});
