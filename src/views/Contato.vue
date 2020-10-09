<template>
  <div>
    <h1>Contato</h1>
    <p>{{ api }}</p>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato");
  },
};
</script>

<style scoped>
</style>
