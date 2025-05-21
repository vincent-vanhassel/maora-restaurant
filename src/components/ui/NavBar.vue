<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-main-color text-white shadow-md">
    <div class="max-w-7xl mx-auto w-full px-4 py-8 flex items-center justify-between relative">
      <!-- Left Links -->
      <div class="hidden md:flex space-x-8 text-sm font-jost uppercase tracking-widest">
        <router-link
          v-if="route.path !== '/menu'"
          to="/menu"
          class="hover:underline"
        >{{ $t('navbar.menu') }}</router-link>

        <router-link
          v-else
          to="/"
          class="hover:underline"
        >{{ $t('navbar.home') }}</router-link>

        <router-link
          v-if="route.path !== '/about'"
          to="/about"
          class="hover:underline"
        >{{ $t('navbar.about') }}</router-link>

        <router-link
          v-else
          to="/"
          class="hover:underline"
        >{{ $t('navbar.home') }}</router-link>
      </div>

      <!-- Logo centered absolutely -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <img src="/image-ui/logo-navbar.png" alt="Logo" class="h-16" />
      </div>

      <!-- Right Buttons -->
      <div class="hidden md:flex items-center space-x-4 justify-self-end">
        <a
          href="https://bookings.zenchef.com/results?rid=374486&pid=1001"
          class="border border-text-color bg-main-color text-text-color font-jost px-5 py-2 uppercase tracking-widest text-sm transition-all duration-200 hover:bg-text-color hover:text-main-color"
        >
          {{ $t('navbar.book') }}
        </a>
        <a
          href="https://commandes.maorarestaurant.com"
          class="border border-text-color bg-main-color text-text-color font-jost px-5 py-2 uppercase tracking-widest text-sm transition-all duration-200 hover:bg-text-color hover:text-main-color"
        >
          {{ $t('navbar.collect') }}
        </a>

        <!-- Language Switch -->
        <button
          @click="toggleLang"
          class="flex items-center gap-2 border border-text-color text-text-color font-jost px-3 py-1 uppercase tracking-widest text-sm rounded hover:bg-text-color hover:text-main-color transition-all duration-200"
        >
          <Languages class="w-4 h-4" />
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>
      </div>

      <!-- Mobile burger -->
      <button class="md:hidden ml-auto" @click="menuOpen = !menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-text-color" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

<!-- Mobile Menu -->
<div
  v-if="menuOpen"
  class="md:hidden flex flex-col space-y-4 px-6 pb-6 text-sm font-jost bg-main-color text-text-color uppercase tracking-widest"
>
  <router-link
    @click="menuOpen = false"
    :to="route.path !== '/menu' ? '/menu' : '/'"
    class="hover:underline"
  >
    {{ route.path !== '/menu' ? $t('navbar.menu') : $t('navbar.home') }}
  </router-link>

  <router-link
    @click="menuOpen = false"
    :to="route.path !== '/about' ? '/about' : '/'"
    class="hover:underline"
  >
    {{ route.path !== '/about' ? $t('navbar.about') : $t('navbar.home') }}
  </router-link>

  <a
    href="https://bookings.zenchef.com/results?rid=374486&pid=1001"
    class="border border-text-color bg-main-color text-text-color px-4 py-2 mt-4 text-center hover:bg-text-color hover:text-main-color"
  >
    {{ $t('navbar.book') }}
  </a>

  <a
    href="#"
    class="border border-text-color bg-main-color text-text-color px-4 py-2 text-center hover:bg-text-color hover:text-main-color"
  >
    {{ $t('navbar.collect') }}
  </a>

  <!-- Lang switch mobile -->
  <button
    @click="toggleLang"
    class="flex items-center gap-2 border border-text-color text-text-color font-jost px-3 py-1 text-sm rounded hover:bg-text-color hover:text-main-color transition-all duration-200"
  >
    <Languages class="w-4 h-4" />
    {{ locale === 'fr' ? 'EN' : 'FR' }}
  </button>
</div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next'

const menuOpen = ref(false)
const route = useRoute()
const { locale } = useI18n()

const toggleLang = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<style scoped>
nav {
  backdrop-filter: blur(8px);
}
</style>
