import {$authHost, $host} from "./index"

export const createOneOnOne = async (sendData) => {
    const {data} = await $authHost.post('api/ws/create/oneonone', sendData)
    return data
}


// export const userCheck = async (id, checked, typeid, brandid, lap) => {
//     const {data} = await $authHost.post('api/vs/usercheck', {id, checked, typeid, brandid, lap})
//     return data
// }
