<template>
  <div class="container-fluid" style="margin-top: 4em">
    <form
      @submit.prevent="addProduct"
      class="form-signin bg-dark text-light rounded shadow-lg text-center"
    >
      <h3>Add A New Product</h3> <br>
      <div class="form-group">
        <label for="product_name">Name</label>
        <input
          v-model="product.name"
          type="text"
          id="product_name"
          class="form-control"
          placeholder="Insert name here"
          required
        >
      </div>
      <div class="form-group">
        <label for="product_url">Image</label>
        <input
          v-model="product.image_url"
          type="url"
          id="product_url"
          class="form-control"
          placeholder="Insert url here"
          required
        >
      </div>
      <div class="form-group">
        <label for="product_price">Price</label>
        <input
          v-model="product.price"
          type="number"
          id="product_price"
          class="form-control"
          placeholder="Insert price here"
          required
        >
        <i>Price must be greater than 0</i>
      </div>
      <div class="form-group">
        <label for="product_stock">Stock</label>
        <input
          v-model="product.stock"
          type="number"
          id="product_stock"
          class="form-control"
          placeholder="Insert Stock here"
          required
        >
        <i>Stock must be greater than 0</i>
      </div>
      <button class="btn btn-red text-light" type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

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
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
        .then(({ data }) => {
          this.$router.push({ name: 'Dashboard' })
          Toast.fire({
            icon: 'success',
            title: `${data.name} has been added`
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong..',
            text: err.response.data.msg
          })
        })
    }
  }
}
</script>

<style scoped>
i{
  font-size: 12px;
}

.btn-red{
  background-color: #B22222;
}

.btn-red:hover{
  background-color: #1ccf1ccc;
}
</style>
