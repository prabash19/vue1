<template>
  <div>
    <h1>one</h1>
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
  name: "ProductOne",
};
</script>
