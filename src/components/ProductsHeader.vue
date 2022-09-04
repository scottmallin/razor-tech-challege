<template>
  <header class="products-header">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <Badge title="New for 2022" />
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Badge from "./Badge.vue";
const props = defineProps(["title"]);
</script>

<style lang="scss" scoped>
.products-header {
  position: sticky;
  top: 0;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 2rem;
  }
}
</style>
