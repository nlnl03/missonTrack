<template>
  <div class="q-pa-md" >
    <div class="accordion">
     
      <q-expansion-item
        v-for="(item, index) in timelineItems"
        :key="index"
        :label="item.date"
        
      >
        <q-card style="background:none">
          <q-card-section>
            <outForm />
            <q-btn
              color="primary"
              label="View Details"
              @click="goToPage(item.pageRoute)"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    
    </div>
  </div>

</template>

<script>
import outForm from '../views/outForm.vue'
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
          pageRoute: '/page1', // Route path for page 1
        },
        {
          date: 'Date 2',
          content: 'Content for item 2',
          pageRoute: '/page2', // Route path for page 2
        },
        // Add more items as needed
      ],
    };
  },
  methods: {
    goToPage(route) {
      // Navigate to the selected page
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.q-pa-md{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;

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

 </style>
