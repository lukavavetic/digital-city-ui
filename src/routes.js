import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Auth/Login.vue'
import UserList from './pages/Manage/Users/UserList.vue'
import PermissionList from "./pages/Manage/Permissions/PermissionList";
import ManageMain from "./pages/Manage/ManageMain";
import PermissionAdd from "./pages/Manage/Permissions/PermissionAdd";
import PermissionEdit from "./pages/Manage/Permissions/PermissionEdit";

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
            },
            {
                path: '/manage/permissions/add',
                name: '',
                component: PermissionAdd
            },
            {
                path: '/manage/permission/edit/:id',
                name: '',
                component: PermissionEdit
            }
        ]
    })

    return router;
}

export let router =  createRouter();