<template>
  <nav>
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About Me</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/#">Service</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/#">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/#">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/#">Contact</router-link>
      </li>      
    </ul>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: linear-gradient(145deg, rgb(34, 52, 63), #0d1417);
}
#app {
  /* #5afecb */
  /* font family */
  height: 100vh;
  width: 100%;
  text-decoration: none;
  color: whitesmoke;
  text-align: center;
  display: flex;
  flex-direction: column;
}
ul {
  margin-bottom: 0;
  padding: 25px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
}
.nav-item {
  padding: 0 30px;
}
.nav-link {
  color: whitesmoke;
  text-shadow: 0 0px 1px whitesmoke;
}
.active-nav-link {
  text-decoration: underline;
  text-shadow: 0 0px 3px whitesmoke;
}

</style>
