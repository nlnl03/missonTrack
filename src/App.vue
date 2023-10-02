<template>
  <div class="background-opacity"></div>
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
@font-face {
  font-family: OpenSans;
  src: url('@/assets/OpenSans.ttf');
}
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
 *:not(i),body:not(i){
  font-family: OpenSans !important;
}
 .background-opacity{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/kiria.jpeg'); /* Replace with your image URL */
  background-size: cover;
  z-index: -1; /* Place the overlay behind other content */
  background-attachment: fixed;
  background-position: 60%;
  background-repeat: no-repeat;
  background-size: cover; 

}
.background-opacity::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust the alpha (last) value for opacity */
}

 .rtl-input .q-field__label {
  text-align: right !important;
 }

.q-radio__inner{
  color: gray !important;
}
.q-field--filled .q-field__control{
  background: rgba(71, 71, 71, 0.7) !important;

 }
 .q-field__label, .q-field__native, .q-field__input{
  color: white !important;
 }
 .q-field__label{
  opacity: 0.6;
  margin-bottom: 20px;
 }
 .q-field__label::after{
  opacity: 1;
 }
 .q-field--labeled .q-field__native, .q-field--labeled .q-field__prefix, .q-field--labeled .q-field__suffix{
  padding-top: 29px !important;
 }
  </style>
