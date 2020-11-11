import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import Dashboard from '../views/Dashboard.vue'
import AddProductPage from '../views/AddProduct.vue'
import EditProductPage from '../views/EditProduct.vue'
import BannerPage from '../views/BannerPage.vue'
import AddBannerPage from '../views/AddBanner.vue'
import EditBannerPage from '../views/EditBanner.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProductPage
  },
  {
    path: '/editProduct/:id',
    name: 'EditProduct',
    component: EditProductPage
  },
  {
    path: '/banners',
    name: 'BannerPage',
    component: BannerPage
  },
  {
    path: '/addBanner',
    name: 'AddBanner',
    component: AddBannerPage
  },
  {
    path: '/editBanner/:id',
    name: 'EditBanner',
    component: EditBannerPage
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
