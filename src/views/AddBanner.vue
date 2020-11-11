<template>
  <div class="container-fluid" style="margin-top: 4em">
    <form
      @submit.prevent="addBanner"
      class="form-signin bg-light text-dark rounded shadow-lg text-center"
    >
      <h3><strong>Add A New Banner</strong></h3> <br>
      <img src="../assets/edit.png" alt="edit" width="100%">
      <div class="form-group">
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
          <option value="active" selected>Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button class="btn btn-red text-light" type="submit">Add banner</button>
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
      this.$store.dispatch('addBanner', this.banner)
        .then(({ data }) => {
          this.$router.push({ name: 'BannerPage' })
          Toast.fire({
            icon: 'success',
            title: 'Banner has been added'
          })
        })
        .catch(({ response }) => {
          Swal.fire({
            icon: 'error',
            text: response.data.msg
          })
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
