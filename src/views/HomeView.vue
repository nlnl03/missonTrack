<template>
  <div class="main">
    <div class="start-mission-div">
      <router-link class="start-mission-btn" :to="{name:'newMission'}">
          <i class="fas fa-plus-circle"></i>
          <span class="start-mission-text">התחל משימה</span>
      </router-link>
  </div>
 </div>
</template>

<script>
// @ is an alias to /src
 
export default {
  name: 'HomeView',
  components: {
   }
}
</script>

<style scoped>
.main{
  display: flex;
  justify-content: center;
}
.start-mission-div{
  display: flex;
  justify-content: center;
  margin: 0 10%;
  width: 500px;
  padding: 1.5em;
  border-radius: 30px;
  background-color: rgba(0,0,0,0.4);
}
.start-mission-btn{
  color: white;
  text-decoration: none;
  font-size: 60px;
}
.start-mission-text{
  margin-left: 20px;
}
</style>