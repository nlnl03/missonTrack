<template>
 
   <router-view/>
</template>

<script>
import axios from 'axios'
 export default {
  name: 'App',
  data() {
    return {
      user: {}
    }
  },
  methods:{
    async fetchData() {
      const apiBaseUrl = 'https://caoghxw10k.execute-api.us-east-1.amazonaws.com/dev/items';

      try {
        const response = await axios.get(apiBaseUrl)
        console.log(response)
       } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

  },
  beforeMount() {
    this.fetchData()
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-image: url("@/assets/kiria.jpeg");
  background-attachment: fixed;
  background-position: 60%;
  background-repeat: no-repeat;
  background-size: cover; 
}
</style>
