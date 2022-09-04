<template>
  <div>
    <ProductsHeader title="Latest Products" />
    <section class="list-controls">
      <div class="container">
        <div class="row">
          <div class="col-12 flex justify-end">
            Sort by:
            <select
              name="list_controls"
              id="list_controls"
              v-model="listControls"
            >
              <option value="name_asc">Name Ascending</option>
              <option value="name_desc">Name Descending</option>
              <option value="price_asc">Price Ascending</option>
              <option value="price_desc">Price Descending</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section v-if="products.count">
      <div class="container">
        <div class="row">
          <div
            v-for="product in products.items"
            :key="product.id"
            class="col-12 md:col-6 lg:col-4 product-card"
          >
            <a :href="'/products/' + product.id">{{ product.name }}</a>
          </div>
        </div>
      </div>
    </section>
    <section v-else>No products</section>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import ProductsHeader from "../components/ProductsHeader.vue";
import { watch } from "@vue/runtime-core";
export default {
  name: "Products",
  setup() {
    const listControls = ref("");
    const products = ref([]);
    const error = ref(null);

    watch(listControls, () => {
      console.log("listControls change", listControls.value, products);

      if (listControls.value == "name_asc") {
        products.value.items.sort((a, b) => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
          }
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          }
        });
      } else if (listControls.value == "name_desc") {
        products.value.items.sort((a, b) => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return 1;
          }
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return -1;
          }
        });
      } else if (listControls.value == "price_asc") {
        products.value.items.sort((a, b) => a.price - b.price);
      } else if (listControls.value == "price_desc") {
        products.value.items.sort((a, b) => b.price - a.price);
      }
    });

    const load = async () => {
      try {
        let data = await fetch(
          "https://62b9b32c41bf319d228329df.mockapi.io/Product"
        );
        if (!data.ok) {
          throw Error("No products available");
        }
        products.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.error(error.value);
      }
    };
    load();
    return { products, listControls };
  },
  components: { ProductsHeader },
};
</script>

<style></style>
