<template>
<h1>Latest news</h1>

<router-view>
    <news-categories></news-categories>
    
    <latest-news :category="$route.params.category"></latest-news>
  </router-view>

    
</template>

<script>

// import NewsArticles from '../components/NewsArticles.vue';
import NewsCategories from '../components/NewsCategories.vue';
import LatestNews from '../components/LatestNews.vue';

export default {
  components: { 

    // NewsArticles,
    NewsCategories,
    LatestNews,
  },
  data() { 
    return {
      category: "",
    }
  }

}
</script>

<style>

h1 {
  text-align: center;
  margin: 1rem 0;
}

@media (min-width: 768px) {
  h1 {
    text-align: left;
  }
}

</style>
