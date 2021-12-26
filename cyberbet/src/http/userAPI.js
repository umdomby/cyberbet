import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, username, rating, twitch, youtube, facebook, instagram, telegram, vk, ok, role, promo) => {
    const a = 2
    const {data} = await $host.post('api/user/registration', {email, username, password, rating, twitch, youtube, facebook, instagram, telegram, vk, ok, role, promo})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const registrationpromo = async (email, password, username, rating, twitch, facebook, instagram, telegram, vk, ok, role, promo) => {
    const {data} = await $host.post('api/user/registration/' + promo, {email, username, password, rating, twitch, facebook, instagram, telegram, vk, ok, role, promo})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

// export const registration = async (user) => {
//     const {data} = await $authHost.post('api/device', user)
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
        const {data} = await $authHost.get('api/user/auth' )
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
}

