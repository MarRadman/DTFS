<template>
  <NavMenu />
  <router-view />
  <Footer />
</template>

<script>
import NavMenu from "./components/NavMenuComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavMenu,
    Footer,
  },
};
</script>
