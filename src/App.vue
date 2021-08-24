<template>
  <Header />
  <div class="container routes">
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.5;
  font-size: 15px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
input, textarea {
  display: block;
  width: 100%;
  padding: 0.8rem 1rem;
  outline: none;
  border-radius: 5px;
  border: solid 1px rgb(179, 178, 178);
  margin: 0.5rem 0;
  transition: 0.5s ease border;
}
input:focus {
  border: solid 2px rgb(179, 178, 178);
}
.input-field {
  margin: 1rem 0;
}
.btn {
  cursor: pointer;
  padding: 0.7rem 1rem;
  display: inline-block;
  margin: 0.5rem 0;
  outline: none;
  border: none;
  color: #fff;
  background: rgb(1, 68, 145);
  font-weight: bold;
  border-radius: 5px;
  letter-spacing: 2px;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 90%;
  overflow: hidden;
  margin: auto;
}
.color {
  color: rgb(0, 71, 153);
}
.box-shadow {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.btn-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
}
.hide-on-sm {
  display: none;
}
.hide-on-lg {
    display: block;
}
.routes {
  margin-top: 6rem;
}
@media screen and (min-width: 700px) {
  .container {
    width: 80%;
  }
  .hide-on-lg {
    display: none;
  }
  .hide-on-sm {
    display: block;
  }
}
@media screen and (min-width: 1000px) {
  .container {
    width: 968px;
  }
}
@media screen and (min-width: 1200px) {
  .container {
    width: 1100px;
  }
}
</style>
