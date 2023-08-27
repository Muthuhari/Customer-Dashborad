<template>
  <div class="app-container">
    <BaseDisplay :businessBasicDetails="businessBasicDetails"/>
  </div>

  <footer class="footer">
    <div class="watermark">
      <strong>Powered by </strong>
      <img src="https://storemate.lk/wp-content/uploads/2022/01/Store-Mate-Logo-1-1.webp" class="watermark-image" >
    </div>
  </footer>
</template>

<script>

import BaseDisplay from './pages/Base_Display.vue'
import APIService from "@/service/APIService";


export default {
  name: 'App',
  components:{
    BaseDisplay
  },
  data() {
    return {
      businessBasicDetails:[]
    };
  },
  mounted() {
    const businessBasicDetails = new APIService(this.authToken, this.apiBaseURL, 'business-basic-details');
    businessBasicDetails.getData()
        .then(data => {
          this.businessBasicDetails = data;
        })
        .catch(error => {
          console.error(error);
        });
  }
}
</script>
<style>
.app-container {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5dvh;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
}

.watermark {
  position: absolute;
  top: 35%;
  right: 0;
  transform: translate(-30%, -30%);
  font-size: 16px;
  pointer-events: none;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.watermark-image {
  height: 50px;
  width: 50px;
}
</style>
