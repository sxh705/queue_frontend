<template>
  <div style="padding: 10px;">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/login/login">注册登录</RouterLink>
    <RouterLink to="/test">测试</RouterLink>
    <RouterLink to="/kv">表测试</RouterLink>
  </div>
  <div style="padding: 10px">
    <RouterView />
  </div>
</template>

<script setup>
// define
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { storage, request, hookLog } from '@/util/tool'

// life cycle
/**
 * 全局vue初始化完成
 */
onMounted(() => {
  storage.recoryAll(); // 恢复token状态
  request.checkUser(); // 用token恢复user信息
  hookLog();
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