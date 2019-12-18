'use strict'

import axios from 'axios'
import qs from 'qs'
import storage from '@/utils/storage'

axios.defaults.withCredentials = true; //允许携带cookie

//请求拦截器
axios.interceptors.request.use(config => {
  //config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['UserToken'] = storage.get('token');
  config.url = 'http://192.168.0.107:7777/api' + config.url;
  // config.url = 'http://hangye.manmanbuy.com/api' + config.url;
  //config.url = '/api' + config.url;
  config.timeout = 50000;
  return config;
}, error => {
  return Promise.reject(error);
});
export default {
  post(url, data) {
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
    }).then(
      (response) => {
        if (response.status && response.status != 200) {
          return {
            ExceptionCode: 0,
            Code: 100000,
            Message: '加载失败,请重试',
            Data: null,
            ServerTime: null
          }
        }
        return response.data;
      }
    )
  },
  get(url, data) {
    return axios({
      method: 'get',
      url: url,
      params: data
    }).then(
      (response) => {
        if (response.status && response.status != 200) {
          return {
            ExceptionCode: 0,
            Code: 100000,
            Message: '加载失败,请重试',
            Data: null,
            ServerTime: null
          }
        }
        return response.data;
      }
    )
  }
}
