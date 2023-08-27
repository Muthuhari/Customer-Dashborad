<template>
  <div class="hello">
    <h1>{{event_msg}}</h1>
    <image_b
  </div>
</template>

<script>
import Image_box from "@/components/Image_Set.vue";

export default {
  components: {Image_box},
  data() {
    return {
      event_msg: '' // Initialize the variable with an empty value
    };
  },
  methods: {
    assignData() {
      this.event_msg = 'asd'; // Assign data to the variable
    }
  },
  mounted() {
    window.Echo.channel('trades') // Replace 'channel-name' with your actual channel name
        .listen('MyEvent', (event) => {
          // Trigger the desired action here
          this.assignData()
          console.log('WebSocket event received:', event);
        });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;
}
</style>
