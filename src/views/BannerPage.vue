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
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'BannerPage',
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    deleteBanner (id) {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure ?',
        text: 'This banner will be deleted.',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonColor: '#DC3545'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteBanner', id)
              .then(({ data }) => {
                this.fetchBanners()
                Toast.fire({
                  icon: 'success',
                  title: data.msg
                })
              })
              .catch(({ response }) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Something Went Wrong..',
                  text: response.data.msg
                })
              })
          }
        })
    }
  },
  components: {
    BannerRow
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
