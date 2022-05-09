import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from '@/views/LogIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio de sesión",
      component: () => import("../views/LogIn.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CvView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/PageNotFound.vue")
    }
  ],
});

router.beforeEach((to, from, next) =>{
  if (to.matched.some(route => route.meta.requiresAuth)){
    const cat = localStorage.getItem('jwt');
    if(!cat){
      next('/')
    }else{
      next();
    }
  }else{;
    next()
  }
})
export default router;
