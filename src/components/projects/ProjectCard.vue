<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
        isDetail: Boolean
    },
    computed: {
        abstract() {
            return this.project.content.slice(0, 400) + '...';
        },
        publicationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
}
</script>

<template>
    <div class="card my-4 p-2">
        <div class="card-header d-flex align-items-center justify-content-between">
            <div class="card-title d-flex align-items-center gap-3">
                <h1> {{ project.title }} </h1>
                <h3 v-if="project.type"><span class="badge" :style="{ backgroundColor: project.type.color }">{{
                    project.type.label
                }}</span>
                </h3>
            </div>
            <RouterLink v-if="!isDetail" class="btn btn-outline-primary"
                :to="{ name: 'project-detail', params: { slug: project.slug } }">
                Vedi
            </RouterLink>

        </div>
        <div class="card-body clearfix">
            <img :src="project.image" class="img-fluid float-start me-4" :alt="project.title">
            <h6 v-if="project.technologies.length" class="card-subtitle mb-4">
                Tecnologie usate:
                <span v-for="tech in  project.technologies" :key="tech.id" class="badge rounded-pill ms-1"
                    :class="`text-bg-${tech.color}`">
                    {{ tech.label }}
                </span>
            </h6>
            <p class="card-text">{{ isDetail ? project.content : abstract }}</p>
        </div>
        <div class="card-footer text-end">
            <div>Creato il {{ publicationDate }}</div>
        </div>
    </div>
</template>

<style></style>
