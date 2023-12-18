<template>
  <div class="background-opacity"></div>
  <router-view />
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      currentRouteName: null,
      items: [],
      sortedItems: [],
      isload: false,
    };
  },
  methods: {},
  beforeMount() {
    // this.fetchItemsSortedByID()
  },

  watch: {
    $route() {
      this.currentRouteName = this.$route.fullPath;
      console.log(this.currentRouteName);
    },
  },
};
</script>

<style>
.q-expansion-item,
.q-card,
.q-card-section {
  transition: none !important;
  animation: none !important;
}

@font-face {
  font-family: OpenSans;
  src: url("@/assets/OpenSans.ttf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 }

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  position: absolute;
}

*:not(i),
body:not(i) {
  font-family: OpenSans !important;
}
.background-opacity {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/kiria.jpeg");
  background-size: cover;
  z-index: -1;
  /* background-attachment: fixed; */
  background-position: 50%;
  background-repeat: no-repeat;
}
.background-opacity::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.rtl-input .q-field__label {
  text-align: right !important;
}

.q-radio__inner {
  color: gray !important;
}
.q-field--filled .q-field__control {
  background: rgba(71, 71, 71, 0.7) !important;
}
.q-field__label,
.q-field__native,
.q-field__input {
  color: white !important;
}
.q-field__label {
  opacity: 0.8;
  margin-bottom: 20px;
}
.q-field__label::after {
  opacity: 1;
}
.q-field--labeled .q-field__native,
.q-field--labeled .q-field__prefix,
.q-field--labeled .q-field__suffix {
  padding: 15px 0 !important;
}

.q-item__section--side > .q-icon {
  color: black !important;
}
.q-item {
  min-height: 70px !important;
}
/* .q-expansion-item:not(:last-child){
  border-bottom: 2px solid rgb(131, 131, 131)
} */
.q-card__section--vert {
  padding: 0px !important;
}
.q-item__label {
  font-size: 18px;
}
.q-checkbox__bg {
  border: 2px solid rgb(122 121 121 / 70%) !important;
}
.q-gutter-x-md > *,
[dir="rtl"] .q-gutter-md > * {
  margin-right: 0 !important;
}

.prevent-swal-title {
  font-size: 1.1em !important;
}

.swal-confirm-button {
  background-color: #27aa80 !important;
}
.swal-popup {
  margin-bottom: 150px;
  height: 330px;
}
</style>
