<template>
  <div class="hello">
    <h1>
      {{ msg }}
      <i class="icon iconfont icon-chongwuqiche01"></i>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'hello world'
    };
  },
  methods: {
    async getHitokoto() {
      this.msg = await this.$get('https://v1.hitokoto.cn');
    }
  },
  created() {
    this.getHitokoto();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$primary: #009688;

h1 {
  font-weight: normal;
  color: $primary;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
