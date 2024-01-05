// define
import { ElNotification } from 'element-plus'
import { axios } from '@/util/myAxios'
import { global } from './global';
let duration = 1000;

// methods
let notify = (title, message) => {
    ElNotification({
        title,
        message,
        duration,
    });
}

let storage = {
    /**
     * 从LocalStorage恢复全局状态
     */
    recoryAll: () => {
        storage.recoveryToken();
    },
    /**
    * 恢复token状态
    */
    recoveryToken: () => {
        let token = localStorage.getItem("token");
        if (token != null) {
            global.token = token;
        }
    }
}

let request = {
    /**
     * 从服务器查询用户登录状态
     */
    checkUser: () => {
        // token会自动携带在请求中
        axios.get('user/check')
            .then(res => {
                let code = res.data.code;
                if (code != 200) {
                    notify("warning", res.data.message);
                    return;// 请求失败
                }
                if (!res.data.result) {
                    // 请求返回空结果
                    return
                }
                // 设置token信息
                let tokenInfo = res.data.result[0];
                global.token = tokenInfo.token;
                // 设置全局用户信息
                global.user = res.data.result[1];
            })
    },
}


function hookLog() {
    let logDefault = console.log; // 开关log
    console.log("global", global);
    console.log = a => {
        if (global.log) {
            logDefault(a);
        } else {
            return;
        }
    }
}

export { notify, storage, request, hookLog }
