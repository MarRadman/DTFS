import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import SecView from "../views/Android/SecondViewAndroid.vue";
import Mac from "../views/SecondViewApple.vue";
import Windows from "../views/SecondViewPC.vue";
import Android from "../views/AndroidselectionView.vue";
import About from "../views/AboutView.vue";
import Member from "../views/MemberView.vue";
import Learning from "../views/Android/Stepbystep/LearningstepsView.vue";
import Guide from "../views/Android/Stepbystep/ScreennavstepsView.vue";
import StartupProblem from "../views/Android/Stepbystep/StartupProblemsView.vue";
import Calender from "../views/Android/Stepbystep/CalenderView.vue"
import ProCamera from "../views/Android/Stepbystep/ProCameraView.vue";

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
  },
  {
    path: "/learning",
    component: Learning,
  },
  {
    path: "/mac",
    component: Mac,
  },
  {
    path: "/win",
    component: Windows,
  },
  {
    path: "/Guide",
    component: Guide,
  },
  {
    path: "/StartupProblem",
    component: StartupProblem,
  },
  {
    path: "/Calender",
    component: Calender
  },
  {
    path: "/ProCamera",
    component: ProCamera
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
