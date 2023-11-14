<template>
  <!-- <div class="title" v-if="isLoading">צ'ק ליסט יציאה לתקלה</div>
  
  <loadingSpinner v-if="!isLoading"/> -->

 <div class="main-form"  >
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
 export default {
  name:'outForm',
 components:{
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
            this.exitCheckList = response.data
            console.log(this.exitCheckList)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    },
    async get(){
      const url = "https://3cqhug1vdk.execute-api.us-east-1.amazonaws.com/dev/items"
      const res = await axios.get(url)
      console.log(res.data)
    }
 },
  async beforeMount(){
     await this.getExitCheckList()
      setTimeout(() => {
          this.isLoading = true;  
      }, 700);
      this.get()
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(234, 228, 228, 0.301);
  background-color: rgba(0,0,0,0.8);
}
.flex-inputs{
  width: 85%;
   color: white;
}
 .q-pa-md{
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
      padding: 16px 5px !important;

}
 .radio-inputs, .checkbox{
  margin-bottom: 4%;
  font-size: 20px;
 }
 /* .checkbox{
   } */
</style>