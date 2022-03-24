<script>
import axios from 'axios'
import AlertItem from '../components/AlertItem'

axios.defaults.baseURL = 'http://192.168.1.33:3000/api'

export default {
    components: {
        AlertItem
    },
    name: 'LoginForm',
    data() {
        return {
            alert: {},
            form: {}
        }
    },
    methods: {
        send: function(e) {
            e.preventDefault()
            axios
                .post('/user/login', this.form)
                .then((response) => {
					this.alert.message = response.data.message
					this.alert.status = 'alert-success'
					this.alert.show = true
                    this.$store.commit('LOGIN', response.data)
                    if(this.form.save) localStorage.setItem('token', response.data.token)
                })
                .catch((error) => {
					this.alert.message = error.response.data.message
					this.alert.status = 'alert-danger'
					this.alert.show = true
                })
        }
    }
}
</script>

<template>
<AlertItem :message="alert.message" :status="alert.status" :show="alert.show" />
<form class="form" method="POST" @submit="send">
<div class="form-group">
<label for="email">Email address</label>
<input type="email" class="form-control" id="email" v-model="form.email" aria-describedby="emailHelp" placeholder="Enter email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
<label for="password">Password</label>
<input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password">
</div>
<div class="form-check">
<input type="checkbox" class="form-check-input" id="save" v-model="form.save">
<label class="form-check-label" for="save">Check me out</label>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>

</template>
