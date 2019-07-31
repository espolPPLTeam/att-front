import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store/";

// import "./registerServiceWorker";

import '@/assets/css/tailwind.css';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import "./style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");