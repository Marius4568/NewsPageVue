<template>
  <router-view>
    <latest-news :category="this.$route.params.category"></latest-news>
  </router-view>
</template>

<script>
import LatestNews from "../components/LatestNews.vue";

export default {
  components: {
    LatestNews,
  },
};
</script>
