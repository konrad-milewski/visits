import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Auth from '../views/Auth'
import Register from '../views/Register'
import AddVisit from '../views/AddVisit'

const routes =  [
    {
        path:"/",
        name: "Home",
        component: Home
    },
    {
        path:"/auth",
        name:"Auth",
        component: Auth
    },
    {
        path:"/register",
        name:"Register",
        component: Register
    },
    {
        path:"/add-visit",
        name:"AddVisit",
        component: AddVisit
    }
]

let router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;