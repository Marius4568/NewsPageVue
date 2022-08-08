<template>
  <div class="content-container">
    <div class="dark-overlay"></div>
    <div class="inner-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  background-color: var(--color-foreground);
  border-radius: 2rem;
  color: var(--color-text);
  padding: 2rem 2rem;
  position: relative;
  transform: translateX(0);
  transition: all 0.5s;
  width: 100%;
}

.dark-overlay {
  background-color: var(--main-dark-color);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: width 0.5s;
  width: 0%;
  z-index: 1;
}

.darkmode .dark-overlay {
  width: 100%;
}

.content-container:before {
  background: linear-gradient(
    45deg,
    var(--corner-bottom-color) 50%,
    rgba(0, 0, 0, 0) 50%
  );
  bottom: -2rem;
  content: "";
  filter: blur(7rem);
  height: 40%;
  left: -2rem;
  max-height: 80rem;
  opacity: var(--corner-opacity);
  position: absolute;
  width: 30%;
  z-index: 2;
}

.content-container:after {
  background: linear-gradient(
    45deg,
    rgb(194, 134, 81, 0) 50%,
    var(--corner-top-color) 50%
  );
  content: "";
  filter: blur(7rem);
  height: 40%;
  max-height: 80rem;
  opacity: var(--corner-opacity);
  position: absolute;
  right: -2rem;
  top: -2rem;
  width: 30%;
  z-index: 1;
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
