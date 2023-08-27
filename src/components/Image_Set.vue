<template>
  <div>
    <img :src="currentImage" alt="Image" v-if="currentImage" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      currentImageIndex: 0,
      timer: null,
    };
  },
  computed: {
    currentImage() {
      return this.images.length > 0 ? this.images[this.currentImageIndex] : null;
    },
  },
  mounted() {
    this.fetchImages();
  },
  created() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
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
    startTimer() {
      this.timer = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 3000); // Change the interval (in milliseconds) to adjust the swap speed
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
