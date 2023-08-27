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
        "https://s3.amazonaws.com/ocn-media/44c1f751-feaf-41bc-ae31-34cfdad5baea.jpeg",
        "https://b.zmtcdn.com/data/pictures/chains/8/310078/7c8d1e6d9612e5bee0d54a39188e95a4.jpg",
        "https://cbs12.com/resources/media2/16x9/full/1015/center/80/e171891d-21dc-4e40-82bd-8c66e301099d-large16x9_whopper.JPG",
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
