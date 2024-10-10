<template>
  <div class="home">
    <main>
      <section>
        <h1>Javier Grinan</h1>
        <h2>Web Developer</h2>
        <p>
          Information Technology student at CCC, currently diving into Dynamic Web Applications. Passionate about programming and always excited to learn and grow in the tech world.
        </p>
        <div class="resume-link">
          <a href="#">Resume</a>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </section>
    </main>
    <aside>
      <img src="@/assets/portrait.png" alt="Javier Grinan portrait">
    </aside>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    overflow-y: scroll;
  }
  main {
    display: flex;
    align-items: center;
  }
  section {
    width: 100%;
    text-align: left;
    padding: 0 250px 0 60px;
  }
  h1 {
    font-size: 6.5em;
  }
  h2 {
    color: var(--main-clr);
  }
  p {
    font-size: 1.3em;
  }
  aside {
    display: flex;
    align-items: center;
  }
  img {
    height: auto;
    width: 100%;
    border-radius: 50px;
  }
</style>
