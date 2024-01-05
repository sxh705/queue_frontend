<template>
    <RouterLink to="/login/login">登录</RouterLink>
    <RouterLink to="/login/reg">注册</RouterLink>
    <RouterLink to="/login/find">找回密码</RouterLink>
    <h1>
        登录
    </h1>
    <form>
        账号:
        <el-input v-model="global.user.name" />
        密码:
        <el-input type="password" v-model="global.user.password" show-password />
        <el-button @click="login">登录</el-button>
        <el-button @click="logout">注销</el-button>
    </form>
</template>

<script setup>
// define
import { ref, reactive, isReactive } from 'vue'
import { axios } from '@/util/myAxios'
import { global } from '@/util/global'

// method
/**
 * 登录方法
 */
const login = () => {
    axios.get(`user/login/${global.user.name}/${global.user.password}`)
        .then(res => {
            let data = res.data;
            global.token = data.result.tokenValue;
            localStorage.setItem("token", global.token);
        }
        )
}

/**
 * 注销方法
 */
const logout = () => {
    global.user = reactive({
        name: "",
        password: "",
        telephone: "",
    })
    axios.get(`user/logout`)
        .then(res => {
            console.log(res.data);
        }
        )
}


</script>