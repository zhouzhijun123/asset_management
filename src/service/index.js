import axios from 'axios';
import store from '../store'
//import config from './config';

// // 判断是路由跳转还是 axios 请求
// if (process.server) {
//   config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`;
// }

const service = axios.create({
  baseURL: 'http://192.168.50.35:8080',
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    //"Authorization": localStorage.getItem("token"),
  }
});
service.interceptors.request.use(
  config => {
    const token = store.state.token;
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
// 返回结果处理
// service.interceptors.response.use(
//   (res) => {
//     const x = {};
//     x.data = res.data;
//     x.status = res.status;
//     x.statusText = res.statusText;
//     x.headers = res.headers;
//     return x;
//   },
//   (error) => { Promise.reject(error); },
// );

export default {
  // post 方法
  post(url, data) {
    return service({
      method: 'post',
      url,
      data,
    });
  },
  // put 方法
  put(url, data) {
    return service({
      method: 'put',
      url,
      data,
    });
  },
  // get 方法
  get(url, data) {
    return service({
      method: 'get',
      url,
      params: data,
    });
  },
  // delete 方法
  delete(url, data) {
    return service({
      method: 'delete',
      url,
      ...data,
    });
  },
};
