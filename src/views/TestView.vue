<template>
    测试页
    <div>
        <el-button @click="btn">btn</el-button>
    </div>
    <div>
        <el-button @click="axios_get">axios_get</el-button>
    </div>
    <div>
        {{ msg }}
    </div>
    <div>
        {{ global }}
    </div>
    <div>
        {{ check_data }}
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from '@/util/request'
import global from '@/util/global'

let btn = () => {
    console.log(111);
};

let axios_get = () => {
    axios.post('test/time')
        .then(res => {
            console.log(res.data);
        })
};

let check_data = ref(0);

let axios_check = () => {
    axios.get('user/check')
        .then(res => {
            if (!!res.data.result) {
                check_data.value = res.data.result[0];
                global.user = ref(res.data.result[1]);
            }
        })
}

onMounted(() => {
    axios_check();
})

let msg = ref("hello world!");

</script>