<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import AppLoader from './components/AppLoader.vue';

const endpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  name: 'App',
  components: { AppHeader, ProjectsList },
  data: () => ({ projects: [], isLoading: false }),
  methods: {
    fetchProject() {
      this.isLoading = true;
      axios.get(endpoint)
        .then(res => {
          this.projects = res.data;
        })
        .catch(err => {
          console.error(err);
        })
        .then(() => {
          this.isLoading = false;
        })
    }
  },
  created() {
    this.fetchProject();
  }
}
</script>

<template>
  <AppHeader />
  <AppLoader v-if="isLoading" />
  <main v-else>
    <div class="container mt-5">
      <h1>Progetti</h1>
      <ProjectsList :projects="projects" />
    </div>
  </main>
</template>

<style></style>
