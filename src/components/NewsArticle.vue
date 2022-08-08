<template>
  <article ref="infoBox">
    <img class="article-img" :src="imgSource" alt="title" />
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <p class="article-date">{{ date }}</p>
      <div class="author">
        <img :src="author.image" alt="author-photo" />
        <div class="author-text">
          <p>{{ author.name }}</p>
          <p>{{ author.occupation }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    imgSource: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      validator: (author) => {
        return author.name && author.occupation && author.image;
      },
    },
  },

  methods: {
    markOverflownContent() {
      const isOverflown =
        this.$refs.infoBox.scrollHeight > this.$refs.infoBox.clientHeight;

      this.$refs.infoBox.classList.remove("article-overflown");
      if (isOverflown) {
        this.$refs.infoBox.classList.add("article-overflown");
      }
    },
  },

  mounted() {
    this.markOverflownContent();
    window.addEventListener("resize", this.markOverflownContent);
  },

  updated() {
    this.markOverflownContent();
  },

  unmounted() {
    window.removeEventListener("resize", this.markOverflownContent);
  },
};
</script>

<style scoped>
h3 {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: left;
}

article {
  min-height: 20rem;
  overflow: hidden;
  position: relative;
}

article > img {
  height: 40%;
  object-fit: cover;
  width: 100%;
}

.article-date {
  color: var(--dark-gray-color);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: left;
}

.article-overflown {
  position: relative;
}

.article-overflown::before {
  align-items: flex-end;
  background: linear-gradient(
    0deg,
    var(--color-foreground) 25%,
    rgba(0, 0, 0, 0) 100%
  );
  bottom: 0;
  color: var(--text-color);
  content: "Read more";
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 30%;
  justify-content: center;
  padding-bottom: 1rem;
  position: absolute;
  width: 100%;
}

.content {
  padding: 1rem;
}

.author img {
  border-radius: 50%;
  height: 3.5rem;
  margin-right: 2rem;
  object-fit: cover;
  width: 3.5rem;
}

.author {
  align-items: center;
  display: flex;
  height: 20%;
  margin-top: 2rem;
}

.author-text p:nth-child(1) {
  font-weight: 500;
}
.author-text p:nth-child(2) {
  color: var(--dark-gray-color);
  font-size: 0.8rem;
}
</style>
