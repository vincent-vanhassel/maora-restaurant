<template>
  <SectionLayout
    id="botanique"
    title="Botanique"
    description="UNE CUISINE AVENTUREUSE"
    text="Animés par notre passion pour la cuisine et notamment les mélanges de saveurs, nous avions à coeur de créer une carte originale et savoureuse  en travaillant uniquement des produits végétaux et de saison afin d'offrir nos convives une gastronomie botanique audacieuse et gourmande.
 
    Forts de nos trois parcours complémentaires, et après plusieurs mois de travail, réflexion mais surtout d'amusement et de rire où les cuisines françaises et asiatiques furent nos muses : Maora est né." 
    img-src="/botanique-image.jpeg"
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
