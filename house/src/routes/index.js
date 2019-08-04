import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '../components/tabber/home.vue'
import Member from '../components/tabber/member.vue'
import Cart from '../components/tabber/cart.vue'
import Search from '../components/tabber/search.vue'
import PhotoList from '../components/photos/photolist.vue'
import PhotoInfo from '../components/photos/photoinfo.vue'
import GoodsList from '../components/goods/goodslist.vue'
import GoodsInfo from '../components/goods/goodsinfo.vue'

var router = new VueRouter({
  routes: [
    { path: '/', redirect: 'home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo },
  ]
})
export default router;