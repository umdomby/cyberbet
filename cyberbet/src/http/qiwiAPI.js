import {$authHost, $host} from "./index";


export const fetchQiwi = async (pay, login, nametype, typeid, description, brandName, brandid, code_transaction) => {

    const {data} = await $host.get('api/qiwi/', {params: {
            pay, login, nametype, typeid, description, brandName, brandid, code_transaction
    }})
    //const {data} = await $host.get('api/qiwi/'+pay+'/'+login+'/'+description)
    //const {data} = await $host.get('api/qiwi/' + pay)
    return data
}

export const fetchQiwiPayment = async (billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction) => {
    const {data} = await $host.get('api/qiwi/payment/', {params: {
            billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction
        }})
    return data
}

export const fetchFundGame = async (id, billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction) => {
    const {data} = await $authHost.post('api/qiwi/payfund/',  {
            id, billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction
        })
    return data
}

// export const userCheck = async (id, checked, typeid, brandid, lap) => {
//     const {data} = await $authHost.post('api/vs/usercheck', {id, checked, typeid, brandid, lap})
//     return data
// }



// export const fetchQiwiPayment = async (pay, login, nametype, typeid, description, brandid, code_transaction) => {
//     const {data} = await $host.get('api/qiwipayment/', {params: {
//             pay, login, nametype, typeid, description, brandName, brandid, code_transaction
//         }})
//     return data
// }

export const fetchQiwiPayUsers = async () => {
    const {data} = await $host.get('api/qiwi/payusers')
    return data
}
