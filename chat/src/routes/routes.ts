import {FC} from 'react'

import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Chat from '../pages/Chat/Chat'


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
    },

]