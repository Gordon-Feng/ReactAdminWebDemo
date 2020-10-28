import axios from 'axios'

// 服务器api地址
const ApiUrl = 'http://manage.likun1997.com'
// 图片服务器地址
const ImgUrl = 'https://www.likun1997.com'

// http请求错误处理
const errorHandler = (error) => {
    alert(error.message)
    return { status: -200, msg: error.message }
}

// http请求结果过滤
const responseHandler = (res) => {
    if (res.status && res.status >= 400) {
        alert(res.data.msg)
    } else {
        if (res.data.status !== 200) {
            alert(res.data.msg)
        } else {
            return res.data
        }
    }
}

// 封装本地存储方法
const Storage = {
    set(key,value){
        let val = value;
        if(typeof(val) === 'object'){
            val = JSON.stringify(val)
        }
        localStorage.setItem(key,val);
    },
    get(key){
        return localStorage.getItem(key);
    },
    remove(key){
        return localStorage.removeItem(key);
    }
}

// 封装http请求
// 服务器get请求,needHeader参数用于判断是否需要认证
const getData = ( url, params, needHeader ) => {
    let headers = {};
    if(needHeader){
        headers = {
            token:Storage.get('token')
        }
    }
    const xhr = axios.create({
        baseURL:ApiUrl,
        timeout:10000,
    });
    return new Promise((resolve)=>{
        xhr({url, params, headers, method:'get'})
        .then(res => resolve(responseHandler(res)))
        .catch(err => resolve(errorHandler(err)))
        .finally(() => {

        })
    })
}
  
// 服务器post请求,needHeader参数用于判断是否需要认证
const postData = ( url, data, needHeader ) => {
    let headers = {};
    if(needHeader){
        headers = {
            token:Storage.get('token')
        }
    }
    const xhr = axios.create({
        baseURL:ApiUrl,
        timeout:10000,
    });
    return new Promise((resolve)=>{
        xhr({url, data, headers, method:'post'})
        .then(res => resolve(responseHandler(res)))
        .catch(err => resolve(errorHandler(err)))
        .finally(() => {

        })
    })
}

// 管理员账号登录
const AdminLogin = (data)=>{
    const url = '/Admin/Login';
    return postData(url , data);
}

// 获取学校列表
const GetSchoolList = (data)=>{
    const url = '/SuperClub/School/GetSchoolList';
    return getData(url , data , true);
}

export {
    ApiUrl,
    ImgUrl,
    Storage,
    AdminLogin,
    GetSchoolList
}