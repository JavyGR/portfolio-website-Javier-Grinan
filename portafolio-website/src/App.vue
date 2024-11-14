<template>
  <nav>
    <ul :class="navMenuClasses.listClasses">
      <li class="nav-item">
        <router-link class="nav-link" to="/" @click="closeMenu()">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/aboutme" @click="closeMenu()">About Me</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/service" @click="closeMenu()">Service</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/projects" @click="closeMenu()">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/blog" @click="closeMenu()">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact" @click="closeMenu()">Contact</router-link>
      </li>      
    </ul>
    <button class="menu-btn" @click="toggleMenu()">
      <i v-if="!menuOpen" class="fa-solid fa-bars"></i>
      <i v-if="menuOpen" class="fa-solid fa-x"></i>
    </button>
  </nav>
  <router-view/>
</template>

<script>
  export default {
  name: 'App',
  data() {
    return {
      menuOpen: false,
      closingMenu: false,
    }
  },
  computed: {
    navMenuClasses() {
      let listClasses = `${
        this.menuOpen ? 'nav-menu' : null
        } ${
        this.closingMenu ? 'fade-out-right' : null
        }`;
      return {
        listClasses: listClasses
      }
    },
  },
  methods: {
    toggleMenu() {
      if (this.menuOpen) {
        this.closingMenu = true;
        setTimeout(() => {
          this.closingMenu = false;
          this.menuOpen = !this.menuOpen;
        }, 200);
      }
      else {
        this.menuOpen = !this.menuOpen;
      }
    },
    closeMenu() {
      this.closingMenu = true;
      setTimeout(() => {
        this.closingMenu = false;
        this.menuOpen = false;
      }, 200);
    },
  }
}
</script>