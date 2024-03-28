<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const endpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  name: 'App',
  components: { AppHeader },
  data: () => ({ projects: [] }),
  methods: {
    fetchProject() {
      axios.get(endpoint)
        .then(res => {
          this.projects = res.data;
        })
        .catch(err => {
          console.error(err);
        })
        .then()
    }
  },
  created() {
    this.fetchProject();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <div class="container mt-5">
      <h1>PROVAAAA</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h4 v-text="project.title"></h4>
        </li>
      </ul>
    </div>
  </main>
</template>

<style></style>
