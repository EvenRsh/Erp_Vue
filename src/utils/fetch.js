import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // baseURL: 'http://localhost:8024', // api的base_url
  timeout: 5000                  // 请求超时时间
});
export default service

