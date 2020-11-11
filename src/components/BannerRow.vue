<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td><img :src="banner.image_url" alt="#" width="300px" height="250px"></td>
    <td>{{ banner.status }}</td>
    <td>
      <button @click="editPageBanner(banner.id)" class="btn btn-black shadow mb-2">Edit</button> <br>
      <button @click="deleteBanner(banner.id)" class="btn btn-danger shadow-lg">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'BannerRow',
  methods: {
    editPageBanner (id) {
      this.$router.push({ name: 'EditBanner', params: { id } })
    },
    deleteBanner (id) {
      const result = confirm('Want to delete this banner ?')
      if (result) {
        this.$emit('deleteBanner', id)
      }
    }
  },
  props: ['banner', 'index']
}
</script>

<style>
.btn-black{
  color: white;
  background-color: #353030;
}
</style>
