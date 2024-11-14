<template>
  <div class="projects">
    <h1 class="page-title">Projects</h1>
    <ul v-if="didAPIRespond && isAPIResOK && repos.length" class="repos-list">
      <li
        v-for="repository in repos"
        :key="repository.id"
        class="repository"
      >
        <h2 class="repository-name">
          <a :href="repository.link" target="_blank" rel="noopener noreferrer">
            {{ repository.name }}
          </a>
        </h2>
        <p>{{ repository.description }}</p>
        <p><strong>Main technology used: </strong>{{ repository.mainLanguage }}</p>
        <p><strong>Last date updated: </strong>{{ formatDate(repository.lastUpdated) }}</p>
      </li>
    </ul>
    <div v-if="didAPIRespond && isAPIResOK && !repos.length" class="message-box">
      <h2>No projects here</h2>
    </div>
    <div v-if="!isAPIResOK" class="message-box">
      <h2 class="error-msg">Error obtaining projects</h2>
    </div>
    <div v-if="!didAPIRespond" class="message-box">
      <h2>Loading projects</h2>
    </div>
  </div>
</template>

<script type="module">
import getRepos from '@/api';

export default {
  name: 'HomeComponent',
  data() {
    return {
      didAPIRespond: false,
      isAPIResOK: true,
      repos: [],
    }
  },
  methods: {
    async getReposFromGitHub() {
      try {
        this.repos = await getRepos();
      }
      catch (error) {
        this.isAPIResOK = false;
        console.error(error);
      }
      finally {
        this.didAPIRespond = true;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);

      const year = date.getUTCFullYear();
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = date.getUTCDate().toString().padStart(2, '0');

      return `${month} - ${day} - ${year}`;
    }
  },
  mounted() {
    this.getReposFromGitHub();
  }
}
</script>

<style scoped>
  .projects {
    height: 100vh;
    border: 2px solid red;
    padding-top: 75px;
    scrollbar-color: var(--main-clr) #0d1417;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 5em;
    color: var(--main-clr);
  }
  .repos-list {
    display: flex;
    flex-direction: column;
    border: 2px solid yellow;
    align-items: flex-start;
    padding: 25px;
    height: auto;
    width: 90%;
    justify-content: flex-start;
    list-style: none;
  }
  .repository {
    
  }

  @media screen and (max-width: 915px) {
    .projects {
      flex-direction: column;
      overflow-y: hidden;
    }
    h1 {
      font-size: 4.5em;
    }
  }
  @media screen and (max-width: 732px) {
    .projects {
      padding-bottom: 50px;
      padding-top: 10px;
    }
    h1 {
      font-size: 2.5em;
    }
    ul {
      width: 100%;
      display: flex;
      position: static;
      left: 0;
      padding: 5px;
    }
  }

</style>