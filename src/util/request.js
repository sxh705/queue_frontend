import axios from 'axios'
import { ElNotification } from 'element-plus'
import global from '@/util/global'

const my_axios = axios.create({
    baseURL: "http://localhost:8080",
})

let duration = 1000;

my_axios.interceptors.request.use(
    req => {
        console.log(global);
        req.headers['satoken'] = global.token;
        // console.log(req.headers['satoken']);
        return req;
    },
    err => {
        ElNotification({
            title: 'warning',
            message: err,
            duration,
        })
        console.error(err);
        return err;
    },
)

my_axios.interceptors.response.use(
    res => {
        let data = res.data;
        if (!!data.message) {
            if (data.code == 200) {
                ElNotification({
                    title: 'success',
                    message: data.message,
                    duration,
                })
            } else {
                ElNotification({
                    title: 'warning',
                    message: data.message,
                    duration,
                })
            }
        }
        return res;
    },
    err => {
        ElNotification({
            title: 'warning',
            message: err,
            duration,
        })
        console.error(err);
        return err;
    }
)

export default my_axios;