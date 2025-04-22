<template>
  <section
    :id="id"
    class="py-28 px-6 md:px-20"
    :class="dark ? 'text-white' : 'text-gray-900'"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
      
      <!-- Texte -->
      <div :class="computedReverse ? 'md:order-2' : 'md:order-1'" class="relative z-10 space-y-6">
        <h2 class="text-6xl tracking-widest uppercase font-cormorant opacity-10 absolute -top-12 left-0 pointer-events-none select-none">
          {{ title }}
        </h2>

        <h3 class="text-2xl md:text-3xl font-jost font-light relative py-5">
          {{ description }}
        </h3>

        <p class="text-base md:text-lg font-jost font-extralight leading-relaxed whitespace-pre-line text-justify relative">
          {{ text }}
        </p>

        <div v-if="!description && !text">
          <slot name="content" />
        </div>
      </div>

      <!-- Illustration -->
      <div :class="computedReverse ? 'md:order-1' : 'md:order-2'" class="relative flex justify-center">
        <template v-if="imgSrc">
          <img
            :src="imgSrc"
            :alt="imgAlt || 'Illustration'"
            class="w-full max-w-md rounded-lg shadow-md object-cover"
          />
        </template>
        <template v-else>
          <slot name="illustration" />
        </template>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  description: String,
  text: String,
  imgSrc: String,
  imgAlt: String,
  index: { type: Number, default: 0 },
  dark: { type: Boolean, default: false }
})

const computedReverse = computed(() => props.index % 2 === 1)
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>
