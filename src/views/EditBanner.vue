<template>
  <div class="container-fluid" style="margin-top: 4em">
    <form
      @submit.prevent="editBanner"
      class="form-signin bg-dark text-light rounded shadow-lg text-center"
    >
      <h3>Edit Banner</h3> <br>
      <img :src="banner.image_url" alt="edit" width="100%">
      <div class="form-group mt-2">
        <label for="banner_url">Banner Link</label>
        <input
          v-model="banner.image_url"
          type="url"
          id="banner_url"
          class="form-control"
          placeholder="Insert url here"
          required
        >
      </div>
      <div class="form-group">
        <label for="banner_status">Status</label>
        <select id="banner_status" v-model="banner.status" class="form-control" required>
          <option value="" disabled>Select Here</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button class="btn btn-red text-light" type="submit">Edit banner</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'EditBanner',
  data () {
    return {
      banner: {}
    }
  },
  methods: {
    fetchBanner () {
      const id = +this.$route.params.id
      this.$store.dispatch('fetchBannerById', id)
        .then(({ data }) => {
          this.banner = data
        })
        .catch(({ response }) => {
          if (response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Something Went Wrong..',
              text: response.data.msg
            })
          }
        })
    },
    editBanner () {
      const payload = {
        id: +this.$route.params.id,
        banner: this.banner
      }
      this.$store.dispatch('editBanner', payload)
        .then(({ data }) => {
          this.$router.push({ name: 'BannerPage' })
          Toast.fire({
            icon: 'success',
            title: 'Banner successfully updated'
          })
        })
        .catch((err) => {
          if (err.response) {
            this.$store.commit('errorChange', err.response.data.msg)
          }
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong..',
            text: this.errorNotification
          })
        })
    }
  },
  computed: {
    errorNotification () {
      return this.$store.state.errorNotification
    }
  },
  created () {
    this.fetchBanner()
  }
}
</script>

<style>

</style>
