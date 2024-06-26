import { createApp } from 'vue';
import '@/style/index.css';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

const app = createApp(App);
app.use(store).use(router);
app.mount('#app');
