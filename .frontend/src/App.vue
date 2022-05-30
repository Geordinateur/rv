<script>
	import NavLink from "./components/NavLink";
	import NavBar from "./components/NavBar";
	export default {
	name: "app",
	component: {
		NavBar,
		NavLink,
	}
}
</script>
<template>
	<h1>Hello?</h1>
	<NavBar />
	<nav>
		<NavLink url="/" icon="" text="Accueil" />
	</nav>
	<router-view/>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
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
</style>
