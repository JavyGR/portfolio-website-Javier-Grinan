<template>
  <div class="home">
    <main>
      <section>
        <h1>Javier Grinan</h1>
        <h2>Web Developer</h2>
        <p>
          I'm a Information Technology student at CCC, currently diving into Dynamic Web Applications. Passionate about programming and always excited to learn and grow in the tech world.
        </p>
          <a href="#">
            See my Resume
            <i class="fa-solid fa-arrow-right"></i>
          </a>
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
    grid-template-columns: 2.3fr 1fr;
    padding-top: 75px;
    scrollbar-color: var(--main-clr) #0d1417;
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
    color: var(--main-clr);
  }
  p {
    font-size: 1.3em;
  }
  a {
    font-size: 1.3em;
    color: whitesmoke;
    display: inline;
    position: relative;
  }
  i {
    margin-left: 5px;
    position: relative;
    left: 0;
  }
  a:hover i {
    animation-name: arrow-move;
    animation-duration: 200ms;
    animation-timing-function: ease;
  }
  aside {
    display: flex;
    align-items: center;
  }
  img {
    height: auto;
    width: 100%;
    border-radius: 50px;
    clip-path: inset(20px 120px 10px 0 round 50px);
  }
  @media screen and (max-width: 915px) {
    .home {
      display: flex;
      flex-direction: column;
      overflow-y: hidden;
    }
    section {
      padding: 0 50px;
    }
    img {
      padding: 50px;
      width: 75%;
      margin: 0 auto;
      border-radius: 150px;
    }
    h1 {
      font-size: 4.5em;
    }
  }
  @media screen and (max-width: 732px) {
    .home {
      flex-direction: column-reverse;
      padding-bottom: 50px;
      padding-top: 10px;
    }
    img {
      width: 100%;
    }
    h1 {
      font-size: 2.5em;
    }
  }
</style>
