<template>
  <div class="container-fluid mt-5">
    <h2 class="text-center"><b><strong>Banners</strong></b></h2>
    <table class="table table-borderless my-4">
      <thead class="thead-dark">
        <th scope="col">No.</th>
        <th scope="col">Banner</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </thead>
      <tbody>
        <BannerRow
          v-for="(banner, i) in banners"
          :key="banner.id"
          :banner="banner"
          :index="i"
          @deleteBanner='deleteBanner'
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import BannerRow from '../components/BannerRow'
import axios from '../config/axios'

export default {
  name: 'BannerPage',
  data () {
    return {
      banners: []
    }
  },
  methods: {
    fetchBanners () {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          this.banners = data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBanner (id) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/banners/${+id}`,
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          this.fetchBanners()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
    BannerRow
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
