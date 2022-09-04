<template>
  <form
    :data-product-id="product.id"
    action=""
    class="buy-form backdrop-blur-md rounded-full fixed bottom-0 left-0 w-full lg:static p-4 lg:py-8 lg:px-0 lg:mt-16 flex lg:flex-col lg:items-start justify-between items-center"
  >
    <h3
      class="buy-form__price mb-0 lg:mb-8 text-h4 leading-h4 lg:text-h3 lg:leading-h3"
    >
      £{{ product.price }}
    </h3>
    <div class="buy-form__controls flex gap-4">
      <button class="bg-secondary">Buy Now</button>
      <button
        class="border border-primary bg-primary lg:bg-transparent px-4 lg:px-8"
      >
        <span class="sr-only lg:not-sr-only">Add to Cart</span>
        <img
          src="../assets/cart.svg"
          alt="Cart Icon"
          class="lg:hidden"
          width="24"
        />
      </button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style lang="sass" scoped></style>
