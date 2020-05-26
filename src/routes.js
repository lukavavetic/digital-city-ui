import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Auth/Login.vue'
import AdminMain from "./pages/Admin/AdminMain";
import UserList from './pages/Admin/Users/UserList.vue'
import UserAdd from "./pages/Admin/Users/UserAdd";
import PermissionList from "./pages/Admin/Permissions/PermissionList";
import PermissionAdd from "./pages/Admin/Permissions/PermissionAdd";
import PermissionEdit from "./pages/Admin/Permissions/PermissionEdit";
import Home from './pages/Home'
import Alert from './components/Alert'

function createRouter() {
    var router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: '',
                component: Home
            },
            {
                path: '/test',
                name: '',
                component: Alert
            },
            {
                path: '/login',
                name: '',
                component: Login
            },
            {
                path: '/admin',
                name: '',
                component: AdminMain
            },
            {
                path: '/admin/users',
                name: '',
                component: UserList
            },
            {
                path: '/admin/users/add',
                name: '',
                component: UserAdd
            },
            {
                path: '/admin/permissions',
                name: '',
                component: PermissionList
            },
            {
                path: '/admin/permissions/add',
                name: '',
                component: PermissionAdd
            },
            {
                path: '/admin/permissions/edit/:identifier',
                name: '',
                component: PermissionEdit
            }
        ]
    })

    return router;
}

export let router =  createRouter();