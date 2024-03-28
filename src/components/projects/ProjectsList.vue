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
        <ul>
            <li v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>