import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pie",
    name: "Pie",
    component: () => import(/* webpackChunkName: "pie" */ "../views/Pie.vue")
  },
  {
    path: "/horizontal",
    name: "Horizontal",
    component: () =>
      import(/* webpackChunkName: "horizontal" */ "../views/Horizontal.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
