<script>
export default {
	name: 'NavLink',
	props: ['url', 'text', 'icon']
}
</script>

<template>
	<router-link :to="url" class="navbar-link">
	<li class="nav-item"><i :class="icon"></i> <span>{{ text }}</span>
	</li>
	</router-link> 
</template>

<style>
	a {
		text-decoration: none;
	}
	.nav-item {
		margin: 1vh 1vh 1vh 0;
	}
</style>
