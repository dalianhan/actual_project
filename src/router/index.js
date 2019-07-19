import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Category from '../pages/Category/Category.vue'
import Real from '../pages/Real/Real.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/msite',
            component: Msite,
        },
        {
            path: '/category',
            component: Category,
        },
        {
            path: '/real',
            component: Real,
        },
        {
            path: '/cart',
            component: Cart,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ]
})



