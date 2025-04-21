<template>
  <div class="bg-main-color text-text-color min-h-screen">
    <NavBar />

    <!-- Padding top pour laisser de l'espace à la navbar -->
    <section class="pt-40 px-6 md:px-20">
      <div class="max-w-6xl mx-auto space-y-12">
        <img src="/menu-1.png" alt="Menu-1" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/menu-2.png" alt="Menu-2" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/menu-3.png" alt="Menu-3" class="rounded-lg shadow-md w-full object-contain" />
        <img src="/menu-4.png" alt="Menu-4" class="rounded-lg shadow-md w-full object-contain" />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>
