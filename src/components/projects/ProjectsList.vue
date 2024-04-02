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
        <ul v-if="projects.length">
            <li v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </li>
        </ul>
        <h4 v-else>Non ci sono progetti</h4>
    </section>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>