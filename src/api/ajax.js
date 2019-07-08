/* 
一个能发送ajax请求的函数
1.统一处理请求异常
2.异步请求成功 的数据不是response。而是response.data
3.对post请求参数-进行ulencode处理，而不是使用默认的json方式（后台街口不支持）
*/

import axios from 'axios'
//const qs = require('qs')
import qs from 'qs'

//请求超时的全局配置
axios.defaults.timeout = 20000 //20s

//添加请求拦截器
axios.interceptors.request.use((config)=>{
    const {method,data} = config
    //如果是携带数据的post请求，进行处理
    if(method.toLowerCase()==='post' && data && typeof data==='object'){
        config.data = qs.stringify(data)
    }
   return config 
})

//添加一个响应拦截器
axios.interceptors.response.use (response => {
    return response.data
},error => {
    alert('请求异常：' + error.message)
    return new Promise(()=>{})  //中断promise链
})

export default axios
/* 
axios.post('/test_post',{name:'Tom',pwd:'123'})
axios.post()
axios({

}).then(data=>{

},error=>{

}) */