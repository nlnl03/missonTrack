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
        @click="showForm(item.url, index)"
        :ref="`expansionItem${index}`"
        :disable="allowNext(index)"
      >
        <q-card style="background: none" :no-transition="true">
          <q-card-section :no-transition="true">
            <div class="loading-page" v-if="!isLoad[index]">
              <loadingSpinner />
            </div>
            <formStruc
              :formData="formData"
              :index="index"
              v-if="isLoad[index]"
              :triggerFunction="goNextBtn"
            />
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
          title: "יציאה מהקרייה",
          component: "loadingSpinner",
          url: "",
        },
        {
          title: "Date 2",
          component: "loadingSpinner",
          url: "https://12iuf7y4al.execute-api.us-east-1.amazonaws.com/dev/exitForm",
        },
        // Add more items as needed
      ],
      expandedItems: [],
      formData: [],
      isLoad: [],
      itemToAllow: 0,
      ite: 0,
      url: "",
    };
  },
  methods: {
    showForm(url, index) {
      this.ite = index;
      this.url = url;
      console.log("ite:" + this.ite);

      if (index == 0) {
        this.triggerForm(url, index);
      }
    },
    triggerForm(url, index) {
      this.expandedItems[index] = !this.expandedItems[index];
      console.log(this.expandedItems);
      console.log(url);

      if (this.expandedItems[index]) {
        this.getForms(url, index);
      } else {
        this.isLoad[index] = false;
      }
    },
    goNextBtn() {
      this.itemToAllow++;
      console.log(this.itemToAllow);
      this.$refs[`expansionItem${this.ite}`][0].toggle();
      this.ite++;
      console.log(this.ite);
      if (this.ite < this.timelineItems.length - 1) {
        console.log(this.ite);
        this.$nextTick(() => {
          this.$refs[`expansionItem${this.ite}`][0].toggle();
          console.log(this.ite);
          if (this.ite != 0) {
            this.triggerForm(this.url, this.ite);
          }
        });
      }
    },

    async getForms(url, index) {
      console.log(index);
      if (index == 1) {
        this.$swal({
          title: "האם אתה בטוח ?",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "ביטול",
        }).then((res) => {
          if (res.isConfirmed) {
            this.goNextBtn();
          }
        });
      } else {
        try {
          const response = await axios.get(url);
          this.formData = response.data;
          this.formData = this.formData.sort((a, b) => a.id - b.id);
          console.log(this.formData);

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
  },

  beforeMount() {},
  created() {
    // Initialize expandedItems with the same length as items and set all to false
    this.expandedItems = new Array(this.timelineItems.length).fill(false);
    this.isLoad = new Array(this.timelineItems.length).fill(false);

    console.log("opening:" + this.expandedItems);
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
