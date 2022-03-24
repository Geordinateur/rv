<template>
	<div class="home">
		<div v-if="$store.state.user.token">
			<Results />
		</div>
		<div v-else>
			Identifiez-vous!
		</div>
	</div>
</template>

<script>
import Results from '../components/Results'
import { mapState } from 'vuex'

export default {
	name: 'HomeView',
	data() {
		return {
				test: localStorage.getItem('token')
		}
	},
	components: {
		Results
	},
	computed: {
		...mapState(['user'])
	},
}
</script>
