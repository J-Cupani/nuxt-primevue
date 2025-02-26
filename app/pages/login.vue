<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-6">Connexion</h1>
    <InputText placeholder="Nom d'utilisateur" class="mb-4 w-80" />
    <InputText placeholder="Mot de passe" type="password" class="mb-4 w-80" />
    <Button label="Se connecter" icon="pi pi-sign-in" class="p-button-primary" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>