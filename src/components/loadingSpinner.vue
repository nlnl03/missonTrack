<template>
  <!-- <div>
    <q-spinner class="spinner" size="70px" color="white" />
  </div> -->

  <div>
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name: "loadingSpinner",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* .spinner {
  display: flex;
  justify-content: center;
} */

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #ffffff transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
