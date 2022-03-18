<script>
import NavBar from './components/NavBar'
export default {
		name: 'App', 
		components: {
				NavBar
		}
}
</script>
<template>
	<NavBar />
	<div>
		<router-view class="main"/>
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
		padding: 1vh;
		margin-top: 60px;
 }
</style>
