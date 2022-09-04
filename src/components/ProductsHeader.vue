<template>
  <header class="products-header">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1>{{ title }}</h1>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps(["title", "badge"]);
</script>

<style lang="scss" scoped>
.products-header {
  min-height: 500px;
}
</style>
