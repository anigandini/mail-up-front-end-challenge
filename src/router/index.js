import { createRouter, createWebHashHistory } from "vue-router";
import Search from "../views/Search.vue";
import User from "../views/User.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "search",
      component: Search,
    },
    {
      path: "/users/:id",
      name: "user",
      component: User,
    },
  ],
});

export default router;
