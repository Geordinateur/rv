<template>
	<div class="home">
		<div v-if="user.name">
			<Results />
		</div>
		<div v-else>
			<Login />
			Local Storage : {{ test }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Login from '../components/Login'
import Results from '../components/Results'

export default {
	name: 'HomeView',
	data() {
		return {
				test: localStorage.getItem('token')
		}
	},
	components: {
		Login,
		Results
	},
	computed: 
	{
		...mapState(['user'])
	},
	mounted: function() {
		localStorage.setItem('token', 'HELLOWORLD')
	}
}
</script>
