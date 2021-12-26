import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const checkUserData= async (id) => {
    const {data} = await $authHost.get('api/user/userdata/' + id )
    return data
}

export const checkUsers = async () => {
    const {data} = await $host.get('api/user/userdata/users')
    return data
}

export const fetchPromo = async (id) => {
    const {data} = await $host.get('api/user/userdata/promo/' + id)
    return data
}

export const checkRating = async (nametype) => {
    const {data} = await $host.get('api/user/userdata/rating/' + nametype)
    return data
}
