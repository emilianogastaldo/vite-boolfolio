<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';


const defaultEndpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  name: 'App',
  components: { AppHeader, HomePage, ContactUsPage },

}
</script>

<template>
  <AppHeader />
  <main class="container mt-5">
    <RouterView />
  </main>
</template>

<style></style>
