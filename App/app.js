import Vue from 'vue'
import App from './App.vue'

const ws = new WebSocket('ws://127.0.0.1:6001');

var hand = null;

ws.onmessage = (e) => {
    let data = JSON.parse(e.data);

    if (data['hand']) {
        console.log('hello');
        hand = data['hand'];
        var evt = new CustomEvent("look", {detail: hand});
        el.dispatchEvent(evt);
    }
};

function modifyText() {
    console.log("event listner");
}

var app = new Vue({
    el: '#app',
    render: h => h(App),
    data: {
        hand: hand
    }
});

var el = document.getElementById('game-area-container');
el.addEventListener("look", modifyText, false);
