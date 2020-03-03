import Vue from 'vue';
import App from './App.vue';
import formival from "./formival";
import {Vuelidate} from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  formival,
  render: h => h(App),
}).$mount('#app');
