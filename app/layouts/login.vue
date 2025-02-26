<script setup>
let adminStyleElement = null;

onMounted(async () => {
  // Importer dynamiquement le SCSS en tant que module
  const style = await import('@/assets/admin/styles.scss?inline');

  // Créer un élément <style> pour injecter les styles
  adminStyleElement = document.createElement('style');
  adminStyleElement.id = 'admin-styles';
  adminStyleElement.innerHTML = style.default;

  // Ajouter les styles au <head>
  document.head.appendChild(adminStyleElement);
});

onBeforeUnmount(() => {
  // Supprimer les styles lorsque l'on quitte le layout admin
  if (adminStyleElement) {
    adminStyleElement.remove();
    adminStyleElement = null;
  }
});
</script>

<template>
  <div class="login-layout">
    <router-view></router-view>

  </div>
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>