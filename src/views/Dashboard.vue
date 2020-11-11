<template>
  <div class="container-fluid mt-5">
    <h2 class="text-center"><b><strong>Products</strong></b></h2>
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
import Swal from 'sweetalert2'
import ProductRow from '../components/ProductRow'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: 'Home',
  components: {
    ProductRow
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.fetchProducts()
          Toast.fire({
            icon: 'success',
            title: data.msg
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  },
  beforeRouteEnter (to, from, next) {
    if (from.name !== 'Dashboard') next()
  }
}
</script>
