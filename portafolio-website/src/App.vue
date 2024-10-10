<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/#">Service</router-link>
    <router-link to="/#">Projects</router-link>
    <router-link to="/#">Blog</router-link>
    <router-link to="/#">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  /* #5afecb */
  /* font family */
  height: 100vh;
  width: 100%;
  background: linear-gradient(145deg, rgb(34, 52, 63), #0d1417);
}
</style>
