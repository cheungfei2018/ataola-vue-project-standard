<template>
  <div>
    Login
  </div>
</template>
<script>
import { login } from '../api/login';

export default {
  name: 'Login',
  methods: {
    async login() {
      try {
        const resp = await login();
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
