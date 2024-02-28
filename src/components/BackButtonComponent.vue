<template>
  <button v-show="shouldShowBackButton()"
          type="button"
          @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          class="my-5 btn btn-outline-success">
    Back
  </button>
</template>

<script>
export default {
  name: "BackButtonComponent",
  methods: {
    hasHistory () {
      return window.history.length > 2
    },
    shouldShowBackButton () {
      const pagesToHide = ['/','/login','/member','/about'] // Lägg till mer här om det är sidor vi inte vill ha en tillbaka knapp på.

      return !pagesToHide.includes(this.activeView);
    }
  },
  props: {
    activeView: String,
  },
};
</script>
