<template>
  <div class="title">צ'ק ליסט יציאה לתקלה</div>
  <loadingSpinner v-if="!isLoading"/>
  
 <div class="main-form" v-if="isLoading">
   <q-form class="q-gutter-md">
    <div class="flex-inputs">
      <div class="q-pa-md">
        <label style="text-align:right; margin-bottom:20px">שם הטכנאי/ת שיוצא/ת למשימה:</label>
          <q-radio
            v-for="(name, index) in names"
            :key="index"
              v-model="nameVal" 
              :val="name"
              :label="name" 
              color="white"
              class="radio-inputs"
          />
          
       </div>

     <q-input
        dir="rtl"
         filled
         v-model="numOfFacility"
         type="number"
         color="white"
         label="מספר המתקן"
         bg-color="light-grey"
         lazy-rules
          :rules="[val => val && val.length > 0 || 'זהו שדה חובה.']"
       />
     </div>
   </q-form>
 </div>

 
 </template>

<script>
import loadingSpinner from '../components/loadingSpinner.vue'
export default {
 components:{
   loadingSpinner
 },
 data(){
   return{
    bgColor: `rgba(128, 128, 128, 0.9)`,
    names:['אביב גנון','איתי גרנות מור','נאור שמסיאן','מקסים דשבסקי','מתן ההברמן'],
    nameVal:'',
    numOfFacility:null,
    isLoading: false,
    vsal:[
      {fdfdf:'fdffd'},
      this.nameVal,
    ]
  }
 },
 methods:{

 },
 beforeMount(){
  setTimeout(() => {
   this.isLoading = true; // Set to false when data loading is complete
  }, 1000);
 }
}
</script>

<style scoped>
.title{
    font-size: 35px;
  font-weight: 700;
  color: white;
  margin: 50px 0;

}
.main-form{
  display: flex;
  justify-content: center;
  min-height: 80vh;
  font-size: 30px;
}

.q-gutter-md{
  margin: 0 !important;
  width: 92%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
    background-color: rgba(0,0,0,0.5);
}
.flex-inputs{
  width: 80%;
  margin:5% 0;
  color: white;
}
 .q-pa-md{
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
}
 .radio-inputs{
  margin-bottom: 5%;
 }
</style>