import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import SecView from "../views/Android/SecondViewAndroid.vue";
import Mac from "../views/Mac/SecondViewApple.vue";
import Windows from "../views/Windows/SecondViewWindows.vue";
import Android from "../views/AndroidselectionView.vue";
import About from "../views/AboutView.vue";
import Member from "../views/MemberView.vue";
import Learning from "../views/Android/Stepbystep/LearningstepsView.vue";
import Guide from "../views/Android/Stepbystep/ScreennavstepsView.vue";
import StartupProblem from "../views/Android/Stepbystep/StartupProblemsView.vue";
import Calender from "../views/Android/Stepbystep/CalenderView.vue";
import ProCamera from "../views/Android/Stepbystep/ProCameraView.vue";
import quiz from "../views/Android/quizShit.vue";
import DownloadView from "../views/Android/Stepbystep/DownloadView.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
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
    component: Calender,
  },
  {
    path: "/ProCamera",
    component: ProCamera,
  },
  {
    path: "/DownloadApp",
    component: DownloadView,
  },
  {
    path: "/quiz",
    component: quiz,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
