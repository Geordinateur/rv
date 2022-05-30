<script>
import HeaderView from './components/HeaderView'
import FooterView from './components/FooterView'

export default {
	name: 'App', 
	components: {
		HeaderView,
		FooterView
	}
}
</script>
<template>
	<HeaderView />
	<router-view class="main" />
	<FooterView />
</template>

<style>
.main {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	padding: 2vh;
	padding-top: 20%;
 }
 .navbar {
	padding-left: 0;
	padding-right: 0;
}	
a {
	text-decoration: none;
}
.navbar-link {
	margin: 1vh 1vh 1vh 0;
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
</style>
