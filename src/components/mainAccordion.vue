<template>
  <router-link to="/" class="home-btn">
    <q-icon name="fas fa-arrow-alt-circle-left fa-rotate-180" size="35px" color="white"></q-icon>
  </router-link>

  <div class="q-pa-md" >
    <div class="accordion">
     
      <q-expansion-item
        v-for="(item, index) in timelineItems"
        :key="index"
        :label="item.date"
         @click="goToPage(item,index)"
        :ref="item+index"
        :default-opened="index === 0"
       >
        <q-card style="background:none">
          <q-card-section>
            <component :is="item.component" />
             
          </q-card-section>
        </q-card>
      </q-expansion-item>
    
    </div>
  </div>

</template>

<script>
import outForm from './outForm.vue'
export default {
    name:'mainAccordion',
    components:{
        outForm
    },
  data() {
    return {
      timelineItems: [
        {
          date: "צ'ק ליסט יציאה לתקלה",
          content: 'Content for item 1',
          component:'outForm',
          pageRoute: '/page1', // Route path for page 1
        },
        {
          date: 'Date 2',
          content: 'Content for item 2',
          pageRoute: '/page2', // Route path for page 2
          component:'loadingSpinner',
        },
        // Add more items as needed
      ],
      isOpen:[],
      ite:0,
     }
  },
  methods: {
    goToPage(item, index) {
      this.ite = index
      this.isOpen[index] = !this.isOpen[index]
       console.log(this.isOpen)

      
       
    },
  },
  beforeMount(){
    this.isOpen.length = this.timelineItems.length
      // for(var i=0; i<this.isOpen.length;i++){
      //   this.isOpen[i] = false
      //   console.log(this.isOpen)
      // }
        console.log(this.isOpen)
  },
    
};
</script>

<style scoped>
.q-pa-md{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 80px;
 
}
.accordion{
   width: 98%;
   background-color: rgba(255, 255, 255, 0.664);
   border-radius: 10px
}
 .q-focus-helper, .q-focusable, .q-manual-focusable, .q-hoverable:first-child{
     border-top-right-radius: 10px !important ;
    border-top-left-radius: 10px !important;
}
.home-btn{
  position: absolute;
  left: 5%;
  top: 5%;
  }
 </style>
