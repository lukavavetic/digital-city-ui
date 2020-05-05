import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/Login.vue'
import UserList from './pages/Users/UserList.vue'

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
                path: '/users',
                name: '',
                component: UserList
            },
        ]
    })

    return router;
}

export let router =  createRouter();