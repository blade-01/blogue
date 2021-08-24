<template>
  <div class="success" v-if="success">
    <p>You've Successfully Uploaded your post</p>
    <button @click="closeToast" class="btn">&times;</button>
  </div>
  <div class="dashboard">
    <h2>Welcome 👋</h2>
    <form @submit.prevent="postBlog">
      <p class="err" v-if="err">{{err}}</p>
      <div class="input-field">
        <label for="user">Username</label>
        <input type="text" id="user" v-model="user">
      </div>
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" v-model="title">
      </div>
      <div class="input-field">
        <label for="content">Content</label>
        <textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
      </div>
      <button class="btn btn-shadow">POST</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Dashboard',
  data() {
    return {
      user: '',
      title: '',
      content: '',
      err: '',
      success: false,
    }
  },
  methods: {
    postBlog() {
      if(this.user && this.title && this.content) {
        const blog = {
          title: this.title,
          content: this.content,
          author: this.user,
        }
        firebase.firestore().collection('blogs')
        .add(blog).then(() => {
          this.title = '';
          this.content = '';
          this.success = true;
        })
      } else {
        this.err = 'Please fill all fields'
        setTimeout(() => {this.err = ''}, 2000)
      }
    },
    closeToast() {
      this.success = false;
    },
  }
}
</script>

<style scoped>
.dashboard h2 {
  margin-bottom: 1.5rem;
}
.dashboard form {
  margin: 1rem 0.1rem;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  border: solid 2px rgb(179, 178, 178);
}
.err {
  text-align: center;
}
.success {
  background: rgb(214, 255, 214);
  padding: 1rem;
  border-radius: 5px;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.success .btn {
  background: none;
  padding: 0;
  margin: 0;
  color: inherit;
  font-size: 18px;
  font-weight: lighter;
}
@media screen and (min-width: 1000px) {
  .dashboard {
    width: 900px;
    margin: 1rem auto;
  }
}
</style>