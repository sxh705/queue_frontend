<template>
    <RouterLink to="/login/login">登录</RouterLink>
    <RouterLink to="/login/reg">注册</RouterLink>
    <RouterLink to="/login/find">找回密码</RouterLink>
    <h1>
        注册
    </h1>
    账号:
    <el-input v-model="global.user.name" />
    密码:
    <el-input v-model="global.user.password" />
    联系方式
    <el-input v-model="global.user.telephone"></el-input>
    <el-button @click="reg">注册</el-button>
</template>

<script setup>
// define
import { ref, reactive } from 'vue'
import { axios } from '/src/util/myAxios'
import { global } from '@/util/global'

// methods
/**
 * 发送注册请求,name,password和telephone
 * 成功会自动返回结果.
 */
const reg = () => {
    axios.post(`user/reg`, {
        name: global.user.name,
        password: global.user.password,
        telephone: global.user.telephone
    })
}

</script>