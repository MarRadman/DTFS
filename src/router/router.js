import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SecView from "../views/SecondView.vue";
<<<<<<< HEAD
import Andriod from "../views/androidselectionview.vue";
=======
import About from "../views/AboutView.vue";
import Member from "../views/MemberView.vue";
>>>>>>> 35abf052f24f203072cb262150cf835282427172

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
  {
<<<<<<< HEAD
    path: "/Andriod",
    component: Andriod,
=======
    path: "/about",
    component: About,
  },
  {
    path: "/member",
    component: Member,
>>>>>>> 35abf052f24f203072cb262150cf835282427172
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
