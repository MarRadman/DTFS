import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SecView from "../views/SecondView.vue";
import Android from "../views/androidselectionview.vue";
import About from "../views/AboutView.vue";
import Member from "../views/MemberView.vue";

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
    path: "/secView",
    component: SecView,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/member",
    component: Member,
  },
  {
    path: "/android",
    component: Android,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
