<template>
    <div class="home-title">עקובי</div>

  <div class="button">
    <div class="start-mission-div">
      <router-link class="start-mission-btn" :to="{name:'newMission'}">
          <i class="fas fa-plus-circle"></i>
          <span class="start-mission-text">התחל משימה</span>
      </router-link>
  </div>
 </div> 

    <div class="img">  
      
      <img class="zameret-icon" src="../assets/383zameret.png" alt="">
      <span class="credit">פותח ע"י נעם לביא</span>
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
.home-title{
  font-size: 100px;
  font-weight: 700;
  color: white;
  margin: 50px 0;
}
.button{
  display: flex;
  justify-content: center;
 }
.start-mission-div{
  display: flex;
  justify-content: center;
  margin: 0 10%;
   padding: 1.5em 2.8em;
   border-radius: 30px;
  background-color: rgba(0,0,0,0.5);
}
.start-mission-btn{
  color: white;
  text-decoration: none;
  font-size: 30px ;
 }
.start-mission-text{
  margin-left: 20px;
}
.img{
  display: flex;
  position: absolute;
  bottom: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
 }
.zameret-icon{
  width: 40px;
}
.credit{
  margin-left: 12px;
  font-size: 20px;
  margin-top: 20px;
}
</style>