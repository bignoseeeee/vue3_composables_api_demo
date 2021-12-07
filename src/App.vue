<template>
  <UserRepositories />
</template>

<script>
import { ref } from 'vue'
import UserRepositories from './components/UserRepositories.vue'

export default {
  name: 'App',
  components: {
    UserRepositories
  },
  setup () {
    const text = ref('')
    return {
      text
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
