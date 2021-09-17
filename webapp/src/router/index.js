import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'Login' }},
 {
  path: '/login',
  name: 'Login',
 
    component: () => import(/* webpackChunkName: "login" */"../views/auth/login.vue"),
  
    meta:{
      layout:"AuthLayout"
    }
 },
 {
  path: '/home',
  name: 'Home',
 
    component: () => import(/* webpackChunkName: "home" */"../views/home/index.vue"),
    meta:{
      layout:"HomeLayout"
    }
 },
 {
  path: '/product',
  name: 'Product',
 
    component: () => import(/* webpackChunkName: "product" */"../views/Product.vue"),
 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
