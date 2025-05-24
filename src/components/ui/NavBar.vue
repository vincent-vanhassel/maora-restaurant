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
        <button
          @click="showModal = true"
          class="border border-text-color bg-main-color text-text-color font-jost px-5 py-2 uppercase tracking-widest text-sm transition-all duration-200 hover:bg-text-color hover:text-main-color"
        >
          {{ $t('navbar.collect') }}
        </button>

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

    <button
      @click="showMobileModal = true"
      class="border border-text-color bg-main-color text-text-color px-4 py-2 text-center hover:bg-text-color hover:text-main-color"
    >
      {{ $t('navbar.collect') }}
    </button>


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

  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
  >
    <div class="bg-white rounded-2xl p-8 space-y-6 max-w-sm w-full text-center">
      <h2 class="text-lg font-semibold text-main-color">{{ $t('click&collect.chooseOrderMethod') }}</h2>

      <div class="flex flex-col gap-4">
        <a
          href="https://delicity.com/maora-restaurant-paris?type=pickup"
          class="bg-main-color text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          {{ $t('click&collect.clickCollect') }}
        </a>
        <a
          href="https://commandes.maorarestaurant.com/order?type=delivery"
          class="bg-main-color text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
        >
          {{ $t('click&collect.delivery') }}
        </a>
      </div>

      <button @click="showModal = false" class="text-sm text-gray-500 mt-4 hover:underline">
        {{ $t('click&collect.close') }}
      </button>
    </div>
  </div>

  <!-- Modale mobile dans le menu responsive -->
  <div
    v-if="showMobileModal"
    class="fixed inset-0 z-50 flex items-end justify-center bg-black/30 backdrop-blur-sm md:hidden"
  >
    <div class="bg-white rounded-t-2xl w-full p-6 text-center space-y-4">
      <h2 class="text-main-color font-semibold text-base">
        {{ $t('click&collect.chooseOrderMethod') }}
      </h2>

      <a
        href="https://delicity.com/maora-restaurant-paris?type=pickup"
        class="block w-full bg-main-color text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
      >
        {{ $t('click&collect.clickCollect') }}
      </a>
      <a
        href="https://commandes.maorarestaurant.com/order?type=delivery"
        class="block w-full bg-main-color text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
      >
        {{ $t('click&collect.delivery') }}
      </a>

      <button
        @click="showMobileModal = false"
        class="text-sm text-gray-500 hover:underline"
      >
        {{ $t('click&collect.close') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Languages } from 'lucide-vue-next'

const menuOpen = ref(false)
const route = useRoute()
const { locale } = useI18n()

const showModal = ref(false)
const showMobileModal = ref(false)

const toggleLang = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<style scoped>
nav {
  backdrop-filter: blur(8px);
}
</style>
