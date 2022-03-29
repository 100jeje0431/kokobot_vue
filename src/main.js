import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

let app = createApp(App);

import store from "./store.js";
app.use(store).mount("#app");

import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
