<template>
  <div class="projects">
    <h1>Projects</h1>
    <ul>
      <li>
        <h2>Project Name</h2>
        <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam veniam nobis enim accusantium illo sint dolorum nihil amet tempora perspiciatis quae, provident ullam molestiae non eos nemo, magnam reiciendis.</p>
        <p><strong>Main technology used: </strong>Vue</p>
        <p><strong>Last date updated: </strong>01/03/2025</p>
      </li>
    </ul>
    <!-- <div class="message-box">
      <h2>No projects here</h2>
    </div> -->
    <!-- <div class="message-box">
      <h2>Error obtaining projects</h2>
    </div> -->
    <!-- <div class="message-box">
      <h2>Loading projects</h2>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
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
  }

</style>