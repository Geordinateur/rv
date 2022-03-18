<script>
export default {
	name: 'NavLink',
	props: ['url', 'text', 'icon']
}
</script>

<template>
	<router-link :to="url" class="navbar-link">
	<li :class="[isActive && 'router-link-active']" class="nav-item"><i :class="icon"></i> <span class="nav-mylink">{{ text }}</span>
	</li>
	</router-link> 
</template>

<style>
	a {
		text-decoration: none;
	}
	.navbar-link {
		margin: 1vh 0 1vh;
	}
</style>
