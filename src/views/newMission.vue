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

  mounted() {
    window.addEventListener("beforeunload", this.handlePageReload);
  },
  beforeUnmount() {
    window.addEventListener("beforeunload", this.handlePageReload);
  },

  beforeRouteLeave(to, from, next) {
    this.$swal({
      title: "האם את/ה בטוח/ה שברצונך לצאת מדף זה ?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "ביטול",
      confirmButtonText: "צא/י",
      reverseButtons: true,
      customClass: {
        title: "prevent-swal-title",
        confirmButton: "swal-confirm-button",
        popup: "swal-popup",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        next();
      } else {
        next(false);
      }
    });
  },

  methods: {
    handlePageReload(event) {
      event.preventDefault();
      event.returnValue = "";
    },
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
