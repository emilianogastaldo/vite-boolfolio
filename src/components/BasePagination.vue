<script>
export default {
    name: 'BasePagination',
    props: {
        links: Array
    },
    emits: ['change-page']
}
</script>
<template>
    <nav>
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item"
                :class="{ 'active': link.active, 'disabled': !link.url }">
                <button class="page-link" v-html="link.label" :disabled="!link.url"
                    @click="$emit('change-page', link.url)"></button>
            </li>
        </ul>
    </nav>
</template>
<style></style>