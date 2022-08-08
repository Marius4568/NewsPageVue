<template>
  <div class="categories-wrap">
    <router-link
      :class="setActiveClass(category)"
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
  data() {
    return {
      categories: newsCategories,
    };
  },

  methods: {
    setActiveClass(category) {
      return this.$route.params.category === category.path && "active";
    },
  },
};
</script>

<style scoped>
.categories-wrap {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

a {
  border-radius: 1rem;
  border: 1px solid var(--color-text);
  margin: 1rem 0.75rem 0 0;
  padding: 0.1rem 0.75rem;
}

.active {
  border: 1px solid var(--brick-brown-color);
  color: var(--brick-brown-color);
}

@media (min-width: 768px) {
  .categories-wrap {
    justify-content: flex-start;
  }
}
</style>
