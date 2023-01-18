import {FC} from 'react'

import Home from "../pages/Home/Home"
import Login from "../pages/Home/Login/Login"


export interface IRoute {
    component: FC,
    path: string,
    isAuth: boolean
}

export const routes: IRoute[] = [
    {
        path: '/',
        component: Home,
        isAuth: false
    },
    {
        path: '/login',
        component: Login,
        isAuth: false
    }
]