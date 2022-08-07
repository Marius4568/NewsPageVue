<template>
 
  <div class="articles-main" :class="computedGridClass">
  <div class="number-of-the-day">
   <p>number of the day</p>
   <h1>18000</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, id delectus odit porro ratione ab! Magnam nesciunt ipsa voluptas id.</p>
   </div>
    <news-article
      v-for="(article, i) in articles.slice(0, 4)"
      :key="article.id"
      :imgSource="article.imgSource"
      :title="article.title"
      :description="article.description"
      :date="article.date"
      :author="article.author"
      :class="itemClass(i)"
    />
   
  </div>

  <div class="articles-rest">
  <news-article
      v-for="article in articles.slice(4, 14)"
      :key="article.id"
      :imgSource="article.imgSource"
      :title="article.title"
      :description="article.description"
      :date="article.date"
      :author="article.author"

    />
  </div>
</template>

<script>
import NewsArticle from "./NewsArticle.vue";

import { articles } from "../data.js";
export default {
  props: {
    category: {
      type: String,
    },
  },

  components: {
    NewsArticle,
  },

  data() {
    return {
      articles,
      gridClass: "",
    };
  },

  computed: {
    computedGridClass() {
      const num = this.articles.length;

      let className = "";

      if (num >= 4) className = "grid-4more";
      if (num === 3) className = "grid-3";
      if (num === 2) className = "grid-2";
      if (num <= 1) className = "grid-1less";

      return className;
    },

    
  },

  methods: {
itemClass(i) {
      
      if(i <= 4) return `grid-item-${i+1}`

      return ''

      
    },
  },

  beforeMount() {
    if (!this.category || this.category === "all") {
      this.articles = articles;
    } else if (this.category && this.category !== "all") {
      this.articles = articles.filter(
        (article) => article.category === this.category
      );
    }
   

  },

  beforeUpdate() {
    if (!this.category || this.category === "all") {
      this.articles = articles;
    } else if (this.category && this.category !== "all") {
      this.articles = articles.filter(
        (article) => article.category === this.category
      );

      

   
    }
  },
};
</script>

<style scoped>

.number-of-the-day {
padding: 1rem;
  background-color: var(--brick-brown-color);
  color: var(--main-light-color);
 
}

.articles-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.articles-main article {
height: 30rem
}

.articles-rest {
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: 2rem;
  
  margin-top: 2rem;

}

.articles-rest article {
  max-height: 35rem;
}

@media (min-width: 700px) {
.grid-item-1 {
  grid-area: item-1;
 
}

 .grid-item-2 {
  grid-area: item-2;
 
}

 .grid-item-3 {
  grid-area: item-3;

}
 .grid-item-4 {
  grid-area: item-4;
  
}

.number-of-the-day {
  grid-area: num;
}

.grid-4more {
 
  grid-template-columns: none;
  grid-template-areas:
    "num num "
    "num num "
    "item-1 item-3 "
    "item-1 item-3 "
    "item-2 item-4 ";
}

.grid-4more .grid-item-1 ,
.grid-4more .grid-item-2 ,
.grid-4more .grid-item-3, 
.grid-4more .grid-item-4 {
  height: 20rem;
}

.grid-3 {
  
grid-template-columns: none;
  grid-template-areas:
    "item-1 num "
    "item-1 item-3 "
    "item-2 item-3 ";
}

.grid-3 .grid-item-1,
.grid-3 .grid-item-2 {
  height: 25rem;

}


.grid-3 .grid-item-3 {
height: 35rem;
} 

.grid-3 .number-of-the-day {
height: 15rem;
} 

.grid-2 {
 
  grid-template-columns: none;
  grid-template-areas:
    "num num "
    "item-1 item-2 ";
}

.grid-2 .grid-item-1 ,
.grid-2 .grid-item-2 {
  height: 30rem;
}

.grid-1less {
   
  grid-template-columns: none;

  grid-template-areas: 
    "num"
    "item-1  "
    ;
  
}

.grid-1less .grid-item-1 {
  height: 35rem;

}

.grid-1less .number-of-the-day {
  height: 15rem;

}

}

@media (min-width: 1000px) {


.articles-rest {

  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));

}
  .grid-4more {
 
  grid-template-areas:
    "item-1 item-1 num "
    "item-1 item-1 item-2 "
    "item-3 item-3 item-4 "
    ;
}

.grid-4more .grid-item-1 { 
  height: 37rem;
}
.grid-4more .grid-item-2 { 
   height: 20rem;
}

.grid-4more .grid-item-3 { 
   height: 20rem;
}

.grid-4more .grid-item-4 { 
 height: 20rem
}

.grid-4more .number-of-the-day { 
 height: 15rem
}

.grid-3 {
  
  grid-template-areas:
    "item-1 item-1 num "
    "item-1 item-1 item-3 "
    "item-2 item-2 item-2 "
    ;
}

.grid-3 .grid-item-1 {
  height: 40rem;
}
.grid-3 .grid-item-2 {
  height: 30rem;

}


.grid-3 .grid-item-3 {
height: 22rem;
} 

.grid-3 .number-of-the-day {
height: 16rem;
} 

.grid-1less {
   
  grid-template-columns: none;

  grid-template-areas: 
    "item-1 item-1  num"
    "item-1 item-1  ."
    ;
  
}

.grid-1less .grid-item-1 {
  height: 35rem;

}


}

@media (min-width: 1400px) {
  .articles-main {
gap: 4rem;

}

.articles-rest {
  gap: 4rem;
  margin-top: 4rem;
}

.grid-4more {
 
  
  grid-template-areas:
    "item-1 item-3 item-3 num"
    "item-1 item-3 item-3 num"
    "item-1 item-3 item-3 item-4"
    "item-2 item-3 item-3 item-4"
    "item-2 item-3 item-3 item-4";
}

.grid-4more .grid-item-1 { 
  height: 20rem;
}
.grid-4more .grid-item-2 { 
   height: 20rem;
}

.grid-4more .grid-item-3 { 
   height: 44rem;
}

.grid-4more .number-of-the-day { 
 height: 15rem
}

.grid-4more .grid-item-4 { 
 height: 25rem
}




.grid-3 {
  

  grid-template-areas:
    "item-1 item-2 num"
    "item-1 item-2 num"
    "item-1 item-2 item-3" 
    "item-1 item-2 item-3 "
    "item-1 item-2 item-3 ";
}

.grid-3 .grid-item-1 ,
.grid-3 .grid-item-2 {
  height: 42rem;

}

.grid-2 {
  
  grid-template-areas:
    "item-1 item-1 num"
    "item-1 item-1 num"
    "item-1 item-1 item-2" 
    "item-1 item-1 item-2 "
    "item-1 item-1 item-2 ";
}

.grid-2 .grid-item-1  {
  height: 38rem;
}
.grid-2 .grid-item-2 {
  height: 20rem;
}

.grid-2 .number-of-the-day {
  height: 14rem;
}





}
</style>
