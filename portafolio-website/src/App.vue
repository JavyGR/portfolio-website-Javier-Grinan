<template>
  <nav>
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/aboutme">About Me</router-link>
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
:root {
  --main-clr: #5afecb;
  scrollbar-color: var(--main-clr) #0d1417;
  overflow-y: scroll;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: linear-gradient(145deg, #22343f, #0d1417);
}
#app {
  /* font family */
  height: 100vh;
  width: 100%;
  text-decoration: none;
  color: whitesmoke;
  text-align: center;
  display: flex;
  flex-direction: column;
}
nav {
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 99;
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
@keyframes arrow-move {
  0% {
    left: 0;
  }
  50% {
    left: 15px;
  }
  100% {
    left: 0;
  }
}
</style>
