<template>
  <div class="title">צ'ק ליסט יציאה לתקלה</div>
  <loadingSpinner v-if="!isLoading"/>
  
 <div class="main-form" v-if="isLoading">
   <q-form class="q-gutter-md">
    <div class="flex-inputs" v-for="(item, index) in exitCheckList" :key="index" >
      <div class="q-pa-md" v-if="item.type == 'radio'">
        <label style="text-align:right; margin-bottom:20px">{{ item.label }}:</label>
          <q-radio
            v-for="(name,index) in item.options" :key="index"
              v-model="item.value" 
              :val="name"
              :label="name" 
              color="white"
              class="radio-inputs"
          />
          
       </div>

      <div class="input-text" v-if="item.type == 'text'">
        <q-input
            dir="rtl"
            filled
            v-model="item.value"
            type="number"
            color="white"
            label="מספר המתקן"
            bg-color="light-grey"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'זהו שדה חובה.']"
          />
      </div>

      <div class="q-pa-md" v-if="item.type == 'checkbox'">
        <label style="text-align:right; margin-bottom:20px">{{ item.label }}:</label>
        <q-checkbox
          v-for="(option,index) in item.options" :key="index"
            v-model="option.checked" 
            keep-color
          :label="option.opt"
           
           class="checkbox"
        />

      </div>
    </div>
  </q-form>
 </div>

 
 </template>

<script>
import axios from 'axios'
import loadingSpinner from '../components/loadingSpinner.vue'
export default {
 components:{
   loadingSpinner
 },
 data(){
   return{
    exitCheckList:[],
    numOfFacility:null,
    isLoading: false,
  }
 },
 methods:{
    async getExitCheckList(){
       const apiBaseUrl = "https://caoghxw10k.execute-api.us-east-1.amazonaws.com/dev/items";
        try {
            const response = await axios.get(apiBaseUrl)
            this.exitCheckList = response.data[0]["exitCheckList"]
            console.log(this.exitCheckList)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }
 },
  async beforeMount(){
     await this.getExitCheckList()
      setTimeout(() => {
          this.isLoading = true;  
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(0,0,0,0.5);
}
.flex-inputs{
  width: 80%;
   color: white;
}
 .q-pa-md{
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
}
 .radio-inputs, .checkbox{
  margin-bottom: 4%;
  font-size: 20px;
 }
 /* .checkbox{
   } */
</style>