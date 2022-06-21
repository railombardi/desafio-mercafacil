import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "characters",
    component: () => import("../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "characterDetails",
    component: () => import("../views/CharacterDetails.vue"),
  },
  {
    path: "/locations",
    name: "locations",
    component: () => import("../views/Locations.vue"),
  },
  {
    path: "/locations/:id",
    name: "locationDetails",
    component: () => import("../views/LocationDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
