<template>
    测试页
    <div>
        <el-button @click="btn">btn</el-button>
    </div>
    <div>
        <el-button @click="axios_get">axios_get</el-button>
    </div>
    <div>
        <el-switch v-model="global.log"></el-switch>
    </div>
    <div>
        {{ msg }}
    </div>
    <div>
        <!--显示全局变量状态-->
        global
        {{ global }}
    </div>
</template>

<script setup>
// define
import { ref } from 'vue'
import { axios } from '@/util/myAxios'
import { global } from '@/util/global'

let msg = ref("hello world!"); //测试信息显示

// function
/**
 * 测试点击事件
 */
let btn = () => {
    console.log(111);
};

/**
 * 测试axios请求
 */
let axios_get = () => {
    axios.post('test/time')
        .then(res => {
            console.log(res.data);
        })
};

</script>