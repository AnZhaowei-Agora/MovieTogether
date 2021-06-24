import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/film",
    name: "Film",
    component: () => import(/* webpackChunkName: "film" */ "../views/Film.vue"),
    props: (route) => ({
      channel: route.query.channel,
      fileUrl: route.params.fileUrl,
    }),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
