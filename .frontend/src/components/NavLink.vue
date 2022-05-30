<script>
export default {
name: 'NavLink', 
props: ['url', 'text', 'icon']
}
</script>

<template>
	<router-link :to="url" class="navbar__link"><i :class="icon"></i> <span>{{ text }}</span></router-link>
</template>

<style>
</style>
