<script>
import axios from 'axios'
import AlertItem from '../components/AlertItem'



export default {
  components: {
		AlertItem
  },
  data()  {
    return {
			alert: {
			},
      form: {
      }
    }
  },
  methods: {
    send: function (event) {
      event.preventDefault()
      console.log(this.form)
      axios
        .post('/user/register', this.form)
        .then((response) => {
					this.alert.message = response.data.message
					this.alert.status = 'alert-success'
					this.alert.show = true
        })
        .catch((error) => {
					this.alert.message = error.response.data.message
					this.alert.show = true
					this.alert.status = 'alert-danger'
        });
    },
	}
}
</script>
<template>
<AlertItem :message="alert.message" :status="alert.status" :show="alert.show" />
<form class="form" method="post" @submit="send">
<div class="form-group">
<label for="name">Pseudonyme</label>
<input type="text" class="form-control" id="name" v-model="form.name" placeholder="Entrez un pseudo">
</div>
<div class="form-group">
<label for="email">Email address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="form.email" placeholder="Entrez une adresse email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
<label for="password">Mot de passe</label>
<input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password">
</div>
<div class="form-group">
<label for="passwordVerify">Confirmez votre mot de passe</label>
<input type="password" class="form-control" id="passwordVerify" v-model="form.passwordVerify" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary mt-3">Enregister</button>
</form>
</template>
