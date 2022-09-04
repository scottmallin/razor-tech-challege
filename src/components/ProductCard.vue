<template>
  <div class="col-12 md:col-6 lg:col-4 product-card">
    <a :href="'/products/' + product.id">
      <div
        class="p-6 h-full rounded-xl bg-black border border-darkGrey border-opacity-25 flex flex-col"
      >
        <img :src="product.image" :alt="'Buy ' + product.name" class="mb-6" />
        <div class="p-4 h-full flex flex-col">
          <h2 class="text-h5 leading-h5 mb-4">{{ product.name }}</h2>
          <h4 class="mb-4">£{{ product.price }}</h4>
          <p class="mb-4" v-html="product.shortDescription"></p>
          <span class="button bg-secondary block w-full mt-auto mb-0"
            >View Product</span
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style></style>
