<template>
  <!--<div v-if="status === 'idle'">
        <Image_Set_Test_Sub_1 />
  </div>-->
  <div>
    <Billing_Status :businessBasicDetails="businessBasicDetails" :productsData="productData"/>
  </div>
  <!--<div v-else-if="status === 'checkout'">
    13
  </div>-->
</template>

<script>
import Image_Set_Test_Sub_1 from "@/components/Image_Set_Test_Sub_1.vue";
import ProductLine from "@/components/ProductLine.vue";
import Billing_Status from "@/pages/Billing_Status.vue";

export default {
  components: {Billing_Status, ProductLine, Image_Set_Test_Sub_1},
  props: {
    businessBasicDetails:{
      type: Object
    }
  },
  data() {
    return {
      images: [],
      currentImageIndex: 0,
      status: 'billing',
      productData:[
        {row_id: 2, product_name: 'ice cream cone', quantity: 1.99, price: '99999.99'},
      ]
    };
  },
  computed: {
    currentImage() {
      return this.images.length > 0 ? this.images[this.currentImageIndex] : null;
    },
    altText() {
      return `Image ${this.currentImageIndex + 1}`;
    },
  },
  mounted() {
    // this.fetchImages();

      // Simulating billing start
    window.Echo.channel('storemate_cus_display').listen('ProductAdd', (e) => {
      this.productData.push(e.data);
      this.status = 'billing';
    });

    window.Echo.channel('storemate_cus_display').listen('BillFinalize', (e) => {
      // Simulating checkout
      setTimeout(() => {
        this.status = 'checkout';

        // After 5 seconds, change status back to idle
        setTimeout(() => {
          this.status = 'idle';
        }, 5000);
      }, 2000);
    });



  },
  methods: {
    fetchImages() {
      // Make your API request to retrieve the image array
      // Replace 'apiEndpoint' with the actual endpoint URL
      // Assuming the response data is an array of image URLs
      fetch('apiEndpoint')
          .then(response => response.json())
          .then(data => {
            this.images = data;
          })
          .catch(error => {
            console.error('Error fetching images:', error);
          });
    },
  },
};
</script>

<style scoped>
.idle-status {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.billing-status {
  width: 60%;
  margin: auto;
}

.product-line {
  margin-top: 20px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5dvh;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
}

</style>
