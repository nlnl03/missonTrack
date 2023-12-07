<template>
  <div class="spinner" v-if="!isLoad">
    <q-spinner-hourglass color="white" size="5em" />
  </div>

  <mainAccordion v-if="isLoad" />
</template>

<script>
import mainAccordion from "@/components/mainAccordion.vue";
export default {
  components: {
    mainAccordion,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  beforeMount() {
    setTimeout(() => {
      this.isLoad = true;
    }, 1000);
  },
};
</script>

<style scoped>
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
}
</style>
