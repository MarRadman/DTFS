<template>
  <NavMenu />
  <div class="views">
    <router-view :key="$route.fullPath"/>
  </div>
  <BackButton :activeView="activeView"/>
  <Footer />
</template>

<script>
import NavMenu from "./components/NavMenuComponent.vue";
import Footer from "./components/FooterComponent.vue";
import BackButton from "./components/BackButtonComponent.vue";

export default {
  name: "App",
  components: {
    NavMenu,
    Footer,
    BackButton,
  },
  data() {
    return {
      activeView: null,
    };
  },
  watch: {
  $route(to) {
    this.activeView = to.path;
  },
}
};
</script>
