<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
}
</script>

<template>
    <section>
        <div v-if="projects.length">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else>Non ci sono progetti</h4>
    </section>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>