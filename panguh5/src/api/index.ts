import { homeParams } from "@/interface/request";
import fetch from '@/utils/fetch'

// 获取首页数据
export function getHomeApi(params:homeParams){
    return fetch({
        type: 'panguH5',
        url: '/flow/index/index',
        method: 'GET',
        params:params
    })
}