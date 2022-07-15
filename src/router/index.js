import { createRouter, createWebHashHistory } from "vue-router";
import SearchView from "../views/SearchView/index.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "search",
      component: SearchView,
    },
    {
      path: "/users/:id",
      name: "user",
      component: UserView,
    },
  ],
});

export default router;
