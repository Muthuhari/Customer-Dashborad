<template>
    <div class="invoice">
      <div class="row">
    <div class="col-7">
      <div class="row">
      <div class="image">
    <Image_Set_Test_Sub_1 width="100%"/>
    </div>
  </div>
  <div class="row">
    <div class="watermark">
      <strong>Powered by </strong>
      <img src="https://storemate.lk/wp-content/uploads/2022/01/Store-Mate-Logo-1-1.webp" class="watermark-image" >
    </div>
  </div>
</div>
    <div class="col-5">
    <div class="row">
      <div class="block">

  <div class="row text-center">
    <div class="name">
        <h2>Parallax Technologies (Private) Limited</h2>
      </div></div>

  <div class="row text-center">
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


<div class="main-table">
<table class="table" style="text-align: center;">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Product Name</th>
      <th scope="col">Qty</th>
      <th scope="col">unit Price</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.product_name }}</td>
      <td>{{ product.quantity }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.productTotalPrice.toFixed(2) }}</td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.product_name }}</td>
      <td>{{ product.quantity }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.productTotalPrice.toFixed(2) }}</td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.product_name }}</td>
      <td>{{ product.quantity }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.productTotalPrice.toFixed(2) }}</td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.product_name }}</td>
      <td>{{ product.quantity }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.productTotalPrice.toFixed(2) }}</td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{ product.product_name }}</td>
      <td>{{ product.quantity }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.productTotalPrice.toFixed(2) }}</td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;">Total Item = 5</td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row"></th>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr v-for="(product, index) in products" :key="product.row_id">
      <th scope="row"></th>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;"></td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;"></td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;"></td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;"></td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: right;"></td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: center; font-size: 25px;">Subtotal = Rs. 400.00</td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: center; font-size: 25px;">Discount = Rs. 10.00</td>
    </tr>
    <tr>
    <td colspan="5" style="text-align: center; font-size: 25px;">Tax = Rs.10.00</td>
    </tr>
  </tbody>
</table>
</div>
<div class="total">
  <strong style="font-size: 40px; margin-left: 180px; text-align: center;color: rgb(255, 255, 255);">Total Price = Rs. 999.99</strong>
      </div>


  <!--<div class="container">
    <div class="row col-12 flex-row" style="background-color:#ffffff ; border-bottom: 1px solid #a09f9f;justify-content: center;">
        <div class="col-1" style="text-align: center !important;color: rgb(0, 0, 0);">
            <strong>No</strong>
        </div>
        <div class="col-4" style="text-align: center !important;color: rgb(0, 0, 0);">
            <strong>Product Name</strong>
        </div>
        <div class="col-2" style="text-align: center !important; color: rgb(0, 0, 0);">
            <strong>Qty</strong>
        </div>
        <div class="col-2" style="text-align: center !important; color: rgb(0, 0, 0);">
            <strong>Unit Price</strong>
        </div>
        <div class="col-3" style="text-align: center !important; color: rgb(0, 0, 0);" >
            <strong>Price</strong>
        </div>
    </div>
</div>

<div class="product-table">
  <div class="row col-12 flex-row" v-for="(product, index) in products" :key="product.row_id" style="background-color:#ffffff ; border-bottom: 1px solid #a09f9f;justify-content: center;">
    <div class="col-1" style="text-align: center !important;color: rgb(0, 0, 0);">
      <strong>{{ index + 1 }}</strong>
    </div>
    <div class="col-4" style=" text-align: center !important;color: rgb(0, 0, 0);">
      <strong>{{ product.product_name }}</strong>
    </div>
    <div class="col-2" style="text-align: center !important;color: rgb(0, 0, 0);">
      <strong>{{ product.quantity }}</strong>
    </div>
    <div class="col-2" style="text-align: center !important;color: rgb(0, 0, 0);">
      <strong>{{ product.price }}</strong>
    </div>
    <div class="col-3" style="text-align: center !important;color: rgb(0, 0, 0);">
      <strong>{{ product.productTotalPrice.toFixed(2) }}</strong>
    </div>
  </div>
</div>-->


    <!--<div class="row col-10 under-table">
      <div class="row">
          <span style="font-size: 18px;text-align-last: right; color: rgb(255, 255, 255); margin-right: 70px;">Total item = 8</span>
        </div>
      <div class="row">
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 15dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc; margin-left: 15px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 20px;text-align: center;color: rgb(0, 0, 0);">Subtotal</strong>
        </div>
        <div class="row">
          <span>400.50</span>
        </div>
      </div>
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 15dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc; margin-left: 10px;border-right: 5px solid #000000;">
        <div class="row">
          <strong style="font-size: 20px;text-align: center;color: rgb(0, 0, 0);">Discount</strong>
        </div>
        <div class="row">
          <span>400.50</span>
        </div>
      </div>
      <div class="col-2" style="font-size: 20px;text-align: center;border-radius: 2dvh 2dvh 2dvh 2dvh; width: 15dvh;height: 10.5dvh; background: #fcfc0f; border-right: 3px solid #ccc;margin-left:10px;border-right: 5px solid #000000;">
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
    </div>-->
  </div> 
  </div>
</div>


  
</template>


<script>

import APIService from "@/service/APIService";
import Image_Set_Test_Sub_1 from "@/components/Image_Set_Test_Sub_1.vue";

export default {
  components: {
    Image_Set_Test_Sub_1,
  },
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

  .invoice{
    background: linear-gradient(to bottom, #033D8C 20%, #0598D1 50%,#033D8C);
    border-color: rgba(255, 250, 250, 0);
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
  .image {
  margin-left: 10px;
  margin-bottom: 88px;
  margin-top: 50px;
  height: 750px;
  width: 100px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  border-radius: 30px; /* Adjust the value as desired */
  border-color: #ffff;
  border: 15px;
}
 .block {
    background-image: #fffdfd;
    padding: 5px;
    height: 156px;
    margin-top: 30px;
    justify-content: center;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
}

.name {
  font-size: 4px;
  color: #ffffff;
  text-overflow: ellipsis;
  margin-left: 7px;
  margin-top: 10px;
  align-items: center;
  font-weight: bold;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.bold-text {
  margin-left: 6px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.current-time{
    font-size: 14px;
    color: #ffffff;
    margin-right: 40px;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
.main-table{
  margin-right: 30px;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
.under-table{
    background-color: #00000000;
    position: absolute;
    width: 80dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    border: 1px;
    border-color: #d55c1f;
    margin-left: 20px;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
  .watermark {
  right: 0;
  transform: translate(-30%, -30%);
  font-size: 16px;
  background-color: #ffff;
  pointer-events: none;
  padding-bottom: 10px;
  height: 50px;
  width: 200px;
  align-items: center;
  margin-right: 800px;
  margin-top: 530px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
}

.watermark-image {
  height: 50px;
  width: 50px;
}
</style>
