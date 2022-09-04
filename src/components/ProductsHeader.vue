<template>
  <header ref="header" class="products-header">
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
import { onMounted } from "vue";
import { ref } from "@vue/reactivity";
import Badge from "./Badge.vue";
const props = defineProps(["title"]);
const header = ref();

onMounted(() => {
  window.addEventListener("scroll", () => {
    header.value.style.opacity = 200 - window.scrollY + "%";
  });
});
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
    @media screen and (max-width: 575px) {
      font-size: 5rem;
    }

    margin-top: 2rem;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: calc(100% + 5rem);
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: 5rem;
      background-color: #94a1b2;

      @media screen and (max-width: 990px) {
        content: none;
      }
    }
  }
}
</style>
