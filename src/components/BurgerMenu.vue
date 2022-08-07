<template>
  <div>
  <span></span>
  <span></span>
  <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}
div span {
    display: block;
    background-color: var(--color-text);
    height: 0.15rem;
    width: 1.5rem;
    transition: background-color 0.5s;
}

div span:nth-child(2) {
    width: 1rem;
}

.dark-mode div span {
    transition: background-color 0.5s;
}

</style>