<template>
<AlertItem :message="alert.message" :status="alert.status" :show="alert.show" />
<form class="form" method="post" @submit.prevent="onSubmit">
<div class="form-group">
<label for="name">Username</label>
<input type="text" class="form-control" id="name" v-model="username" placeholder="Entrez un pseudo">
</div>
<div class="form-group">
<label for="email">Email address</label>
<input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="form.email" placeholder="Entrez une adresse email">
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
<label for="password">Mot de passe</label>
<input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
</div>
<div class="form-group">
<label for="passwordVerify">Confirmez votre mot de passe</label>
<input type="password" class="form-control" id="passwordVerify" v-model="passwordVerify" placeholder="Password">
</div>
<button type="submit" class="btn btn-primary mt-3">Enregister</button>
</form>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          username: this.username
        })
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>