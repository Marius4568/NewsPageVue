<template>
  <article @click="logRef" ref="infoBox">
    <img :src="imgSource" alt="title" />
    <div class="content">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p>{{ date }}</p>
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
      const elHeight = this.$refs.infoBox.clientHeight;
      const elWidth = this.$refs.infoBox.clientWidth;
      const isOverflown = this.$refs.infoBox.scrollHeight > this.$refs.infoBox.clientHeight;


    this.$refs.infoBox.classList.remove('article-overflown');
      if (isOverflown) {
        this.$refs.infoBox.classList.add('article-overflown');
      }


    }
  },

  mounted() { 
   this.markOverflownContent()
  
  },

  updated() { 
    this.markOverflownContent()
  }




};
</script>

<style scoped>

h1 {
  text-align: left;
}

article {
min-height: 20rem;


  overflow: hidden;

  position: relative; 

}




.content {
padding: 1rem;

}

.author img {
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  margin-right: 2rem;
}

.author {
  margin-top: 2rem;
display: flex;
align-items: center;
height: 20%;
}

.author-text p:nth-child(1) {
  font-weight: 500;
}
.author-text p:nth-child(2) {
  font-size: 0.8rem;
  color: var(--dark-gray-color);
}

article > img {

  height: 30%;
  width: 100%;
  object-fit: cover;

}


</style>
