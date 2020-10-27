<template>
  <div id="app">
    <PostForm />
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in allPosts"
                      :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from './components/PostForm.vue'

export default {
  name: 'App',
  computed: mapGetters(['allPosts','postsCount']),
  methods: mapActions(['fetchPosts']),
  components: { PostForm },
  created() {
    this.fetchPosts()
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #2c3e50;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
