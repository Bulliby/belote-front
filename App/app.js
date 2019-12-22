import Vue from 'vue'
import Echo from 'laravel-echo'
import App from './App.vue'

window.Pusher= require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '6913324348723',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    disableStats: true,
});

window.Echo.channel('my-channel')
    .listen('test', (e) => {
        console.log(e);
    });

var app = new Vue({
    el: '#app',
    render: h => h(App),
    data: {
        message: 'Hello Vue!'
    }
});
