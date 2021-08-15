import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
//import Dashboard from "../views/Dashboard.vue";
import Editar from "../components/Editar.vue";
import Crear from "../components/Crear.vue";
import Listar from "../components/Listar.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
    path: "/editar",
    name: "Editar",
    component: Editar,
  },
  {
    path: "/crear",
    name: "Crear",
    component: Crear,
  },
  {
    path: "/listar",
    name: "Listar",
    component: Listar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
