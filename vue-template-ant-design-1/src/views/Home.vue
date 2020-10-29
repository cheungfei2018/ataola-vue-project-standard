<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a-button type="primary">{{ title }}</a-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
    };
  },
};
</script>
