// Questo è il web.php di vue

// Creo la rotta e crea la cronologia
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che mi interessano
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, },
        { path: '/contact-us', component: ContactUsPage, },
        { path: '/:patchMatch(.*)*', component: NotFoundPage, }
    ]
});

export { router }

/*
In caso posso esportare direttamente scrivento:

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, },
        { path: '/contact-us', component: ContactUsPage, }
    ]
});

e nel main.js invece del destructoring {router} scrivo importo direttamente router,
senza graffe
*/ 