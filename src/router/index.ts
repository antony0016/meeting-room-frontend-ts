import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Calendar from "../views/Calendar.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: Calendar,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
