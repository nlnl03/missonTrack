<template>
  <!-- <router-link to="/" class="home-btn">
    <q-icon
      name="fas fa-arrow-alt-circle-left fa-rotate-180"
      size="35px"
      color="white"
    ></q-icon>
  </router-link> -->

  <HorizontalTimeline
    :timelineItem="timelineItems[stepNumber]"
    :stepNumber="stepNumber+1"
    />

  <div class="q-pa-md">
    <div class="accordion">
  
     
            <formStruc :key="index"   v-for="(step, index) in formPlaceholderData"
              v-show="index==stepNumber" 
              :updateItems="updateItems"
              :formPlaceholderData="step"
              :updateCheckbox="updateCheckbox"
              :index="index"
              :formData="formData"
              :triggerFunction="goNextBtn"
            />
    
    </div>
  </div>
</template>

<script>
// import LowerNavbar from "./LowerNavbar.vue";
import axios from "axios";
import formStruc from "./formStruc.vue";
import HorizontalTimeline from "./HorizontalTimeline.vue";
import { checkboxFields} from '../checkboxFields'
export default {
  name: "mainAccordion",
  components: {   
    formStruc,
    // LowerNavbar,

    HorizontalTimeline,
  },
  data() {
    return {
      timelineItems: [
        {
          title: "צ'ק ליסט יציאה לתקלה",
          subTitle: "יציאה למשימה",
        },
        {
          title: "יציאה מהקרייה",
          subTitle: "אנא אשר/י כי ברצונך לצאת משטח הקרייה",
        },
        {
          title: "הגעה למתקן",
          subTitle: "אנא אשר/י כי הגעת למתקן המיועד",
        },
        {
          title: "סיום משימה",
          subTitle: "אנא אשר/י שסיימת את המשימה",
        },
        {
          title: "יציאה מהמתקן",
          subTitle: "אנא אשר שיצאת מהמתקן",

        },
        {
          title: "הגעה לבסיס",
          subTitle: "אנא אשר/י כי הגעת לבסיס הקרייה",
        
        },
        // Add more items as needed
      ],
      expandedItems: [],
      formData:{},
      formPlaceholderData: [],
      isLoad: [],
      itemToAllow: 0,
      ite: 0,
      stepNumber:0
    };
  },
  methods: {
    updateCheckbox({value,field,option}){
    console.log(value,field,option)
      this.formData[field][option] = value  

    },
    updateItems({field,value}){
      console.log({field,value})
      this.formData[field] = value
    },
    showForm(url, index) {
      this.ite = index;

      if (index == 0) {
        this.triggerForm(url, index);
      }
    },

    openAuto(index) {
      var localIndex = JSON.parse(localStorage.getItem("accordionIndex"));
      setTimeout(() => 1000);

      return index === localIndex;
    },

    triggerForm(url, index) {
      console.log("current index:", index);
      localStorage.setItem("accordionIndex", index);
      this.expandedItems[index] = !this.expandedItems[index];
      console.log(this.expandedItems);
      console.log(url);

      if (this.expandedItems[index]) {
        this.getForms(url, index);
      } else {
        this.isLoad[index] = false;
      }
    },

    async goNextBtn() {
    
      this.stepNumber++

      //trigger post func

      
    },

    async getForms(url, index) {
      console.log(index);
      if (index != 0 && index != 4) {
        const label = this.timelineItems[index].label;
        this.$swal({
          title: label,
          icon: "warning",
          allowOutsideClick: false,
          confirmButtonText: " אשר/י",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        }).then((res) => {
          if (res.isConfirmed) {
            this.goNextBtn();
          }
        });
      } else {
        try {
          const response = await axios.get(url);
          this.formPlaceholderData = response.data;
          this.formPlaceholderData = this.formPlaceholderData.sort((a, b) => a.id - b.id);
          console.log(this.formPlaceholderData);

          this.isLoad[index] = true;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    },
    allowNext(index) {
      console.log(this.itemToAllow);
      if (index != this.itemToAllow) {
        console.log("working");
        return true;
      }
      console.log("yesss");
    },

 

    async postFinalData() {
      try {
        // Replace this URL with your actual DynamoDB API endpoint
        const apiUrl =
          "https://e72i2m4kxg.execute-api.us-east-1.amazonaws.com/dev/items";

        // Example data to be posted to DynamoDB
        const data = {
          name: this.formPlaceholderData[0].value,
          id: this.ite,
          exitCheckList: this.formPlaceholderData,
          isOutsideOfKiria: false,
          isArrivedToFacility: false,
          isFinished: false,
          isOut: false,
          isArrivedToKiria: false,
        };

        // Making a POST request using Axios and async/await
        const response = await axios.post(apiUrl, data);

        // Handle the response
        console.log("Data posted to DynamoDB:", response.data);
        // You can perform further actions based on the response if needed
      } catch (error) {
        // Handle any errors that occurred during the POST request
        console.error("Error posting data to DynamoDB:", error);
        // You can display an error message or perform error-specific actions
      }
    },
  },

  created() {
    // Initialize expandedItems with the same length as items and set all to false
    this.expandedItems = new Array(this.timelineItems.length).fill(false);
    this.isLoad = new Array(this.timelineItems.length).fill(false);

  },

  computed: {
    currentIndex() {
      return this.ite;
    },
  },
  
  async beforeMount() {
    let items;
    try{
       items = await axios.get(process.env.NODE_ENV== 'development'?'http://localhost:3000/placeholders' : '/placeholders' )
       this.formPlaceholderData = items.data
       for (let step of this.formPlaceholderData){
            delete step['id']
            console.log(step)
         for (const field of Object.keys(step)){
          if(!checkboxFields.includes(field)){
            this.formData[field] = ''
          }else{
            this.formData[field] ={}
            step[field].forEach(element => {
              this.formData[field][element] = false 
            });
          }
         }
        }
      }catch(err){
        console.log(err)
    }
  }, 
};
</script>

<style scoped>
.q-pa-md {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 35px;
}
.accordion {
  width: 98%;
  /* background-color: rgba(255, 255, 255, 0.664); */
  border-radius: 10px;
}
.q-focus-helper,
.q-focusable,
.q-manual-focusable,
.q-hoverable:first-child {
  border-top-right-radius: 10px !important ;
  border-top-left-radius: 10px !important;
}
.home-btn {
  position: absolute;
  left: 5%;
  top: 5%;
}
.loading-page {
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
