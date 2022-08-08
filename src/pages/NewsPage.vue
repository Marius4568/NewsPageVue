<template>
  <h1 class="latest-news-title">Latest news</h1>

  <router-view>
    <news-categories></news-categories>
    <latest-news :category="this.$route.params.category"></latest-news>
  </router-view>
</template>

<script>
import NewsCategories from "../components/NewsCategories.vue";
import LatestNews from "../components/LatestNews.vue";

export default {
  components: {
    NewsCategories,
    LatestNews,
  },
};
</script>

<style>
.latest-news-title {
  text-align: center;
  margin: 1rem 0;
  font-size: 2rem;
}

@media (min-width: 768px) {
  .latest-news-title {
    text-align: left;
    font-size: 2.5rem;
  }
}
</style>
