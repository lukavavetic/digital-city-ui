import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Auth/Login.vue'
import UserList from './pages/Manage/Users/UserList.vue'
import PermissionList from "./pages/Manage/Permissions/PermissionList";
import ManageMain from "./pages/Manage/ManageMain";

function createRouter() {
    var router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/login',
                name: '',
                component: Login
            },
            {
                path: '/manage',
                name: '',
                component: ManageMain
            },
            {
                path: '/manage/users',
                name: '',
                component: UserList
            },
            {
                path: '/manage/permissions',
                name: '',
                component: PermissionList
            }
        ]
    })

    return router;
}

export let router =  createRouter();