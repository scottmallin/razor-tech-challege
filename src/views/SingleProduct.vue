<template>
  <div>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center lg:text-right">
            <a class="block lg:inline-block text-white py-8" href="/products"
              >Back to all products</a
            >
          </div>
        </div>
      </div>
    </nav>
    <header class="single-product-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>{{ product.name }}</h1>
            <img :src="product.image" :alt="'Image of ' + product.name" />
          </div>
        </div>
      </div>
    </header>
    <div class="single-product-content">
      <BuyForm :product="product" />
      <ul class="single-product-content__badges"></ul>
      <main class="single-product-content__intro">
        <h3>{{ product.pageTitle }}</h3>
        <h5>{{ product.pageSubtitle }}</h5>
        <div
          class="single-product-content__body"
          v-html="product.pageBody"
        ></div>
      </main>
      <div class="single-product-content__more-info"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import BuyForm from "../components/BuyForm.vue";
export default {
  name: "Product",
  setup() {
    const route = useRoute();
    const product = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch(
          `https://62b9b32c41bf319d228329df.mockapi.io/Product/${route.params.id}`
        );
        if (!data.ok) {
          throw Error(`Can't find product id: ${route.params.id}`);
        }
        product.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.error(error.value);
      }
    };
    load();
    return { product };
  },
  components: { BuyForm },
};
</script>

<style lang="scss" scoped>
.single-product-header {
  position: relative;
  padding: 100px 0;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 159px;
  }

  img {
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
}
</style>
