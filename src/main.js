import Vue from 'vue';
import Axios from 'axios';
import VModal from 'vue-js-modal';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';

Vue.use(VModal);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
Vue.prototype.$http.defaults.headers.common.Authorization = token;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});
store.$app = app;
app.$mount('#app');
