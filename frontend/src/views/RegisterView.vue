<script>
import axios from 'axios';

export default {
  components: {
  },
  data()  {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordVerify: '',
      }
    }
  },
  methods: {
    send: function (event) {
      event.preventDefault()
      axios
        .post('/register', this.form)
        .then((response) => {
          console.log(response.data.message)
          //this.$emit('alert', { messageAlert: JSON.parse(response.request.response).message, statusAlert: 'success', showAlert: true})
          this.form.from = ""
          this.form.subject = ""
          this.form.text = ""
        })
        .catch((error) => {
          console.log(error.response.data.message)
          this.$emit('alert', { messageAlert: JSON.parse(error.request.response).message, statusAlert: 'error', showAlert: true})
        });
    },
	}
}
</script>
<template>
<form>
<div class="form-group">
<label for="name">Pseudonyme</label>
<input type="text" class="form-control" id="name" placeholder="Entrez un pseudo">
</div>
<div class="form-group">
<label for="email">Email address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez une adresse email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
<label for="password">Mot de passe</label>
<input type="password" class="form-control" id="password" placeholder="Password">
</div>
<div class="form-group">
<label for="passwordVerify">Confirmez votre mot de passe</label>
<input type="password" class="form-control" id="passwordVerify" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary mt-3">Enregister</button>
</form>
</template>
