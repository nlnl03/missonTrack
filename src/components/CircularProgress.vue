<template>
    <q-circular-progress
      show-value
      class="text-white q-ma-md"
      :value="step *20 "
      size="90px"
      reverse
      font-size="16px"
      :thickness="0.15"
      color="orange"
      center-color="transparent"
    >
   {{step }} מתוך 5
    </q-circular-progress>
  </template>
  
  <script>
  export default {
    name: "StepProgress",
    props: {
      step: {
        type: Number,
        required: true
      },
      title:{
        type:String,
        required:true
      },
      subTitle:{
        type:String,
        required:true,
      }
    },
    computed: {
      progressValue() {
        return (this.step / 5) * 100;
      }
    }
  };
  </script>
  
  <style scoped>
  .q-circular-progress__svg circle {
    stroke:orange;
  }
  </style>
  