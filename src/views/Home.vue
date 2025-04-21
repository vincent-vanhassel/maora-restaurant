<!-- src/views/Home.vue -->
<template>
  <div class="text-white font-sans bg-main-color">
    <Header />
    <Botanique :index="0" />
    <Fusion :index="1" />
    <Footer />
    <NavBar />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Botanique from '../components/Botanique.vue'
import Fusion from '../components/Fusion.vue'
import Footer from '../components/Footer.vue'
import NavBar from '../components/NavBar.vue'
</script>
