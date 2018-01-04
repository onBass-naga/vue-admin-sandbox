import axios from 'axios'
import { getAccessToken } from '@/utils/auth'

const client = axios.create({
  baseURL: process.env.API_ENDPOINT_URL,
  timeout: 5000
})

client.interceptors.request.use(config => {
  const token = getAccessToken() || 'none'
  config.headers = {
    'ContentType': 'application/json',
    'Authorization': `Bearer ${token}`
  }
  return config
})

export default {
  get: (path) => {
    return new Promise((resolve, reject) => {
      client.get(path).then(response => {
        resolve(response)
      }, error => {
        resolve(error)
      })
    })
  },
  post: (path, body) => {
    return new Promise((resolve, reject) => {
      client.post(path, body).then(response => {
        resolve(response)
      }, error => {
        resolve(error)
      })
    })
  }
}
