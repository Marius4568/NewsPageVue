<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
div {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1rem;
  justify-content: space-between;
}
div span {
  background-color: var(--color-text);
  display: block;
  height: 0.15rem;
  transition: background-color 0.5s;
  width: 1.5rem;
}

div span:nth-child(2) {
  width: 1rem;
}

.dark-mode div span {
  transition: background-color 0.5s;
}
</style>
