<script>
import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';

const defaultEndpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  name: 'App',
  components: { AppHeader, AppLoader },
  data: () => ({
    store
  })

}
</script>

<template>
  <AppHeader />
  <main class="container mt-5">
    <AppLoader v-if="store.isLoading" />
    <RouterView />
  </main>
</template>

<style></style>
