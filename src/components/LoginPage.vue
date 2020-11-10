<template>
  <div class="container my-3 mx-5 shadow bg-light rounded shadow text-center">
      <form class="form-signin bg-light rounded col-12">
        <img src="../assets/auth.png" alt="auth" width="50%">
        <div class="form-group">
          <label for="login_email">Email</label>
          <input type="email" id="login_email" placeholder="email here" class="form-control" required>
        </div>
        <div class="form-group">
          <label for="login_password">Password</label>
          <input type="password" id="login_password" placeholder="password here" class="form-control" required>
        </div>
        <button class="btn btn-outline-success" type="submit">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
