import { createApp } from 'vue'
import App from './App.vue'
import actionsCart1 from './viewsComponents/actionsCart/actionsCart1.vue';
import actionsCart2 from './viewsComponents/actionsCart/actionsCart2.vue';
import productsCart1 from './viewsComponents/productsCart/productsCart1.vue';
import productsCart2 from './viewsComponents/productsCart/productsCart2.vue';
import headerCart1 from './viewsComponents/headersCart/headerCart1.vue';
import discountCodeCart from './viewsComponents/discountCodeCart/discountCodeCart.vue';

import totalPrice1 from './viewsComponents/totalPrice/totalPrice1.vue';

import totalPrice2 from './viewsComponents/totalPrice/totalPrice2.vue';

import quantityCounter from "./components/quantityCounter.vue";
import quantityCounter2 from "./components/quantityCounter2.vue";
import alertBase1 from "./components/alertComponents/alertBase1.vue";

import loadingRing from "./components/loadingSections/loadingRing.vue";
import { createPinia } from 'pinia'


const pinia = createPinia()

// Register components globally (optional)
createApp(App)
  .component('actionsCart1', actionsCart1)
  .component('actionsCart2', actionsCart2)
  .component('productsCart1', productsCart1)
  .component('productsCart2', productsCart2)
  .component('headerCart1', headerCart1)
  .component('discountCodeCart', discountCodeCart)
  .component('totalPrice1', totalPrice1)
  .component('totalPrice2', totalPrice2)
  .component('quantityCounter', quantityCounter)
  .component('quantityCounter2', quantityCounter2)
  .component('loadingRing', loadingRing)
  .component('alertBase1', alertBase1)
  .use(pinia)
  .mount('#app');
