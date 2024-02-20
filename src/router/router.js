import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SecView from "../views/SecondView.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/SecView",
    component: SecView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
