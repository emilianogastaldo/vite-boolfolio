<script>
export default {
    name: 'NotFoundPage',
}
</script>
<template>
    <div class="overlay flex-column d-flex align-items-center justify-content-center">
        <h3>404 | Page not found</h3>
        <button class="btn btn-outline-secondary mt-5" @click="$router.back()">Torna indietro</button>
        <RouterLink class="btn btn-outline-primary mt-5" to="/">Torna alla home</RouterLink>
    </div>
</template>
<style>
.overlay {
    height: 70vh;
}
</style>