import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Shop from "./views/Shop.vue"
import Points from "./views/Points.vue"

import './styles/index.css'
import App from './App.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: "/", 
            component: Shop
        },
        {
            path : "/points",
            component : Points
        }
    ]
})

createApp(App).use(router).mount('#app')


