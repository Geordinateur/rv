<template>
	<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Nom de l'application</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav me-auto mb-2 mb-md-0">
					<router-link to="/" class="navbar-link">Accueil</router-link>
					<router-link to="/register" class="navbar-link">Inscription</router-link>
					<li v-if="$store.state.user.token">HELLO {{ $store.state.user.username }}</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

</template>
<script>
import { mapGetters } from "vuex"

export default { 
	name: "RwvHeader",
	computed: {
		...mapGetters([])
	}
};
</script>
<style></style>
