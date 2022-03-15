<template>
  <div id="app">
    <!-- <HelloWorld /> -->

    <product-one v-bind:products="Products"></product-one>
    <product-two v-bind:products="Products"></product-two>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ProductOne from "./components/ProductOne.vue";
import ProductTwo from "./components/ProductTwo.vue";
export default {
  name: "App",
  data() {
    return {
      Products: [
        { name: "apple", price: "300" },
        { name: "orange", price: "400" },
        { name: "mango", price: "500" },
        { name: "kiwi", price: "600" },
      ],
    };
  },
  components: {
    "product-one": ProductOne,
    "product-two": ProductTwo,
    // HelloWorld,
  },
};
</script>

<style></style>
