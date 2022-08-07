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
ThemeToggle
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
}

header > * {
  margin: 0 1rem;
}

header > div:nth-child(1) {
  margin-left: 0;
}

nav {
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;

}

nav a.router-link-active {
 color: var(--brick-brown-color)
}

nav a.router-link-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
}

nav a:first-of-type {
  border: 0;
}

.contact-us {
    display: none
  }

  @media(min-width: 600px) {
 nav {
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 2rem;
 }
}

@media(min-width: 900px) {
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
