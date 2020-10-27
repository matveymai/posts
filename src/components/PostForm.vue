<template>
  <div id="app">
    <form @submit.prevent="submit">
      <input type="text" placeholder="title" v-model="title">
      <input type="text" placeholder="body" v-model="body">
      <button type="submit">Create Post</button>
      <hr>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "PostForm",
  data(){
    return{
      title: '',
      body: '',
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit(){
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      });
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped>

form{
  width: 400px;
}

input{
  display: block;
  width: 400px;
  border: 1px solid #2c3e50;
  border-radius:3px;
  padding: 10px;
  margin-bottom: 10px;
}

hr{
  margin-top: 25px;
}

</style>