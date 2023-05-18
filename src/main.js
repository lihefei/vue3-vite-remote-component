import './assets/main.css';
import { createApp } from 'vue';
import * as Vue from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
window.Vue = Vue;

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
