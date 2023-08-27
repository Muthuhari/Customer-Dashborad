<script>
import Invoice_Calculation_Line from "@/components/Invoice_Calculation_Line.vue";

export default {
  components: {Invoice_Calculation_Line},
  props: {
    productPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    tax: {
      type: Number,
      default: 0,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    computed: {
      totalPrice() {
        return this.products.reduce((total,subTotal,discount,tax) => {
          return total + subTotal - discount + tax;
        }, 0);
      },
    },
  },
  data(){
    return {
      labelSubtotal:"Subtotal",
      labelDiscount:"Discount",
      labelTax:"Tax",
      labelTotal:"Total"
    }
  }
}
</script>

<template>
  <Invoice_Calculation_Line :calculation-line-label="labelSubtotal" :calculation-line-value="subTotal"/>
  <Invoice_Calculation_Line :calculation-line-label="labelDiscount" :calculation-line-value="discount"/>
  <Invoice_Calculation_Line :calculation-line-label="labelTax" :calculation-line-value="tax"/>
  <Invoice_Calculation_Line :calculation-line-label="labelTotal" :calculation-line-value="totalPrice"/>
</template>

