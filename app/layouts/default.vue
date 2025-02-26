<template>
    <div class="public-layout bg-f-light min-h-screen flex flex-col">
      <header class="p-6 bg-f-primary text-white shadow-md h-20">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-3xl font-bold text-white">Bienvenue sur notre site !</h1>
          <nav>
            <NuxtLink to="/" class="px-4 hover:text-f-accent">Accueil</NuxtLink>
            <NuxtLink to="/admin" class="px-4 hover:text-f-accent">Admin</NuxtLink>
          </nav>
        </div>
      </header>

      <main class="flex-grow container mx-auto p-6">
        <section class="my-8">
          <h2 class="text-2xl font-semibold mb-4 text-f-secondary">Découvrez notre service</h2>
          <p class="text-f-dark">Notre plateforme offre les meilleures solutions pour répondre à vos besoins.</p>
        </section>
        <section class="my-8 bg-f-accent p-6 rounded-lg shadow">
          <h2 class="text-2xl font-semibold mb-4 text-white">Pourquoi nous choisir ?</h2>
          <p class="text-white">Nous nous engageons à fournir des services de qualité avec une équipe dédiée.</p>
        </section>
      </main>

      <footer class="bg-f-dark text-white p-4 text-center mt-auto">
        © 2025 - Tous droits réservés
      </footer>
    </div>

</template>

<script setup>
onMounted(() => {
  // Charger dynamiquement les styles uniquement pour ce layout
  import('@/assets/css/tailwind.css');
});
</script>


<style lang="scss" scoped>

</style>