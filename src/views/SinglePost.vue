<template>
  <div class="single-post" v-if="blog">
    <button class="btn" @click="goBack">￩ BACK</button>
    <div class="card box-shadow">
      <div class="card-title">
        <p>{{blog.title}}</p>
      </div>
      <div class="card-body">
        <p>{{blog.content}}</p>
      </div>
      <div class="card-dets">
        <p><span class="dot"></span>{{blog.author}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Single Post',
  props: ['id'],
  data() {
    return {
      blog: null
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showBlog() {
      firebase.firestore().collection('blogs').doc(this.id).get().then(doc => {
        const data = {
          'id': doc.id,
          'title': doc.data().title,
          'author': doc.data().author,
          'content': doc.data().content,
        }
        this.blog = data;
      })
    }
  },
  mounted() {
    this.showBlog()
  }
}
</script>

<style scoped>
.card {
  margin: 1rem 0.1rem;
  border-radius: 5px;
  padding: 1rem;
}
.card .card-title p {
  font-weight: bold;
}
.card .card-body {
  margin: 1rem 0;
  line-height: 2;
  text-align: justify;
}
.card .card-dets p {
  font-size: 13px;
  display: flex;
  align-items: center;
}
span {
  height: 4px;
  width: 4px;
  background: #2c3e50;
  margin-right: 0.5rem;
  border-radius: 100%;
}
@media screen and (min-width: 1000px) {
  .single-post {
   width: 800px;
   margin: 1rem auto;
  }
}
</style>