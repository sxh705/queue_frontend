import globalAxios from 'axios'
import { global } from '@/util/global'
import { notify } from '@/util/tool.js'

const axios = globalAxios.create({
    baseURL: "http://localhost:8080",
})

axios.interceptors.request.use(
    req => {
        console.log(global);
        req.headers['satoken'] = global.token;
        // console.log(req.headers['satoken']);
        return req;
    },
    err => {
        notify('warning', err.message);
        console.error(err);
        return err;
    },
)

axios.interceptors.response.use(
    res => {
        let data = res.data;
        if (!!data.message) {
            if (data.code == 200) {
                notify('success', data.message);
            } else {
                notify('warning', data.message);
            }
        }
        return res;
    },
    err => {
        notify('warning', err.message);
        console.error(err);
        return err;
    }
)


export { axios, };