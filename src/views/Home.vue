<!-- src/views/Home.vue -->
<template>
  <div class="text-white font-sans bg-main-color">
    <Header />
    <Botanique :index="0" />
    <Fusion :index="1" />
    <Footer />
    <NavBar />
    <MobileOrderModal />
  </div>
</template>

<script setup>
import Header from '../components/ui/Header.vue'
import Botanique from '../components/sections/Botanique.vue'
import Fusion from '../components/sections/Fusion.vue'
import Footer from '../components/ui/Footer.vue'
import NavBar from '../components/ui/NavBar.vue'
import MobileOrderModal from '../components/ui/MobileOrderModal.vue'
</script>
