<template>
  <div class="categories-wrap">
    <router-link
      :class="$route.params.category === category.path && 'active'"
      :to="{ name: 'news-page-category', params: { category: category.path } }"
      v-for="category in categories"
      :key="category.id"
      :category="category"
    >
      {{ category.title.toLowerCase() }}
    </router-link>
  </div>
</template>

<script>
import { newsCategories } from "../data.js";
export default {
  components: {},
  data() {
    return {
      categories: newsCategories,
    };
  },
};
</script>

<style scoped>

.categories-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

}

a {
margin: 1rem 0.75rem 0 0;
border: 1px solid var(--color-text);
  border-radius: 1rem;
  padding: 0.1rem 0.75rem;
}

.active {
  color: var(--brick-brown-color);
  border: 1px solid var(--brick-brown-color);
}


@media (min-width: 768px) {
  .categories-wrap {

justify-content: flex-start;
  }
}

</style>
