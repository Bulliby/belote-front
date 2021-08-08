import { createApp } from 'vue'
import App from './components/App.vue'

createApp(App).mount('#app')

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
