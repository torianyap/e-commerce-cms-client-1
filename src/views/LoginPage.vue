<template>
  <form
    @submit.prevent="loginAdmin"
    class="form-signin bg-light rounded shadow-lg text-center"
    style="margin-top: 6em"
  >
    <h3><b>LOGIN</b></h3>
    <img src="../assets/auth.png" alt="auth" width="100%">
    <div class="form-group">
      <label for="login_email"><i class="fas fa-user-shield mr-2"></i>Email</label>
      <input
        v-model="admin.email"
        type="email"
        id="login_email"
        placeholder="email here"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="login_password"><i class="fas fa-unlock-alt mr-2"></i>Password</label>
      <input
        v-model="admin.password"
        type="password"
        id="login_password"
        placeholder="password here"
        class="form-control"
        required
      >
    </div>
    <button class="btn btn-outline-success" type="submit">Login</button>
  </form>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'LoginPage',
  data () {
    return {
      admin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginAdmin () {
      axios({
        method: 'POST',
        url: '/login/admin',
        data: this.admin
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('user', data.user)
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}

</script>

<style scoped>

</style>
