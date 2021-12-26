import {$authHost, $host} from "./index"

export const createImgVsUser = async (img) => {
    const {data} = await $authHost.post('api/vs/imgvsuser', img)
    return data
}

export const postDataLinkVs = async (id, idvs, typeId, userOpp, linkVs) => {
    const {data} = await $authHost.post('api/vs/linkvs', {id, idvs, typeId, userOpp, linkVs})
    return data
}

export const fetchUsersWin = async (typeId) => {
    const {data} = await $host.get('api/vs/userswin', {params: {typeId}})
    return data
}
