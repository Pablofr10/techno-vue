<template>
  <div id="app">
    <TheHeader />
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  font-weight: bold;
  color: #234;
  text-decoration: none;
}
a.router-link-active {
  color: #4b8;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
