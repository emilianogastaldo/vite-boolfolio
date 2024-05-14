<script>
import axios from 'axios';
const baseUri = 'http://127.0.0.1:8000/api';
import ProjectsList from '../components/projects/ProjectsList.vue';
import { store } from '../data/store';
export default {
    name: 'CategoryPostsPage',
    data: () => ({
        projects: [],
        categoryLabel: '',
        store,
    }),
    components: { ProjectsList },
    methods: {
        fetchProjects() {
            store.isLoading = true;
            axios.get(`${baseUri}/types/${this.$route.params.slug}/projects/`)
                .then(res => {
                    const { label, projects } = res.data;
                    this.projects = projects;
                    this.categoryLabel = label;
                })
                .catch(err => {
                    console.log(err);
                    this.$router.push({ name: 'not-found' });
                })
                .then(() => {
                    store.isLoading = false;
                })

        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <h1>Prova di pagina {{ categoryLabel }}</h1>
    <ProjectsList :projects="projects" />
</template>

<style></style>