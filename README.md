# customer_dashboard_display

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

<!--<template>
  <div class="invoice">
    <div class="row">
      <div class="invoice current-time-container">
        <p class="current-time">{{ currentTime }}</p>
      </div>
    </div>
    <div class="row">
      <h1 class="text-center">
        {{getBusinessName()}}
      </h1>
    </div>
    <div class="row col-12 flex-row">
        <div class="col-1">
          <strong>No</strong>
        </div>
        <div class="col-3">
          <strong>Product Name</strong>
        </div>
        <div class="col-2">
          <strong>Qty</strong>
        </div>
        <div class="col-3">
          <strong>Unit Price</strong>
        </div>
        <div class="col-3 text-center">
          <strong>Price</strong>
        </div>
    </div>

    <div class="product-table">
      <div class="row"
           v-for="(product, index) in products"
           :key="product.row_id">
        <div class="col-2">
          <strong>{{ index + 1 }}</strong>
        </div>
        <div class="col-3">
          <strong>{{ product.product_name }}</strong>
        </div>
        <div class="col-1">
          <strong>{{ product.quantity }}</strong>
        </div>
        <div class="col-3">
          <strong>{{ product.price }}</strong>
        </div>
        <div class="col-3">
          <strong>{{ product.productTotalPrice.toFixed(2) }}</strong>
        </div>
      </div>
    </div>

    <div class="row col-4 bottom-0 position-absolute">
      <div class="col-4" style="background: #4795d5">
        <div class="row">
          <strong style="font-size: 24px;text-align: center">Total Item</strong>
        </div>
        <div class="row">
          <strong style="font-size: 28px;text-align: center">{{totalItem}}</strong>
        </div>
      </div>
      <div class="col-8">
        <div class="row" style="background: #42b983">
          <div class="col-8">
            <strong>Subtotal</strong>
          </div>
          <div class="col-4">
            <strong>{{formatCurrency(totalPrice)}}</strong>
          </div>
        </div>
        <div class="row" style="background: #42b94c">
          <div class="col-8">
            <strong>Discount</strong>
          </div>
          <div class="col-4">
            <strong>(-) {{formatCurrency(totalPrice)}}</strong>
          </div>
        </div>
        <div class="row" style="background: #b94242">
          <div class="col-8">
            <strong>Tax</strong>
          </div>
          <div class="col-4">
            <span class="pull-right">(+) {{formatCurrency(totalPrice)}}</span>
          </div>
        </div>
        <div class="row" style="background: #42abb9">
          <div class="col-8">
            <strong>Total</strong>
          </div>
          <div class="col-4">
            <strong>{{formatCurrency(totalPrice)}}</strong>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>-->
