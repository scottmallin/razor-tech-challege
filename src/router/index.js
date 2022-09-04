import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products.vue";
import SingleProduct from "../views/SingleProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: Products,
    },
    {
      path: "/products",
      redirect: "/",
    },
    {
      path: "/products/:id",
      name: "single product",
      component: SingleProduct,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
  ],
});

export default router;
