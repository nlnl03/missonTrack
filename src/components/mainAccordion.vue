<template>
  <!-- <router-link to="/" class="home-btn">
    <q-icon
      name="fas fa-arrow-alt-circle-left fa-rotate-180"
      size="35px"
      color="white"
    ></q-icon>
  </router-link> -->

  <HorizontalTimeline />

  <div class="q-pa-md">
    <div class="accordion">
      <q-expansion-item
        :no-transition="true"
        v-for="(item, index) in timelineItems"
        :key="index"
        :label="item.title"
        @click="goToPage(item, index)"
        :ref="item + index"
        :disable="index!=0"
      >
        <q-card style="background: none" :no-transition="true">
          <q-card-section :no-transition="true">
            <div class="loading-page" v-if="!isLoad[index]">
              <loadingSpinner />
            </div>
            <formStruc :formData="formData" v-if="isLoad[index]" />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import formStruc from "./formStruc.vue";
import loadingSpinner from "./loadingSpinner.vue";
import HorizontalTimeline from "./HorizontalTimeline.vue";

export default {
  name: "mainAccordion",
  components: {
    formStruc,
    loadingSpinner,
    HorizontalTimeline,
  },
  data() {
    return {
      timelineItems: [
        {
          title: "צ'ק ליסט יציאה לתקלה",
          component: "formStruc",
          url: "https://caoghxw10k.execute-api.us-east-1.amazonaws.com/dev/items",
        },
        {
          title: "Date 2",
          component: "loadingSpinner",
          url: "https://12iuf7y4al.execute-api.us-east-1.amazonaws.com/dev/exitForm",
        },
        // Add more items as needed
      ],
      isOpen: [],
      ite: 0,
      formData: [],
      isLoad: [],
      disableAcco: [],
    };
  },
  methods: {
    goToPage(item, index) {
      this.ite = index;
      this.isOpen[index] = !this.isOpen[index];
      console.log(this.isOpen);
      console.log(item);

      if (this.isOpen[index]) {
        this.getForms(item.url, index);
      } else {
        this.isLoad[index] = false;
      }
    },

    async getForms(url, index) {
      try {
        const response = await axios.get(url);
        this.formData = response.data;
        this.formData = this.formData.sort((a, b) => a.id - b.id);
        console.log(this.formData);

        this.isLoad[index] = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  beforeMount() {
    this.isOpen.length = this.timelineItems.length;
    this.isLoad.length = this.timelineItems.length;
    this.disableAcco.length = this.timelineItems.length;

    for (var i = 0; i < this.isOpen.length; i++) {
      this.isOpen[i] = false;
      this.isLoad[i] = false;
    }
    console.log("opening:" + this.isOpen);
    console.log("loading:" + this.isLoad);
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
  background-color: rgba(255, 255, 255, 0.664);
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
