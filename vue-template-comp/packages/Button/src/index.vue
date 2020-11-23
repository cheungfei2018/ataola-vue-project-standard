<template>
  <div class="zjt-button">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'zjt-button',
  props: {
    type: { type: String, default: 'Button' }
  }
};
</script>
<style scoped>
.zjt-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
