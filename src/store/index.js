import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    loggedIn: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    loggedIn (state, payload) {
      state.loggedIn = payload
    }
  },
  actions: {
    loginAdmin (context, payload) {
      return axios({
        method: 'POST',
        url: 'login/admin',
        data: payload
      })
    },
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `products/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: token
        },
        data: payload
      })
    },
    editProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: token
        },
        data: payload.product
      })
    },
    fetchBanners (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    fetchBannerById (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `/banners/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    deleteBanner (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'DELETE',
        url: `/banners/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    addBanner (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: token
        },
        data: payload
      })
    },
    editBanner (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'PUT',
        url: `/banners/${payload.id}`,
        headers: {
          access_token: token
        },
        data: payload.banner
      })
    }
  },
  modules: {
  }
})
