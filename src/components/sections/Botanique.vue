<template>
  <SectionLayout
    id="botanique"
    :title="$t('botanique.title')"
    :description="$t('botanique.description')"
    :text="$t('botanique.text')"
    img-src="/image-sections/botanique.jpeg"
    img-alt="Plat végétal signature"
    :index="index"
    :dark="true"
  >
    <template #illustration>
      <div class="w-full h-64 bg-level-3 rounded-lg flex items-center justify-center text-white">
        Illustration Hero
      </div>
    </template>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../layout/SectionLayout.vue'
defineProps({ index: Number })
</script>
