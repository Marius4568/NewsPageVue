<template>
  <div class="content-container">
  <div class="dark-overlay"></div>
  <div class="inner-wrap">
<slot></slot>
      </div>
    
  </div>
</template>

<script>

export default {
  components: {
    
  },
};
</script>

<style scoped>
.content-container {
 
    position: relative;
  background-color: var(--main-light-color);
transform: translateX(0);
  border-radius: 2rem;
  padding: 2rem 2rem;
transition: color background-color 0.5s;
  width: 100%;

  overflow: hidden;
}

.darkmode .content-container{

 transition: color background-color 0.5s;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  z-index: 1;
  background-color: var(--main-dark-color);
 transition: width 0.5s;
}

.darkmode .dark-overlay {
  width: 100%;
  transition: width 0.5s;
}

.content-container:before {
    content: "";
    opacity: var(--corner-opacity);
    position: absolute;
    z-index: 2;
    bottom: -2rem;
    left: -2rem;
  width: 30%;
  max-height: 80rem;
  height: 40%;
  background: linear-gradient(45deg, var(--corner-bottom-color) 50%, rgba(0,0,0,0) 50%);
  filter: blur(7rem)
}

.content-container:after {
    content: "";
     opacity: var(--corner-opacity);
    position: absolute;
     z-index: 1;
    top: -2rem;
    right: -2rem;
  width: 30%;
  height: 40%;
  max-height: 80rem;
  background: linear-gradient(45deg, rgb(194, 134, 81, 0) 50%, var(--corner-top-color) 50%);
  filter: blur(7rem)
}

.inner-wrap {
    position: relative;
    z-index: 2;

}

@media (min-width: 768px) {
  .content-container {
    padding: 2rem 4rem 4rem 4rem;
  }
}


</style>
