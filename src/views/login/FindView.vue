<template>
    <RouterLink to="/login/login">登录</RouterLink>
    <RouterLink to="/login/reg">注册</RouterLink>
    <RouterLink to="/login/find">找回密码</RouterLink>
    <h1>
        找回密码
    </h1>
    联系方式
    <el-input v-model="global.user.telephone"></el-input>
    验证码:
    <el-input v-model="code" />
    <div v-if="find">
        <h2>密码已找回: </h2>
        <div>账号: {{ global.user.name }}</div>
        <div>密码: {{ global.user.password }}</div>
    </div>
    <el-button @click="find_code">发送验证码</el-button>
    <el-button @click="find_tele">找回密码</el-button>
</template>

<script setup>

import { ref, reactive } from 'vue'
import axios from '@/util/request'
import global from '@/util/global'

let find = ref(false);

let code = ref("");

const find_code = () => {
    axios.post(`user/find/code`, {
        "telephone": global.user.telephone,
    })
        .then(res => {
        })
}

const find_tele = () => {
    axios.post(`user/find/find`, {
        telephone: global.user.telephone,
        code: code.value,
    })
        .then(res => {
            console.log("resdata", res.data);
            let user1 = res.data.result;
            global.user.password = user1.password;
            global.user.name = user1.name;
            find.value = true;
        })
}

</script>