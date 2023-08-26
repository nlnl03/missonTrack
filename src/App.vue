<template>
  <div id="app">
    <div class="app-header">
      <div class="app-logo">
        <img src="https://aws-amplify.github.io.images/Logos/Amplify-Logo-White.svg" alt="AWS Amplify">
      </div>
      <h1>Welcome to Amplify</h1>
    </div>
  </div>

  <amplify-authenticator>
    <div class="welcome">
      <h1>Hey, {{ user.username }}</h1>
      <amplify-sign-out></amplify-sign-out>
    </div>

    <div class="form-body">
      <form @submit.prevent>
        <button @click="getTodos" class="button">GET</button>
      </form>
    </div>
  </amplify-authenticator>
</template>

<script>
 import { AuthState, onAuthUIStateChange } from 'aws-amplify/ui-components'
//  import {API} from 'aws-amplify'
export default {
  name: 'App',
  data(){
    return{
      user:{}
    }
  },
  created(){
    onAuthUIStateChange((state, user) => {
      if(state === AuthState.SignedIn){
        this.user = user
        console.log(user)
      }
    })
  },
  methods:{
    getTodos(){
      console.log("getTodos")
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
