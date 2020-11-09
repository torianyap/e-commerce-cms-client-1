<template>
<div>
    <HomePage 
        v-if="pageName === 'home-page'">
    </HomePage>
    <LoginPage
        v-else-if="pageName === 'login-page'">
    </LoginPage>
</div>
</template>

<script>
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

export default {
    name: 'App',
    data() {
        return {
            pageName: 'home-page'
        }
    },
    components: {
        HomePage,
        LoginPage
    },
    created() {
        const access_token = localStorage.access_token
        if (access_token) {

        } else {

        }
    }
}
</script>

<style>

</style>