<template>
  <div class="home">
    <div class="cards">
      <div class="card box-shadow" v-for="blog in blogs" :key="blog.id">
        <router-link :to="{name: 'SinglePost', params: { id: blog.id }}">
          <div class="card-title">
            <p>{{ blog.title }}</p>
          </div>
          <div class="card-body">
            <p>{{ blog.content.slice(0, 200) + '...' }}</p>
          </div>
          <div class="card-dets">
            <p><span class="dot"></span>{{blog.author}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    fetchBlog() {
      firebase.firestore().collection('blogs').orderBy('title').get().then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            'id': doc.id,
            'title': doc.data().title,
            'author': doc.data().author,
            'content': doc.data().content,
          }
          this.blogs.push(data);
        })
      })
      
    }
  },
  created() {
    this.fetchBlog()
  }
}
</script>

<style scoped>
.cards {
  margin: 1rem 0;
}
.cards .card {
  margin: 1rem 0.1rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
}
.cards .card .card-title p {
  font-weight: bold;
  color: rgb(0, 45, 95);
}
.cards .card .card-body {
  margin: 1rem 0;
}
.cards .card .card-dets p {
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
  .cards { 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
}
</style>