<template>
  <div style="padding: 10px;">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/test">测试</RouterLink>
    <RouterLink to="/login/login">注册登录</RouterLink>
  </div>
  <div style="padding: 10px">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import global from '@/util/global';
import { ref, onMounted } from 'vue'

onMounted(() => {
  let token = localStorage.getItem("token");
  if (token != null) {
    global.token = token;
    
  }
})

</script>

<style>
a {
  margin: 10px;
}

div {
  margin: 10px 0
}

span {
  margin: 10px 0
}

</style>