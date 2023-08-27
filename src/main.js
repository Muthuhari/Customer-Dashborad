import { createApp } from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo'

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const client_server_url = urlParams.get('server_url');

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.VUE_APP_WEBSOCKETS_KEY,
  wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
  wsPort: 6001,
  cluster: "mt1",
  forceTLS: false,
  disableStats: true,
  authEndpoint :client_server_url+'/api/broadcasting/auth',
  auth:{
    headers: {
      Authorization: 'Bearer '+token,
    }
  },

});

const app = createApp(App);
app.config.productionTip = false;

app.mixin({
  data() {
    return {
      authToken: token,
      apiBaseURL:client_server_url
    };
  },
});

app.mount('#app');



