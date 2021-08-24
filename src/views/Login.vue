<template>
  <div class="login">
    <form @submit.prevent="signIn" class="box-shadow">
      <h2>SIGN IN</h2>
      <p class="err">{{ err }}</p>
      <div class="input-field">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input type="password" v-model="password">
      </div>
      <button class="btn btn-shadow">SIGN IN</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      err: '',
      email: '',
      password: '',
    }
  },
  methods: {
    signIn() {
     firebase.auth()
     .signInWithEmailAndPassword(this.email, this.password)
     .then(() => this.$router.go({path: this.$router.path}))
     .catch(err => {
       this.err = err.message
       setTimeout(() => {this.err = ''}, 2000)
       })
    }
  }
}
</script>

<style scoped>
.login h2 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: rgb(0, 45, 95);
}
.login form {
  margin: 1rem 0.1rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
}
.err {
  text-align: center;
}
@media screen and (min-width: 1000px) {
  .login {
    width: 600px;
    margin: 1rem auto;
  }
}
</style>