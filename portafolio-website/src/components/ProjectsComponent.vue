<template>
  <div class="projects">
    <h1 class="page-title">Projects</h1>
    <ul v-if="didAPIRespond && isAPIResOK && repos.length" class="repos-list">
      <li
        v-for="repository in repos"
        :key="repository.id"
        class="repository"
      >
        <h2 class="repo-name">
          <a :href="repository.link" target="_blank" rel="noopener noreferrer">
            {{ repository.name }}
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </h2>
        <p>{{ repository.description }}</p>
        <p><strong>Main technology used: </strong>{{ repository.mainLanguage }}</p>
        <p><strong>Last date updated: </strong>{{ formatDate(repository.lastUpdated) }}</p>
      </li>
    </ul>
    <div v-if="didAPIRespond && isAPIResOK && !repos.length" class="message-box">
      <h1>No projects here</h1>
    </div>
    <div v-if="!isAPIResOK" class="message-box error-msg">
      <h1>Error obtaining projects</h1>
    </div>
    <div v-if="!didAPIRespond" class="message-box">
      <h1>Loading projects...</h1>
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
    padding-top: 75px;
    scrollbar-color: var(--main-clr) #0d1417;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-title {
    font-size: 5em;
    color: var(--main-clr);
  }
  .repos-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    height: auto;
    width: 70%;
    list-style: none;
  }
  .repository {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 2px solid var(--main-clr);
    padding: 15px;
    padding-bottom: 0;
  }
  .repository:last-of-type {
    border-bottom: none;
  }
  .repository>p {
    text-align: start;
    font-size: 1.3em;
  }
  .repo-name {
    align-self: center;
  }
  .repo-name>a {
    color: whitesmoke;
  }
  i {
    margin-left: 5px;
    position: relative;
    left: 0;
    font-size: 0.7em;
  }
  a:hover i {
    animation-name: arrow-move;
    animation-duration: 200ms;
    animation-timing-function: ease;
  }
  .message-box {
    margin: auto 0;
    background-color: var(--main-clr);
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px var(--main-clr);
  }
  .message-box>h1 {
    color: #22343f;
  }
  .error-msg {
    background-color: inherit;
    box-shadow: none;
  }
  .error-msg>h1 {
    color: rgb(233, 54, 54);
    text-shadow: 1px 1px 3px rgb(233, 54, 54);
  }

  @media screen and (max-width: 915px) {
    .projects {
      flex-direction: column;
    }
    .page-title {
      font-size: 4.5em;
    }
    .repos-list {
      width: 100%;
    }
  }
  @media screen and (max-width: 732px) {
    .projects {
      padding-bottom: 50px;
      padding-top: 15px;
    }
    .page-title {
      font-size: 2.5em;
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .repos-list {
      width: 100%;
      display: flex;
      position: static;
      left: 0;
      padding: 5px;
    }
    .repo-name {
      align-self: start;
    }
  }

</style>