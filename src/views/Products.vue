<template>
  <div @scroll="scrolling">
    <ProductsHeader title="Latest Products" />
    <section class="list-controls -mt-16 mb-16 relative z-10">
      <div class="container">
        <div class="row">
          <div class="col-12 flex items-center justify-between lg:justify-end">
            <label for="list_controls">Sort by:</label>
            <select
              name="list_controls"
              id="list_controls"
              v-model="listControls"
            >
              <option value="" selected>Select...</option>
              <option value="name_asc">Name Ascending</option>
              <option value="name_desc">Name Descending</option>
              <option value="price_asc">Price Ascending</option>
              <option value="price_desc">Price Descending</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <section v-if="products.count" class="pb-20 relative z-10">
      <div class="container">
        <div class="row gap-y-6">
          <ProductCard
            v-for="product in products.items"
            :product="product"
            :key="product.id"
          />
        </div>
      </div>
    </section>
    <section v-else>
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">No products available</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ProductsHeader from "../components/ProductsHeader.vue";
import ProductCard from "../components/ProductCard.vue";
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

    const scrolling = (e) => {
      console.log("scrolling", e);
    };

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
    return { products, listControls, scrolling };
  },
  components: { ProductsHeader, ProductCard },
};
</script>

<style lang="scss" scoped>
label {
  margin-right: 2rem;
}
select {
  padding: 0.5rem 1rem;
}
</style>
