import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NewsPage from "../pages/NewsPage.vue";
import ReviewsPage from "../pages/ReviewsPage.vue";
import LatestNews from "../components/LatestNews.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/news-page" },

    {
      path: "/home",
      name: "home",
      component: HomePage,
    },

    {
      path: "/home",
      name: "home",
      component: HomePage,
    },

    {
      path: "/news-page",
      name: "news-page",
      component: NewsPage,
      children: [
        {
          path: ":category",
          name: "news-page-category",
          afterEnter: (to, from) => {
     console.log('entered')
    },
          component: LatestNews,
        },
      ],
    },

    {
      path: "/reviews-page",
      name: "reviews-page",
      component: ReviewsPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
