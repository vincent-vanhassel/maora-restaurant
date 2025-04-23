<template>
  <div class="bg-main-color text-text-color font-jost">
    <NavBar />

    <section
      id="about"
      class="mt-16 py-28 px-6 md:px-20"
    >
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="200">
        <!-- Texte -->
        <div class="relative z-10 space-y-8">
          <h2 class="text-6xl tracking-widest uppercase font-cormorant opacity-10 absolute -top-12 left-0 pointer-events-none select-none">
            {{ $t('about.title') }}
          </h2>

          <h3 class="text-3xl font-jost font-light relative py-4">
            {{ $t('about.subtitle1') }}
          </h3>

          <p class="text-base md:text-lg font-jost font-extralight leading-relaxed whitespace-pre-line text-justify relative">
            {{ $t('about.text1') }}
          </p>

          <h3 class="text-2xl font-jost font-light relative pt-8">
            {{ $t('about.subtitle2') }}
          </h3>

          <p class="text-base md:text-lg font-jost font-extralight leading-relaxed whitespace-pre-line text-justify relative">
            {{ $t('about.text2') }}
          </p>
        </div>

        <!-- Illustration -->
        <div class="relative flex justify-center">
          <img
            src="/image-sections/about.jpg"
            :alt="$t('about.imgAlt')"
            class="w-full max-w-md rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import NavBar from '../components/ui/NavBar.vue'
import Footer from '../components/ui/Footer.vue'
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>
