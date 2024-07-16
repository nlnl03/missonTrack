<template>
  <!-- <div class="title" v-if="isLoading">צ'ק ליסט יציאה לתקלה</div>
  
  <loadingSpinner v-if="!isLoading"/> -->

  <div class="main-form">
   
    <q-form class="q-gutter-md" @submit.prevent="triggerFunction">
      
    
      <div class="flex-inputs" v-for="(item, index) in Object.keys(formPlaceholderData)" :key="index">
        <div v-if="dropDownFields.includes(item)" >
          <q-select
            :label="labels[item]"
            behavior="dialog"
            filled
          :model-value="formData[item]"
          @update:modelValue="clickHandler($event,item)"
            :options="formPlaceholderData[item]"    
            class="custom-select"
            :rules="[(val) => (val && val.length > 0) || 'זהו שדה חובה.']"
          >

          

        </q-select>
       
        </div>
        <button class="approve-btn" v-if="buttons.includes(item)"> 
          {{ labels[item] }}
          <q-icon name="access_time" class="q-mt-sm" />

        </button>
        <div class="q-pa-md" v-if="checkboxFields.includes(item)" ref="checkBoxVal">
          <label style="text-align: right; margin-bottom: 20px"
            >{{ labels[item] }}:</label          >
          <q-checkbox color="orange"
            v-for="(option, index) in formPlaceholderData[item]"
            :key="index"
            @update:model-value="checkboxClickHandler($event,item,option)"
            keep-color
            :model-value="formData[item][option]"
            :label="option"
            class="checkbox"
            :rules="[formData[item][option] || 'זהו שדה חובה.']"
          />
        </div>
      </div>
     
      <div  class="submit-btn-container">
        <q-btn
          class="submit-btn"
          label="המשך"
          type="continue"
          color="orange"
         />
      </div>
    </q-form>
  </div>
</template>

<script>
import {checkboxFields,labels,dropDownFields,buttons} from '../checkboxFields'

export default {
  name: "outForm",
  components: {},
  props: ["formData","formPlaceholderData",'triggerFunction',"index",'updateItems',"updateCheckbox"]
  ,
  data() {
    return {
      buttons,
      checkboxFields,
      dropDownFields,
      labels,
      exitCheckList: [],
      numOfFacility: null,
      isLoading: false,
      isCheckedValid: false,
    };
  },
  methods: {
    checkboxClickHandler(value,field,option){

      this.updateCheckbox({value,field,option})
    },
    clickHandler(event,data){
      console.log(event,data)
      this.updateItems({field:data,value:event})
    },
    validateCheckbox() {
    },
    goNextBtn() {
      console.log(this.isCheckedValid);
    },
  },
  beforeMount() {
  console.log(this.formData)
  console.log(this.formPlaceholderData)    
  },  
};
</script>

<style scoped>

.approve-btn{
  background-color: orange;
  color: black;
  border-radius: 50%;
  height: 300px;
  position: relative;
  left: 10%;
  width: 300px;
}
.submit-btn-container{
  /* margin-top: 5px; */
  position: fixed;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: linear-gradient(to top, black, transparent);

  bottom: 0%;
  display:flex;

  /* margin-bottom: 7%; */
}
.title {
  font-size: 35px;
  font-weight: 700;
  color: white;
  margin: 50px 0;
}
.main-form {
  display: flex;
  justify-content: center;
  max-height: 65vh;
  font-size: 30px;
  overflow-y: auto;
}

.q-gutter-md {
  margin: 0 !important;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid rgba(234, 228, 228, 0.301);
  background-color: rgba(0, 0, 0, 0.8); */
}
.flex-inputs {
  width: 90%;
  color: white;
  text-align: left;
}
.q-pa-md {
  display: flex;
  flex-direction: column;
  /* margin-bottom: 5%; */
  padding: 16px 5px !important;
}
.radio-inputs,
.checkbox {
  margin-bottom: 4%;
  font-size: 20px;
}
</style>
