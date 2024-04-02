<script>
import axios from 'axios';
import ProjectsList from '../projects/ProjectsList.vue';
import AppLoader from '../AppLoader.vue';
import AppAlert from '../AppAlert.vue';
import BasePagination from '../BasePagination.vue';
import { store } from '../../data/store';

const defaultEndpoint = 'http://127.0.0.1:8000/api/projects';
export default {
    name: 'HomePage',
    components: { AppAlert, ProjectsList, BasePagination },
    data: () => ({
        projects: {
            data: [],
            links: []
        },
        store,
        isAlertOpen: false
    }),
    methods: {
        // posso dare un default scrivendo endpoint = defaultEndpoint
        fetchProjects(endpoint) {
            store.isLoading = true;
            // Se endpoint è nullo chiamo il dafault
            axios.get(endpoint ?? defaultEndpoint)
                .then(res => {
                    const { data, links } = res.data;
                    this.projects = { data, links };
                    this.isAlertOpen = false;
                })
                .catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                })
                .then(() => {
                    store.isLoading = false;
                })
        },
        closeErrorAlert() {
            this.isAlertOpen = false
            this.fetchProjects();
        }

    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <AppAlert :show="isAlertOpen" @close="closeErrorAlert" />
    <h1>Progetti</h1>
    <div v-if="!store.isLoading">
        <ProjectsList :projects="projects.data" />
        <!-- Barra di navigazione -->
        <BasePagination :links="projects.links" @change-page="fetchProjects" />
    </div>
</template>

<style></style>
