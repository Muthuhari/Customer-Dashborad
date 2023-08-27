<template>
  <div class="row" v-for="product in products" :key="product.row_id">
    <div class="col-2">
      <strong>{{ product.row_id }}</strong>
    </div>
    <div class="col-5">
      <strong>{{ product.product_name }}</strong>
    </div>
    <div class="col-2">
      <strong>{{ product.quantity }}</strong>
    </div>
    <div class="col-3">
      <strong>{{ product.price }}</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductLineGroup',
  props: {
    products: {
      type:Array
    }
  }
}
</script>
