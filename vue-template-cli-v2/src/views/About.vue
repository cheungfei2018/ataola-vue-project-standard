<template>
  <div class="about">
    <modal title="提示" :content="modalContent" :visible.sync="visible" @confirm="confirm"></modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true, // 显示模态框
      modalContent: '这是一段自定义模态框消息'
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      console.log('点击确定');
    }
  }
};
</script>
