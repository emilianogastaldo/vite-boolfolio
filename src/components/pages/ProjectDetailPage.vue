<script>
import axios from 'axios';
import ProjectCard from '../projects/ProjectCard.vue';
import AppLoader from '../AppLoader.vue';

const defaultEndpoint = 'http://127.0.0.1:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: {
        ProjectCard,
        AppLoader
    },
    data: () => ({
        project: null,
        isLoading: false,
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.id)
                .then(res => {
                    this.project = res.data;
                })
                .catch(err => {
                    console.error(err);
                })
                .then(() => {
                    this.isLoading = false;
                });
        }
    },
    created() {
        this.getProject();
    }
}
</script>
<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>
<style></style>