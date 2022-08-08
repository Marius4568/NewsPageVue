<template>
  <header>
    <burger-menu></burger-menu>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/news-page">Latest News</router-link>
      <router-link to="/reviews-page">Reviews</router-link>
    </nav>
    <a class="contact-us" href="#">Contact us</a>
    <theme-toggle></theme-toggle>
  </header>
</template>

<script>
import BurgerMenu from "../BurgerMenu.vue";
import ThemeToggle from "../ThemeToggle.vue";
export default {
  components: {
    BurgerMenu,
    ThemeToggle,
  },
};
</script>

<style scoped>
header {
  align-items: center;
  display: flex;
  justify-content: center;
}

header > * {
  margin: 0 1rem;
}

header > div:nth-child(1) {
  margin-left: 0;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
}

nav a.router-link-active {
  color: var(--brick-brown-color);
}

nav a {
  display: inline-block;
}

.contact-us {
  display: none;
}

@media (min-width: 600px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 2rem;
  }
}

@media (min-width: 900px) {
  .contact-us {
    display: block;
    white-space: nowrap;
  }
}

@media (min-width: 1024px) {
  nav {
    justify-content: flex-start;
  }

  nav a {
    margin-right: 2rem;
  }
}
</style>
