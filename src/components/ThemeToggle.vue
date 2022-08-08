<template>
  <input id="theme-toggle" @click="toggleTheme" type='checkbox'/>
</template>

<script>
export default {


    methods: {
        toggleTheme() {
            const body = document.querySelector('body');
            body.classList.toggle('darkmode');
        }
    }

}
</script>

<style scoped>

input[type="checkbox"] {
	-webkit-appearance: none;
	outline: none;
	cursor: pointer;
	height: var(--theme-toggle-height);
	width: var(--theme-toggle-width);
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border: 1px solid #ddd;
	position: relative;
	border-radius: var(--theme-toggle-circle-dimensions);
	
	background-color: #fff;
	transition: background-color 0.5s;
padding: 0 1rem;
	
}

input[type="checkbox"]:before {
		content: "";
		width: var(--theme-toggle-circle-dimensions);
		height: var(--theme-toggle-circle-dimensions);
		background-color: var(--main-dark-color);
		position: absolute;
        left: var(--theme-toggle-side-offset);
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%) translateX(0%);
		transition: transform 0.5s;
	}



input[type="checkbox"]:checked {
	background-color: var(--main-dark-color);
	border: none;

	
}

input[type="checkbox"]:checked:before {
		background-color: #fff;
		transform: translateY(-50%)
			translateX(calc(var(--theme-toggle-width) - var(--theme-toggle-height) - var(--theme-toggle-side-offset)));
	}


</style>