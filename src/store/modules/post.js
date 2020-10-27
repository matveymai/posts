export default {
    state: {
        posts: []
    },
    getters: {
        allPosts(state){
            return state.posts
        },
        postsCount(state, getters){
            return getters.allPosts.length
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, post){
            state.posts = [post, ...state.posts]
        }
    },
    actions: {
       async fetchPosts({commit}, limit=3) {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
            )
            const posts = await response.json()
            this.posts = posts

           commit('updatePosts', posts)
        }
    },
}