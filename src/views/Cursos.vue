<template>
  <div>
    <h1>Cursos</h1>
    <p>{{ api }}</p>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style scoped>
</style>
