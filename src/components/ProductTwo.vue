<template>
  <div>
    <h1>Two</h1>
    <ul>
      <li v-for="Product in Products" v-bind:key="Product">
        {{ Product.name }}
        {{ Product.price }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["Products"],
  name: "ProductTwo",
};
</script>
