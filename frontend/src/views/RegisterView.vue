<template>
<form class="p-3">
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
