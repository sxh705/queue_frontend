import { reactive } from "vue";

let global = reactive({
    user: {
        name: "",
        password: "",
        telephone: "",
    },
    token: "",
})

export default global;