<template>
  <div class="container-fluid" style="margin-top: 4em">
    <form
      @submit.prevent="addBanner"
      class="form-signin bg-dark text-light rounded shadow-lg text-center"
    >
      <h3>Add A New Banner</h3> <br>
      <div class="form-group">
        <label for="banner_url">Banner</label>
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
          <option value="active" selected>Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button class="btn btn-red text-light" type="submit">Add banner</button>
    </form>
  </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'AddBanner',
  data () {
    return {
      banner: {
        image_url: '',
        status: ''
      }
    }
  },
  methods: {
    addBanner () {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          this.$router.push({ name: 'BannerPage' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.btn-red{
  background-color: #B22222;
}

.btn-red:hover{
  background-color: #1ccf1ccc;
}
</style>
