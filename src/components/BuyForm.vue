<template>
  <form
    :data-product-id="product.id"
    action=""
    class="buy-form backdrop-blur-md rounded-full py-4 px-8 flex justify-between items-center"
  >
    <h4 class="buy-form__price">£{{ product.price }}</h4>
    <div class="buy-form__controls flex gap-4">
      <button class="bg-secondary">Buy Now</button>
      <button class="border border-primary">Add to Cart</button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style lang="sass" scoped></style>
