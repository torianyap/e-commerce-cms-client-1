<template>
  <div class="container-fluid mt-5">
    <h2 class="text-center"><b><strong>Dashboard</strong></b></h2>
    <table class="table table-borderless my-4">
      <thead class="thead-dark">
        <th scope="col">No.</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
        <ProductRow
          v-for="(product, i) in products"
          :key="product.id"
          :product="product"
          :index="i"
          @deleteProduct='deleteProduct'
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from '../config/axios'
import ProductRow from '../components/ProductRow'

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductRow
  },
  methods: {
    fetchProducts () {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/products/${+id}`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
