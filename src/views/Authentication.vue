<template>
  <div class="auth">
    <LoginPage v-if="pageName === 'login-page'" />
    <RegisterPage v-else-if="pageName === 'register-page'" />
  </div>
</template>

<script>
import LoginPage from '../components/LoginPage'
import RegisterPage from '../components/RegisterPage'

export default {
  name: 'Authentication',
  data () {
    return {
      pageName: 'login-page'
    }
  },
  components: {
    LoginPage,
    RegisterPage
  }
}

</script>

<style scoped>

</style>
