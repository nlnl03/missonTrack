<template>
 <div class="main-form">
   <q-form class="q-gutter-md">
    <div class="flex-inputs">
     <q-input
        dir="rtl"
         filled
         v-model="numOfFacility"
         type="number"
         color="white"
         bg-color="white"
         label="מספר המתקן"
         lazy-rules
         class="inputs"
         :rules="[val => val && val.length > 0 || 'זהו שדה חובה.']"
       />
     </div>
   </q-form>
 </div>
 
 
 </template>

<script>
export default {
data(){
 return{
  bgColor: '#ffffff4a',
  name:'',
  numOfFacility:null
 }
}
}
</script>

<style scoped>
.main-form{
 display: flex;
 justify-content: center;
  min-height: 80vh;

}

.q-gutter-md{
 margin: 0 !important;
 width: 85%;
 display: flex;
 justify-content: center;
 border-radius: 20px;
  background-color: rgba(0,0,0,0.5);
  }
.flex-inputs{
  width: 80%;
  margin:5% 0;
 
}
 
</style>