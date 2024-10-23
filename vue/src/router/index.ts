import { createRouter, createWebHistory } from "vue-router";
import Page from "@/views/page/index.vue";
import Home from "@/views/home/index.vue";
const routes = [
  {
    key: "/",
    name: "components.clientMenu.home",
    path: "/",
    component: Home,
  },
  {
    key: "home",
    name: "components.clientMenu.home",
    path: "/home",
    component: Home,
  },
  {
    key: "page",
    name: "components.clientMenu.page",
    path: "/Page",
    component: Page,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, _, next) => {
  if (to.fullPath == "/") return next("/home");
  next();
});
export default router;
