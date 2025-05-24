<template>
  <div>
    <button
      @click="showModal = true"
      class="fixed bottom-6 right-6 z-50 md:hidden bg-white text-main-color font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-text-color hover:text-white transition duration-300"
    >
      {{ $t('click&collect.collect') }}
    </button>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-end justify-center md:hidden bg-black/30 backdrop-blur-sm"
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

        <button @click="showModal = false" class="text-sm text-gray-500 hover:underline">
          {{ $t('click&collect.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showModal = ref(false)
</script>
