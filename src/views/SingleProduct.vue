<template>
  <div class="overflow-clip">
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
    <div v-if="product.id">
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
        <div class="container">
          <div class="row flex-col-reverse lg:flex-row">
            <div class="col-12 lg:col-6">
              <h3>{{ product.pageTitle }}</h3>
            </div>
            <div class="col-12 lg:col-5 lg:offset-1">
              <ul class="single-product-content__badges">
                <li v-for="tag in product.tags" :key="tag.index">
                  <Badge :title="tag" />
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12 lg:col-6">
              <main class="single-product-content__intro">
                <h5>{{ product.pageSubtitle }}</h5>
                <div
                  class="single-product-content__body"
                  v-html="product.pageBody"
                ></div>
              </main>
            </div>
            <div class="col-12 lg:col-5 lg:offset-1 mb-24 lg:mb-0">
              <div
                class="single-product-content__more-info"
                v-html="product.description"
              ></div>
              <BuyForm :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">Loading...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import BuyForm from "../components/BuyForm.vue";
import Badge from "../components/Badge.vue";
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
  components: { BuyForm, Badge },
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

    @media screen and (max-width: 540px) {
      font-size: 5rem;
    }
  }

  img {
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }
}

.single-product-content {
  &__badges {
    display: flex;
    list-style: none;
    padding-left: 0;
    gap: 1rem;
    margin-bottom: 36px;
  }
  &__intro {
    margin-bottom: 32px;
  }
  &__more-info,
  &__intro {
    white-space: pre-line;
  }
}
</style>
