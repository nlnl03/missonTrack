<template>
  <div class="row-flex">
    <div class="rows">
      <div
        class="order-tracking"
        v-for="(item, index) in timelineItems"
        :key="index"
        :ref="`divRef${index}`"
      >
        <span class="is-complete"></span>
        <p>
          {{ item.timeLineLabel }}
          <br />
          <span>{{ item.date }}</span>
        </p>
      </div>
      <!-- <div class="order-tracking completed">
     <span class="is-complete"></span>
       <p>
        יציאה מהקרייה
        <br>
        <span>Tue, June 25</span>
       </p>
    </div>
    <div class="order-tracking">
     <span class="is-complete"></span>
       <p>
        שלב 3
        <br>
        <span>Fri, June 28</span>
       </p>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timelineItems: Array,
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    accessRefs() {
      var divRef = null;
      // var length = this.timelineItems.length
      console.log(this.currentIndex);
      if (this.currentIndex == 1) {
        divRef = this.$refs[`divRef${this.currentIndex - 1}`][0];
        divRef.classList.add("completed");
        divRef.style.setProperty(
          "--before-color",
          "linear-gradient(to right, #f7be16 75%, #27aa80 75%)"
        );
      } 
      else if (this.currentIndex == 2) {
        divRef = this.$refs[`divRef${0}`][0];
        divRef.style.setProperty(
          "--before-color",
          "linear-gradient(to right, #f7be16 50%, #27aa80 50%)"
        );
      }
       else if (this.currentIndex == 3) {
        divRef = this.$refs[`divRef${0}`][0];
        divRef.style.setProperty(
          "--before-color",
          "linear-gradient(to right, #f7be16 25%, #27aa80 25%)"
        );

      }
       else if (this.currentIndex == 4) {
        this.$refs[`divRef${1}`][0].classList.add("completed");
        divRef = this.$refs[`divRef${0}`][0];
        divRef.style.setProperty("--before-color", "#27aa80");
      }
       else if (this.currentIndex == 5) {
        divRef = this.$refs[`divRef${1}`][0];
        // divRef.classList.add("completed");
        divRef.style.setProperty(
          "--before-color",
          "linear-gradient(to right, #f7be16 25%, #27aa80 25%)"
        );
      }
       else if (this.currentIndex == 6) {
        this.$refs[`divRef${2}`][0].classList.add("completed");
        divRef = this.$refs[`divRef${1}`][0];
        divRef.style.setProperty("--before-color", "#27aa80");
      }
      console.log(divRef);
    },
  },
  beforeMount() {
    console.log(this.currentIndex);
  },
  mounted() {
    this.accessRefs();
    this.$watch("currentIndex", () => {
      this.accessRefs();
      console.log("yesss2");
    });
  },
};
</script>

<style scoped>
.row-flex {
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.rows {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 95%;
}
.order-tracking {
  text-align: center;
  width: 33.33%;
  position: relative;
  display: block;
}
.order-tracking .is-complete {
  display: block;
  position: relative;
  border-radius: 50%;
  height: 27px;
  width: 27px;
  border: 0px solid #afafaf;
  background-color: #f7be16;
  margin: 0 auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
  z-index: 2;
}

.order-tracking .is-complete::before {
  display: block;
  position: absolute;
  content: "";
  height: 7px;
  width: 15px !important;
  top: 5px;
  bottom: 0;
  left: 14px !important;
  margin: auto 0;
  border: 0px solid #afafaf;
  border-width: 0px 2px 2px 0;
  transform: translate(-50%, -50%) rotate(410deg);
  opacity: 0;
}
.order-tracking.completed .is-complete {
  border-color: #27aa80;
  border-width: 0px;
  background-color: #27aa80;
}
.order-tracking.completed .is-complete::before {
  border-color: #fff;
  border-width: 0px 3px 3px 0;
  width: 7px;
  left: 11px;
  opacity: 1;
}
.order-tracking p {
  color: #a4a4a4;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 20px;
}
.order-tracking p span {
  font-size: 14px;
}
.order-tracking.completed p {
  color: #fff;
}
.order-tracking::after {
  content: "";
  display: block;
  height: 3px;
  width: calc(100% - 40px);
  background-color: #f7be16;
  top: 13px;
  position: absolute;
  right: calc(-50% + 20px);
  z-index: 0;
}
.order-tracking:last-child::after {
  display: none;
}
.order-tracking:after {
  background: var(--before-color, #f7be16);
}

*,
::after,
::before {
  box-sizing: border-box !important;
}
</style>
