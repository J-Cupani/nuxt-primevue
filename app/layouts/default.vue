<template>
  <main class="min-h-screen bg-f-light">
    <!-- En-tête de la page -->
    <header class="bg-f-primary shadow-md">
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-f-light">Bienvenue sur Sakai Vue</h1>
        <p class="text-f-light">Une plateforme optimisée pour le SEO avec Nuxt et Tailwind CSS</p>
        <NuxtImg src="space-inv.png" alt="Illustration de Sakai Vue" class="rounded-lg mt-4" width="100" height="100" />
      </div>
    </header>

    <!-- Section principale -->
    <section class="container mx-auto py-6 px-6">
      <h2 class="text-2xl font-semibold text-f-secondary mb-4">Fonctionnalités principales</h2>
      <div class="flex mx-auto justify-center">
        <article class="bg-f-light p-6 rounded-lg shadow-md mx-2">
          <h3 class="text-xl font-bold text-f-dark mb-2">Interface intuitive</h3>
          <p class="text-f-dark">Profitez d'une interface simple et ergonomique, facile à utiliser.</p>
          <NuxtImg src="profil.jpg" alt="Aperçu de l'interface" class="mt-4 rounded" width="222" height="222" />
        </article>
        <article class="bg-f-light p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-bold text-f-dark mb-2">Intégration facile</h3>
          <p class="text-f-dark">Connectez Sakai Vue à vos outils préférés en quelques clics.</p>
          <NuxtImg src="profil.jpg" alt="Aperçu de l'interface" class="mt-4 rounded" width="222" height="222" />
        </article>
      </div>
    </section>

    <!-- Section d'information complémentaire -->
    <aside class="bg-f-secondary py-6 px-6">
      <div class="container mx-auto">
        <h2 class="text-2xl font-semibold text-f-light mb-4">Ressources utiles</h2>
        <ul class="list-disc list-inside text-f-light">
          <li><a href="/admin" class="text-f-success hover:underline">Admin</a></li>
          <li><a href="/login" class="text-f-warning hover:underline">Login</a></li>
        </ul>
      </div>
    </aside>

    <!-- Pied de page -->
    <footer class="bg-f-dark shadow-md mt-8">
      <div class="container mx-auto p-4 text-center text-f-light">
        &copy; 2025 Sakai Vue. Tous droits réservés.
      </div>
    </footer>
  </main>
</template>

<script setup>
onMounted(() => {
  // Charger dynamiquement les styles uniquement pour ce layout
  import('@/assets/css/tailwind.css');
});
</script>


<style lang="scss" scoped>

</style>