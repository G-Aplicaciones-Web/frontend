import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';

createApp(App).mount('#app')
const app = createApp(App);

app.use(PrimeVue);
