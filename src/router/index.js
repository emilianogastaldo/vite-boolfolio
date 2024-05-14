// Questo è il web.php di vue

// Creo la rotta e crea la cronologia
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che mi interessano
import HomePage from '../pages/HomePage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    // Con queste gli dico che classi mettere alle rotte attive!
    linkActiveClass: 'partial-active',
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/projects/:slug', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:patchMatch(.*)*', redirect: 'not-found' }
    ]
});

export { router }

/*
In caso posso esportare direttamente scrivendo:

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, },
        { path: '/contact-us', component: ContactUsPage, }
    ]
});

e nel main.js invece del destructoring {router} scrivo import router,
senza graffe
*/ 