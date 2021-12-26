import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const createTableRandom = async (type) => {
    const {data} = await $authHost.post('api/device/champtable', type)
    return data
}

export const createChampLap = async (type) => {
    const {data} = await $authHost.post('api/device/champlap', type)
    return data
}

export const createChampLapOne = async (type, map) => {
    const {data} = await $authHost.post('api/device/champlap/one', type, map)
    return data
}

export const createChampWin = async (type) => {
    const {data} = await $authHost.post('api/device/champwin', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

// export const fetchTypesChampStart = async () => {
//     const {data} = await $host.get('api/type/champ/start')
//     return data
// }

export const fetchTypesBrandIdname = async (typeid) => {
    const {data} = await $host.get('api/type/brand/idname/' + typeid)
    return data
}

// export const fetchTypesStart = async () => {
//     const {data} = await $host.get('api/type/start')
//     return data
// }


export const createBrand = async (brands) => {
    const {data} = await $authHost.post('api/brand', brands)
    return data
}


export const indexSelectTypeNow = async () => {
    const {data} = await $host.get('api/device/indextype', )
    return data
}

export const userCheckTwitch = async (id, checked, typeid, brandid, lap) => {
    const {data} = await $authHost.post('api/vs/user-check-twitch', {id, checked, typeid, brandid, lap})
    return data
}

export const oppCheckTwitch = async (id, checked, typeid, brandid, lap) => {
    const {data} = await $authHost.post('api/vs/opp-check-twitch', {id, checked, typeid, brandid, lap})
    return data
}

export const userCheck = async (id, checked, typeid, brandid, lap) => {
    const {data} = await $authHost.post('api/vs/usercheck', {id, checked, typeid, brandid, lap})
    return data
}

export const oppCheck = async (id, checked, typeid, brandid, lap) => {
    const {data} = await $authHost.post('api/vs/oppcheck', {id, checked, typeid, brandid, lap})
    return data
}

export const postDataTimeGame = async (typeId, brandId, id, valueDataTime, lap) => {
    const {data} = await $authHost.post('api/device/setdatatimegame', {typeId, brandId, id, valueDataTime, lap})
    return data
}

// export const postDataImg = async (id, userdataId, img) => {
//     const {data} = await $authHost.post('api/device/setdataimg', {id, userdataId, img})
//     return data
// }


export const userPayGameDevice = async (typeid) => {
    const {data} = await $host.get('api/device/paygamedevice/' + typeid)
    return data
}

export const createImg = async (formData) => {
    const {data} = await $authHost.post('api/device/setdataimg', formData)
    return data
}

export const imgPhotoGet = async (id) => {
    const {data} = await $host.get('api/device/img/photo/' + id)
    return data
}

export const postDataRating = async (id, userdataId, ratingValue) => {
    const {data} = await $authHost.post('api/device/setdatarating', {id, userdataId, ratingValue})
    return data
}
export const postDataTwitch = async (id, userdataId, TwitchValue) => {
    const {data} = await $authHost.post('api/device/setdatatwitch', {id, userdataId, TwitchValue})
    return data
}
export const postDataYoutube = async (id, userdataId, YoutubeValue) => {
    const {data} = await $authHost.post('api/device/setdatayoutube', {id, userdataId, YoutubeValue})
    return data
}
export const postDataFacebook = async (id, userdataId, FacebookValue) => {
    const {data} = await $authHost.post('api/device/setdatafacebook', {id, userdataId, FacebookValue})
    return data
}
export const postDataInstagram = async (id, userdataId, InstagramValue) => {
    const {data} = await $authHost.post('api/device/setdatainstagram', {id, userdataId, InstagramValue})
    return data
}
export const postDataTelegram = async (id, userdataId, TelegramValue) => {
    const {data} = await $authHost.post('api/device/setdatatelegram', {id, userdataId, TelegramValue})
    return data
}
export const postDataVK = async (id, userdataId, VKValue) => {
    const {data} = await $authHost.post('api/device/setdatavk', {id, userdataId, VKValue})
    return data
}
export const postDataOK = async (id, userdataId, OKValue) => {
    const {data} = await $authHost.post('api/device/setdataok', {id, userdataId, OKValue})
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

// export const fetchBrandsAll = async () => {
//     const {data} = await $host.get('api/brand/all', )
//     return data
// }

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

// export const fetchDevicesStart = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/device/start', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}


export const fetchVSDevice = async (type, id) => {
    const {data} = await $host.get('api/vs/' + type + '/'+ id)
    return data
}

