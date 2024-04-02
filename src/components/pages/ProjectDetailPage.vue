<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
import { store } from '../../data/store';

const defaultEndpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: {
        ProjectCard,
        AppLoader
    },
    data: () => ({
        project: null,
        store
    }),
    methods: {
        getProject() {
            store.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.slug)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    store.isLoading = false;
                });
        }
    },
    created() {
        this.getProject();
    }
}
</script>
<template>
    <ProjectCard v-if="!store.isLoading && project" :project="project" :isDetail="true" />
</template>
<style></style>