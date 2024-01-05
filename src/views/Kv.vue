<template>
    <el-table :data="tableData" border>
        <el-table-column prop="k" label="k" width="50"></el-table-column>
        <el-table-column prop="v" label="v"></el-table-column>
    </el-table>
</template>

<script setup>
// define
import { ref, reactive } from 'vue'
import { axios } from '@/util/myAxios'

let tableData = ref([]);

// methods
axios.get("test/exec/select * from t_kv limit 10")
    .then(res => {
        tableData.value = res.data
    })

</script>