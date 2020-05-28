import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Auth/Login.vue'
import AdminMain from "./pages/Admin/AdminMain.vue";
import UserList from './pages/Admin/Users/UserList.vue'
import UserAdd from "./pages/Admin/Users/UserAdd.vue";
import PermissionList from "./pages/Admin/Permissions/PermissionList.vue";
import PermissionAdd from "./pages/Admin/Permissions/PermissionAdd.vue";
import PermissionEdit from "./pages/Admin/Permissions/PermissionEdit.vue";
import Home from './pages/Home.vue'

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