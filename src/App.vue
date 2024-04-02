<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import AppLoader from './components/AppLoader.vue';
import AppAlert from './components/AppAlert.vue';

const defaultEndpoint = 'http://127.0.0.1:8000/api/projects';
export default {
  name: 'App',
  components: { AppHeader, AppAlert, ProjectsList },
  data: () => ({
    projects: {
      data: [],
      links: []
    },
    isLoading: false,
    isAlertOpen: false
  }),
  methods: {
    // posso dare un default scrivendo endpoint = defaultEndpoint
    fetchProjects(endpoint) {
      this.isLoading = true;
      // Se endpoint è nullo chiamo il dafault
      axios.get(endpoint ?? defaultEndpoint)
        .then(res => {
          const { data, links } = res.data;
          this.projects = { data, links };
          this.isAlertOpen = false;
        })
        .catch(err => {
          console.error(err);
          this.isAlertOpen = true;
        })
        .then(() => {
          this.isLoading = false;
        })
    },
    closeErrorAlert() {
      this.isAlertOpen = false
      this.fetchProjects();
    }

  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppLoader v-if="isLoading" />
  <main v-else>
    <div class="container mt-5">
      <AppAlert :show="isAlertOpen" @close="closeErrorAlert" />
      <h1>Progetti</h1>
      <ProjectsList :projects="projects.data" />
      <!-- Barra di navigazione -->
      <nav>
        <ul class="pagination">
          <li v-for="link in projects.links" :key="link.label" class="page-item"
            :class="{ 'active': link.active, 'disabled': !link.url }">
            <button class="page-link" v-html="link.label" :disabled="!link.url"
              @click="fetchProjects(link.url)"></button>
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style></style>
