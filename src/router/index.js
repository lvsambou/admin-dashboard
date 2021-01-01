import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/auth/SignIn";
import Request from "../views/auth/Request.vue";
import Recover from "../views/auth/Recover.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/",
    name: "signin",
    component: SignIn
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  // {
  //   path: "/signin",
  //   name: "signin",
  //   component: SignIn
  // },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/request",
    name: "request",
    component: Request
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  }



];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
