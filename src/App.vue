<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow" style="justify-content: space-between;" id="nav">
      <div class="d-flex justify-content-center">
        <router-link v-show="!loggedIn" class="navbar-brand text-light" to="/">Login</router-link>
        <div>
          <router-link v-show="loggedIn" class="navbar-brand text-light" to="/dashboard">Dashboard</router-link>
          <router-link v-show="loggedIn" class="navbar-brand text-light" to="/addProduct">Add Product</router-link>
        </div>
        <div class="ml-3">
          <router-link v-show="loggedIn" class="navbar-brand text-light" to="/banners">Banners</router-link>
          <router-link v-show="loggedIn" class="navbar-brand text-light" to="/addBanner">Add Banner</router-link>
        </div>
      </div>
      <div>
        <a v-show="loggedIn" @click.prevent="logout" href="#" class="navbar-brand text-danger"><i class="fas fa-power-off mr-2"></i>Logout</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
      this.loggedIn = false
    }
  },
  created () {
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$router.push({ name: 'Dashboard' })
      this.loggedIn = true
    } else {
      this.loggedIn = false
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
