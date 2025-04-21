<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-main-color text-white shadow-md">
    <div class="w-full px-16 xl:px-32 py-6 grid grid-cols-3 items-center">

      <!-- Left links -->
      <ul class="hidden md:flex space-x-8 text-sm font-jost justify-self-start">
        <router-link
          v-if="route.path !== '/menu'"
          to="/menu"
          class="hover:underline"
        >
          CARTE & MENU
        </router-link>
        <router-link
          v-else
          to="/"
          class="hover:underline"
        >
          ACCUEIL
        </router-link>
        <li><a href="#about" class="hover:underline">A PROPOS</a></li>
      </ul>

      <!-- Logo centered -->
      <div class="flex justify-center">
        <img src="/logo-navbar.png" alt="Logo" class="h-16" />
      </div>

      <!-- Right buttons -->
      <div class="hidden md:flex space-x-6 justify-self-end">
        <a
          href="https://bookings.zenchef.com/results?rid=374486&pid=1001"
          class="border border-text-color bg-main-color text-text-color font-jost px-5 py-2 transition-all duration-200 hover:bg-text-color hover:text-main-color"
        >
          RESERVER
        </a>
        <a
          href="#"
          class="border border-text-color bg-main-color text-text-color font-jost px-5 py-2 transition-all duration-200 hover:bg-text-color hover:text-main-color"
        >
          CLICK & COLLECT
        </a>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
