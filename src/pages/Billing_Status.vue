<script>

import Image_Set_Test_Sub_1 from "@/components/Image_Set_Test_Sub_1.vue";
// import Invoice from "@/themes/Invoice2.vue";
import Invoice4 from "@/themes/Invoice4.vue";

export default {
  components: {
    // Invoice,
    Image_Set_Test_Sub_1,
    Invoice4
},
  props:{
    businessBasicDetails:{
      type: Object
    },
    productsData:{
      type:Array
    }
  }
}
</script>

<template>
  <div class="box">
  <div class="row">
    <!--<div class="col-7">
      <Image_Set_Test_Sub_1 width="100%"/>
    </div>
    <div class="col-5">
      <Invoice :businessBasicDetails="businessBasicDetails" :products-data="productsData"/>
    </div>-->
    <Invoice4 :businessBasicDetails="businessBasicDetails" :products-data="productsData"/>
  </div>
  </div>
  
  <!--<div class="row">
    <div class="col-7">
      <Image_Set_Test_Sub_1 width="100%"/>
    </div>
    <div class="col-5">
      <Invoice :businessBasicDetails="businessBasicDetails" :products-data="productsData"/>
    </div>
  </div>-->
</template>

<style scoped>
@import'~bootstrap/dist/css/bootstrap.css';
</style>
