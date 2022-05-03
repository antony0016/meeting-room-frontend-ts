import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Calendar from "../views/Calendar.vue";
import Login from "../views/Login.vue";

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
  {
    path: "/Calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

router.beforeEach(async (to, from) => {
  console.log(to, from);
});

export default router;
