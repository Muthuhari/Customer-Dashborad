<template>
  <div class="invoice">
    <div class="row">
      <div class="block">
  <div class="row text-center">
    <div class="name">
        <h2>Parallax Technologies (Private) Limited</h2>
      </div></div>
  <div class="row">
        <div class="address">
          <p class="bold-text">No. 2221/1, Bonifant Park Pl, Silver Spring, Md, MD 20906.</p>
        </div>
      </div>
    <div class="row" style="font-size: 12px;text-align-last: right;">
      <div class="current-time-container">
        <p class="current-time">{{ currentTime }}</p>
      </div>
    </div>
    
</div>

  </div>
  <div class="container">
    <div class="row col-12 flex-row" style="justify-content: center;">
        <div class="col-1" style="text-align: center;color: aliceblue;">
            <strong>No</strong>
        </div>
        <div class="col-4 product-name-column" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: center !important;color: aliceblue;">
            <strong>Product Name</strong>
        </div>
        <div class="col-2" style="text-align: center;color: aliceblue;">
            <strong>Quantity</strong>
        </div>
        <div class="col-2" style="text-align: center;color: aliceblue;">
            <strong>Unit Price</strong>
        </div>
        <div class="col-3" text-center style="text-align: center;color: aliceblue;" >
            <strong>Price</strong>
        </div>
    </div>
</div>

<div class="product-table">
  <div class="row col-12 flex-row" v-for="(product, index) in products" :key="product.row_id" style="background-color:#000000 ; border-bottom: 1px solid #a09f9f;justify-content: center;">
    <div class="col-1" style="text-align: left !important;color: aliceblue;">
      <strong>{{ index + 1 }}</strong>
    </div>
    <div class="col-4" style=" text-align: center !important;color: aliceblue;">
      <strong>{{ product.product_name }}</strong>
    </div>
    <div class="col-2" style="text-align: left !important;color: aliceblue;">
      <strong>{{ product.quantity }}</strong>
    </div>
    <div class="col-2" style="text-align: left !important;color: aliceblue;">
      <strong>{{ product.price }}</strong>
    </div>
    <div class="col-3" style="text-align: left !important;color: aliceblue;">
      <strong>{{ product.productTotalPrice.toFixed(2) }}</strong>
    </div>
  </div>
</div>


    <div class="row col-10 under-table">
      <div class="row">
          <span style="font-size: 18px;text-align-last: right; color: rgb(255, 255, 255); margin-right: 50px;">Total item = 8</span>
        </div>
      <div class="row">
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 13dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc; margin-left: 15px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 20px;text-align: center;color: rgb(0, 0, 0);">Subtotal</strong>
        </div>
        <div class="row">
          <span>400.50</span>
        </div>
      </div>
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 13dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc; margin-left: 10px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 20px;text-align: center;color: rgb(0, 0, 0);">Discount</strong>
        </div>
        <div class="row">
          <span>400.50</span>
        </div>
      </div>
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 13dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc;margin-left:10px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 20px;text-align: center;color: rgb(0, 0, 0);">Tax</strong>
        </div>
        <div class="row">
          <span>20</span>
        </div>
      </div>
      <div class="col-4" style="font-size: 50px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 24dvh; height: 10.5dvh; background: #f41010; border-right: 3px solid #ccc; margin-left: 10px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 25px;text-align: center;color: rgb(255, 255, 255);">Total Price</strong>
        </div>
        <div class="row">
          <strong style="font-size: 25px;text-align: center;color: rgb(255, 255, 255);">{{formatCurrency(totalPrice)}}</strong>
        </div>
      </div>
    </div>
    </div>
    <div class="block-bottom">
    </div>
    

  </div>


  
</template>


<script>

import APIService from "@/service/APIService";

export default {
  components: {},
  props:{
    businessBasicDetails:{
      type: Object
    },
    productsData:{
      type:Array
    }
  },

  data() {
    return {
      products: [],
      apiData:[],
      currentTime: null,
    };
  },
  computed: {
    totalPrice() {
      return this.products.reduce((total, product) => {
        return total + product.productTotalPrice;
      }, 0);
    },
    totalItem(){
      return this.products.reduce((itemTotal,product) => {
        return parseFloat(itemTotal) + parseFloat(product.quantity);
      },0);
    }
  },
  created() {
    this.productAdd(this.productsData['0']);
  },

  mounted() {
    // Listen for ProductAdd WebSocket trigger
    // and update the products array
    window.Echo.channel('storemate_cus_display').listen('ProductAdd', (e) => {
      this.productAdd(e.data);
    });

    window.Echo.channel('storemate_cus_display').listen('ProductQuantityChange', (e) => {
      this.updateQuantity(e.data.row_id,e.data.current_quantity);
    });

    window.Echo.channel('storemate_cus_display').listen('ProductRowRemove', (e) => {
      this.productRemove(e.data.row_id);
    });

    window.Echo.channel('storemate_cus_display').listen('ProductUnitPriceChange', (e) => {
      this.productPriceChange(e.data.row_id,e.data.current_price);
    });

    window.Echo.channel('storemate_cus_display').listen('ProductLineDiscount', (e) => {
      this.productLineDiscount(e.data.row_id,e.data.line_discount);
    });

    window.Echo.channel('storemate_cus_display').listen('ProductLineDiscount', (e) => {
      this.productTax(e.data.row_id,e.data.productTax);
    });

    window.Echo.channel('storemate_cus_display').listen('ResetInvoiceDetails', (e) => {
      this.resetInvoiceDetails();
    });

    this.getCurrentTime(); // Get the initial time
    this.startTimer(); // Start the timer to update the time
  },

  methods: {
    formatCurrency(value) {
      const currencySymbol = (this.businessBasicDetails.data)? this.businessBasicDetails.data.basic.currency:' ';
      return `${currencySymbol} ${value.toFixed(2)}`;
    },
    productAdd(data){
      if(this.products.find(obj => obj.row_id !== data.row_id) || this.products == ''){
        data.productTotalPrice = data.price * data.quantity;
        this.products.push(data);
      }
    },
    updateQuantity(rowId, newQuantity) {
      const item = this.products.find(obj => obj.row_id === rowId);
      if (item) {
        item.productTotalPrice = item.price * newQuantity;
        item.quantity = newQuantity;
      }
    },
    productRemove(rowId){
      const index = this.products.findIndex(obj => obj.row_id === rowId);
      if (index >= 0) {
        this.products.splice(index, 1);
      }
    },
    productPriceChange(rowId,newPrice){
      let unitPrice = newPrice.toFixed(2);
      const item = this.products.find(obj => obj.row_id === rowId);
      if (item) {
        item.productTotalPrice = item.quantity * unitPrice;
        item.price = unitPrice;
      }
    },
    productLineDiscount(rowId,productTax){
      const item = this.products.find(obj => obj.row_id === rowId);
      if (item) {
        item.productTax = productTax;
      }
    },
    getBusinessName(){
      const businessName = (this.businessBasicDetails.data)? this.businessBasicDetails.data.business_name:' ';
      return businessName;
    },
    getCurrentTime() {
      const currentDate = new Date();
      this.currentTime = currentDate.toLocaleString(); // Format the date and time as per your requirement
    },
    startTimer() {
      setInterval(() => {
        this.getCurrentTime(); // Update the current time every second (adjust the interval as per your preference)
      }, 1000);
    },
    resetInvoiceDetails() {
      this.products=[];
    }
  },

};
</script>

<style scoped>
  .current-time {
    font-size: 18px;
    font-weight: bold;
  }
  .container {
    background-color: #000;
    padding: 5px;
    padding-left: 20px;
    font-size: 18px;
    margin-left: 0;
  }

  .product-table {
    overflow-y:auto;
    background: color #000;;
    overflow-x:hidden;
    font-size: 17px;
    height: 53dvh;
    padding: 10px;
    padding-left: 35px;
    overflow-y: auto;
    overflow-x: hidden !important;
  }
  .invoice{
    background-color:#000000;
    border-color: black;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    margin-left: -10px;
  }
  .under-table{
    background-color: #000000;
    position: absolute;
    width: 71.3dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 80px;
    margin-bottom: 10px;
    border: 1px;
    border-color: #d55c1f;
  }
  .block {
    background-image: #000000;
    padding: 15px;
    align-items: center;
    height: 156px;
    justify-content: center;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    margin-left: 0%;
}
.block-bottom{
  background-color: #000000;
  width: 72dvh;
  height: 25dvh;
}
  .current-time{
    font-size: 14px;
    color: #ffffff;
    margin-left: 50px;
  }
  .name {
  font-size: 4px;
  color: #fcfc0f;
  text-overflow: ellipsis;
  margin-left: 7px;
  margin-top: 20px;
  padding-left: 20px;
  align-items: center;
  font-weight: bold;
}
.bold-text {
  margin-left: 65px;
  color: #fcfc0f;
  padding-left: 130px;
  align-items: center;
  justify-content: center;
} 
  .footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5dvh;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
  margin-left: 0;
}

.product-table .row:not(:last-child) {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

</style>
