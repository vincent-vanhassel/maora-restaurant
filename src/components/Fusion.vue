<template>
  <SectionLayout
    id="fusion"
    title="Fusion"
    description="Nos Objectifs"
    text="Avec Maora, au-delà de ravir les papilles de nos clients, nous souhaitions leur proposer une carte respectueuse autant de son environnement que du monde animal. 

    Ainsi nous avons fait le choix de n'utiliser que des produits d'origine végétale, de saison et récoltés le plus localement possible."
    img-src="/fusion-image.jpeg"
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
import SectionLayout from './SectionLayout.vue'
</script>
