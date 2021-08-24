<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <router-link to="/"><h1 class="title">Blogue<span class="color">.</span></h1></router-link>
        <nav class="nav" :class="{ open: open }">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li v-if="isLoggedin"><router-link to="/dashboard">Dashboard</router-link></li>
            <li v-if="!isLoggedin"><router-link to="/register" >Register</router-link></li>
            <li v-if="!isLoggedin"><router-link to="/Login" >Login</router-link></li>
            <li v-if="isLoggedin" @click="logout">Logout</li>
          </ul>
        </nav>
        <div @click="openNav"
          class="hamburger hide-on-lg"
          :class="{ change: open }">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Header',
  data() {
    return {
      isLoggedin: false,
      open: false,
      currentUser: false,
    }
  },
  methods: {
    openNav() {
      this.open = !this.open
    },
    closeNav() {
      const li = document.querySelectorAll('ul li')
      li.forEach(list => {
        list.addEventListener('click', () => {
          this.open = !this.open
        })
      })
    },
    logout() {
      firebase.auth()
      .signOut()
      .then(() => {
        this.$router.go({path: this.$router.path})
      })
    }
  },
  mounted() {
    this.closeNav()
    if(firebase.auth().currentUser) {
      this.isLoggedin = true;
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: #ffffff;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.25);
  z-index: 100;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-content h1 {
  color: rgb(0, 45, 95);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-weight: bold;
  cursor: pointer;
}
.hamburger > div {
  height: 2px;
  width: 20px;
  background: rgb(0, 45, 95);
  margin: 0.2rem 0;
  transition: transform ease-in-out 0.4s;
  cursor: pointer;
}
.change.hamburger > div:nth-child(1) {
  transform: translate(1px, 5px) rotate(45deg);
}
.change.hamburger > div:nth-child(2) {
  opacity: 0;
}
.change.hamburger > div:nth-child(3) {
  transform: translate(0px, -6px) rotate(-45deg);
}
.open.nav {
  display: block;
  animation: fade ease-in-out 0.4s forwards;
}
@keyframes fade {
  to {
    opacity: 1;
  }
}
.nav {
  position: fixed;
  top: 78px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: ease-in-out 0.4s top;
  display: none;
  opacity: 0;
}
.nav ul {
  position: absolute;
  top: 100px;
  left: 50%;
  width: 80%;
  transform: translate(-50%, 0);
  background: #ffffff;
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
}
.nav ul li {
  display: block;
  padding: 1rem 0;
  text-transform: uppercase;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: rgb(0, 71, 153);
}
@media screen and (min-width: 700px) {
  .nav {
    position: relative;
    width: auto;
    height: auto;
    background: none;
    z-index: 0;
    top: 0;
    display: block;
    opacity: 1;
  }
  .nav ul {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    transform: translate(0);
    background: none;
    text-align: initial;
    padding: 0;
    border-radius: 0;
  }
  .nav ul li {
    display: inline;
    padding: 0;
    text-transform: capitalize;
  }
}
</style>
