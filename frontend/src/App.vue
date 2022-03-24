<script>
import NavBar from './components/NavBar'
import axios from 'axios';

export default {
	name: 'App', 
	components: {
		NavBar,
	},
}
axios.defaults.baseURL = 'http://192.168.1.33:3000/api'
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token;
//axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
</script>
<template>
	<NavBar />
	<div class="main">
		<h2>{{ $route.name }}</h2>
		<router-view />
	</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
 .main {
		padding: 2vh;
		padding-top: 20%;
 }
</style>
