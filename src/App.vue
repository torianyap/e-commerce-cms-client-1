<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow" style="justify-content: space-between;" id="nav">
      <div>
        <router-link class="navbar-brand text-light" to="/">Auth</router-link>
        <router-link class="navbar-brand text-light" to="/home">Home</router-link>
      </div>
      <div>
        <a href="#" class="navbar-brand text-danger">Logout</a>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
