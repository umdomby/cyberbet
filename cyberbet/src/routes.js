import Admin from "./pages/Admin";
import Champ from "./pages/Champ";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, VS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ADMIN_SETTINGS, QIWI_ROUTE, USERS_ROUTE, WS} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import AuthPromo from "./pages/AuthPromo";
import DevicePage from "./pages/DevicePage";
import VSPage from "./pages/VSPage";
import Qiwi from "./pages/Qiwi";
import Users from "./pages/Users";
import OneOnOne from "./pages/OneOnOne";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: ADMIN_SETTINGS,
        Component: Champ
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE + '/:promo',
        Component: AuthPromo
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: VS_ROUTE + '/:type/:id',
        Component: VSPage
    },
    {
        path: QIWI_ROUTE,
        Component: Qiwi
    },
    {
        path: USERS_ROUTE,
        Component: Users
    },

    {
        path: WS,
        Component: OneOnOne
    },
    // {
    //     path: WS,
    //     Component: OneOnOne
    // },

]
