<template>
    <RouterLink to="/login/login">登录</RouterLink>
    <RouterLink to="/login/reg">注册</RouterLink>
    <RouterLink to="/login/find">找回密码</RouterLink>
    <h1>
        登录
    </h1>
    账号:
    <el-input v-model="global.user.name" />
    密码:
    <el-input type="password" v-model="global.user.password" show-password />
    <el-button @click="reg">登录</el-button>
    <el-button @click="cancel">注销</el-button>
</template>

<script setup>

import { ref, reactive, isReactive } from 'vue'
import axios from '@/util/request'
import global from '@/util/global'

const reg = () => {
    axios.get(`user/login/${global.user.name}/${global.user.password}`)
        .then(res => {
            let data = res.data;
            global.token = data.result.tokenValue;
            localStorage.setItem("token", global.token);
        }
    )
}

const cancel = () => {
    global.user.name = "";
    global.user.password = "";
    global.user.telephone = "";
    axios.get(`user/logout`)
        .then(res => {
            console.log(res.data);
        }
    )
}


</script>