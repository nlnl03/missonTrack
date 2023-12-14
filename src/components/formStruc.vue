<template>
  <!-- <div class="title" v-if="isLoading">צ'ק ליסט יציאה לתקלה</div>
  
  <loadingSpinner v-if="!isLoading"/> -->

  <div class="main-form">
    <q-form class="q-gutter-md" @submit.prevent="triggerFunction">
      <div class="flex-inputs" v-for="(item, index) in formData" :key="index">
        <div v-if="item.type == 'radio'" style="margin-top: 30px">
          <q-select
            :label="item.label"
            behavior="dialog"
            filled
            v-model="item.value"
            :options="item.options"
            class="radio-inputs"
            :rules="[(val) => (val && val.length > 0) || 'זהו שדה חובה.']"
          />
          <!-- <q-radio
            v-for="(name, index) in item.options"
            :key="index"
            v-model="item.value"
            :val="name"
            :label="name"
            color="white"
            class="radio-inputs"
          /> -->
        </div>

        <div class="input-text" v-if="item.type == 'text'">
          <q-input
            dir="rtl"
            filled
            v-model="item.value"
            type="number"
            color="white"
            :label="item.label"
            bg-color="light-grey"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'זהו שדה חובה.']"
          />
        </div>

        <div class="q-pa-md" v-if="item.type == 'checkbox'" ref="checkBoxVal">
          <label style="text-align: right; margin-bottom: 20px"
            >{{ item.label }}:</label
          >
          <q-checkbox
            v-for="(option, index) in item.options"
            :key="index"
            v-model="option.checked"
            @change="validateCheckbox"
            keep-color
            :label="option.opt"
            class="checkbox"
            :rules="[option.checked || 'זהו שדה חובה.']"
          />
        </div>
      </div>

      <div class="submit-btn">
        <q-btn
          class="submit-btn"
          label="המשך"
          type="continue"
          color="primary"
         />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "outForm",
  components: {},
  props: {
    formData: Array,
    triggerFunction: {
      type: Function,
      required: true,
    },
    index: Number,
  },
  data() {
    return {
      exitCheckList: [],
      numOfFacility: null,
      isLoading: false,
      isCheckedValid: false,
    };
  },
  methods: {
    validateCheckbox() {
      console.log("djchdch");
    },
    goNextBtn() {
      console.log(this.isCheckedValid);
    },
  },
  beforeMount() {
    //  setTimeout(() => {
    //   this.isLoading = true;
    // }, 700);
  },
};
</script>

<style scoped>
.submit-btn {
  position: relative;
  margin-top: 5px;
  margin-bottom: 7%;
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
  min-height: 80vh;
  font-size: 30px;
}

.q-gutter-md {
  margin: 0 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(234, 228, 228, 0.301);
  background-color: rgba(0, 0, 0, 0.8);
}
.flex-inputs {
  width: 85%;
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
