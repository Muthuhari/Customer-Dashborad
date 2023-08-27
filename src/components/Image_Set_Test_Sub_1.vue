<template>
  <div>
    <img :src="currentImage" :style="{ width: imageWidth, height: imageHeight }" v-if="currentImage" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100dvw', // Default image width if prop is not provided
    },
    height: {
      type: String,
      default: '100dvh', // Default image height if prop is not provided
    },
  },
  data() {
    return {
      images: [
        "https://4kwallpapers.com/images/walls/thumbs_3t/11656.jpg",
        "https://4kwallpapers.com/images/walls/thumbs_3t/11606.jpg",
      ],
      currentImageIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
    imageWidth() {
      return this.width;
    },
    imageHeight() {
      return this.height;
    },
  },
  created() {
    this.startTimer();
  },
  beforeDestroy() {
    this.stopTimer();
  },
  methods: {
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
  object-fit:fill;
}
</style>
