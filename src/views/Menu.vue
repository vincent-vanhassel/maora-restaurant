<template>
  <div class="min-h-screen flex flex-col bg-main-color text-text-color">
    <NavBar />

    <!-- Le contenu prend toute la hauteur dispo -->
    <main class="flex-grow pt-40 px-6 md:px-20">
      <div class="max-w-6xl mx-auto space-y-12">
        <img src="/image-menu/menu-1.png" alt="Menu-1" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/image-menu/menu-2.png" alt="Menu-2" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/image-menu/menu-3.png" alt="Menu-3" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/image-menu/menu-4.png" alt="Menu-4" class="rounded-lg shadow-md w-full object-contain" />
      </div>
    </main>

    <Footer />
  </div>
</template>


<script setup>
import NavBar from '../components/ui/NavBar.vue'
import Footer from '../components/ui/Footer.vue'
</script>
