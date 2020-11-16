<template>
  <div class="tool">
    <transition>
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Tool',
  data() {
    return {};
  }
};
</script>
