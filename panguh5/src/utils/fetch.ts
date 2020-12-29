import { urlProp } from '@/interface/urlProp'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
interface AxiosRequestConfigPangu extends AxiosRequestConfig {
    type?: string
}
const service: AxiosInstance = axios.create({
    timeout: 4000,
    timeoutErrorMessage: "请求超时",
    transformRequest: [data => qs.stringify(data)],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

service.interceptors.request.use((config: AxiosRequestConfigPangu) => {
    return config
}, (error: any) => {
    return Promise.reject(error.message)
})
service.interceptors.response.use((response: AxiosResponse) => {
    return response.data
}, error => {
    return Promise.reject(error.message)
})

const URLS: urlProp = {
    panguH5: process.env.VUE_APP_PANGU_API,
}
export default function (config: AxiosRequestConfigPangu) {

    return service(config)
}