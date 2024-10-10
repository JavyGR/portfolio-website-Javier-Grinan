<template>
  <div class="home">
    <main>
      <section>
        
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
    grid-template-columns: 2.5fr 1fr;
  }
  main {
    display: flex;
    align-items: center;
  }
  section {
    width: 100%;
  }
  aside {
    display: flex;
    align-items: center;
    padding-right: 0px;
  }
  img {
    height: auto;
    width: 100%;
    border-radius: 50px;
    clip-path: inset(20px 60px 10px 0 round 50px)
  }
</style>
