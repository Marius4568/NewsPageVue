<template>

 <content-container>
 <the-header></the-header>
<router-view></router-view>
 </content-container>
</template>

<script>
import ContentContainer from "./components/ContentContainer.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "App",
  components: { ContentContainer, TheHeader },

};
</script>


<style>

</style>