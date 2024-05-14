import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue'
// Per creare le rotte in Vue importo router e lo applico prima del mount
import { router } from './router'

createApp(App)
    .component('AppLoader', AppLoader)
    .use(router)
    .mount('#app')
