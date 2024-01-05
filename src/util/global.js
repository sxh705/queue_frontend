import { reactive } from "vue";

//全局变量
let global = reactive({
    user: { //用户信息
        name: "",
        password: "",
        telephone: "",
    },
    token: "", //用户token
    log: false, //开关log
})

export { global }