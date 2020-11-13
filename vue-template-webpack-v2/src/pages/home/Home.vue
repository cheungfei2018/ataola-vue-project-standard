<template>
  <div class="home">
    <layout-header></layout-header>
    <transition>
      <router-view class="child-view"></router-view>
    </transition>
    <layout-footer></layout-footer>
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
  name: 'Home',
  components: {
    layoutHeader: Header,
    layoutFooter: Footer
  },
  data() {
    return {};
  }
};
</script>
