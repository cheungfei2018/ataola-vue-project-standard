<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="user in userinfo" :key="user.id">
        <div>{{ user.id }}</div>
        <div>{{ user.name }}</div>
        <div>{{ user.birth }}</div>
        <div>{{ user.country }}</div>
        <div><img :src="user.thumb" alt="" /></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { get } from '../utils/request';
export default {
  name: 'About',
  data() {
    return {
      userinfo: []
    };
  },
  created() {
    this.queryUserinfo();
  },
  methods: {
    queryUserinfo() {
      get('/api/userinfo').then(resp => {
        console.log(resp);
        this.userinfo = resp.data;
      });
    }
  }
};
</script>
