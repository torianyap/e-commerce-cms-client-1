<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" alt="#" width="300px" height="250px" class="ml-5"></td>
    <td>Rp. {{ toCurrency }}</td>
    <td>{{ product.stock }} pcs</td>
    <td>
      <button @click="toEditPage(product.id)" class="btn btn-black shadow mb-2">Edit</button> <br>
      <button @click="deleteProduct(product.id)" class="btn btn-del shadow-lg">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductRow',
  methods: {
    toEditPage (id) {
      this.$router.push({ name: 'EditProduct', params: { id } })
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    }
  },
  props: ['product', 'index'],
  computed: {
    toCurrency () {
      const currency = new Intl.NumberFormat('id', { maximumSignificantDigits: 2 }).format(this.product.price)
      return currency
    }
  }
}
</script>

<style scoped>
.btn-black{
  color: white;
  background-color: #353030;
}
.btn-del{
  color: white;
  background-color: #E3403A;
}
</style>
