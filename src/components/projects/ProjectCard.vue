<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
}
</script>

<template>
    <div class="card my-4 p-2">
        <div class="card-body clearfix">
            <img :src="project.image" class="img-fluid float-start me-4" :alt="project.title">
            <div class="card-title d-flex align-items-center gap-3">
                <h1> {{ project.title }} </h1>
                <h3><span class="badge text-bg-primary">{{ project.type.label }}</span></h3>
            </div>
            <h6 class="card-subtitle mb-4">
                Tecnologie usate:
                <span v-for="tech in  project.technologies " class="badge rounded-pill ms-1"
                    :class="`text-bg-${tech.color}`">
                    {{ tech.label }}
                </span>
            </h6>
            <p class="card-text" v-text="project.content"></p>
        </div>
    </div>
</template>

<style></style>
