<template>
  <input id="theme-toggle" @click="toggleTheme" type="checkbox" />
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      const body = document.querySelector("body");
      body.classList.toggle("darkmode");
    },
  },
};
</script>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: var(--theme-toggle-circle-dimensions);
  border: 1px solid #ddd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  height: var(--theme-toggle-height);
  outline: none;
  padding: 0 1rem;
  position: relative;
  transition: background-color 0.5s;
  width: var(--theme-toggle-width);
}

input[type="checkbox"]:before {
  background-color: var(--main-dark-color);
  border-radius: 50%;
  content: "";
  height: var(--theme-toggle-circle-dimensions);
  left: var(--theme-toggle-side-offset);
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(0%);
  transition: transform 0.5s;
  width: var(--theme-toggle-circle-dimensions);
}

input[type="checkbox"]:checked {
  background-color: var(--main-dark-color);
  border: none;
}

input[type="checkbox"]:checked:before {
  background-color: #fff;
  transform: translateY(-50%)
    translateX(
      calc(
        var(--theme-toggle-width) - var(--theme-toggle-height) -
          var(--theme-toggle-side-offset)
      )
    );
}
</style>
