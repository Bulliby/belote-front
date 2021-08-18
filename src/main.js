import { createApp } from 'vue'
import App from './components/App.vue'


const ws = new WebSocket('ws://127.0.0.1:6001');

ws.sendJson = function(data) {
    this.send(JSON.stringify(data));
}

createApp(App).provide('ws', ws).mount('#app');

var hand = null;

ws.onmessage = (e) => {
    let data = JSON.parse(e.data);

    if (data["action"] = "hand") {
        hand = data['data']['hand'];
        var el = document.getElementById('game-area-container');
        var evt = new CustomEvent("hand", {detail: hand});
        el.dispatchEvent(evt);
    }
};
