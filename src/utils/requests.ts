import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.3.2:8080',
    timeout: 2000
})

export const $get = async (url: string, params: any) => {
    let { data } = await instance.get(url, { params })
    return data
}