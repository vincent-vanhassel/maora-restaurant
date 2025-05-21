<!-- src/views/Home.vue -->
<template>
  <div class="text-white font-sans bg-main-color">
    <Header />
    <Botanique :index="0" />
    <Fusion :index="1" />
    <Footer />
    <NavBar />
    <a
      href="https://commandes.maorarestaurant.com"
      class="fixed bottom-6 right-6 z-50 md:hidden bg-white text-main-color font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-text-color hover:text-white transition duration-300"
    >
      Click & Collect
    </a>
  </div>
</template>

<script setup>
import Header from '../components/ui/Header.vue'
import Botanique from '../components/sections/Botanique.vue'
import Fusion from '../components/sections/Fusion.vue'
import Footer from '../components/ui/Footer.vue'
import NavBar from '../components/ui/NavBar.vue'
</script>
