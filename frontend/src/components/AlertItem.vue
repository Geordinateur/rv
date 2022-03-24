<template>
<transition name="fade" mode="out-in">
<div v-show="show" class="alert" :class="status">
{{ message }}
</div>
</transition>
</template>

<script>
export default {
  name: 'AlertItem',
	data() {
		return {
		}
	},
	props: {
		status: { type: String },
		message: { type: String },
		show: { type: Boolean, default: false }
	},
}
</script>
