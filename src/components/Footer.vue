<template>
  <footer class="bg-navbar text-white px-6 md:px-20 py-16 relative text-sm font-jost font-extralight">
    <!-- Haut du footer -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 border-b border-white/20 pb-12 text-white">
      <!-- Contact -->
      <div class="border-r border-white/20 px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">
          {{ $t('footer.contact.title') }}
        </h3>
        <p>
          <a href="tel:+33140570022" class="block text-white no-underline hover:underline">
            {{ $t('footer.contact.phone') }}
          </a>
          <a href="mailto:contact@maorarestaurants.com" class="block text-white no-underline hover:underline">
            {{ $t('footer.contact.email') }}
          </a>
        </p>
      </div>

      <!-- Adresse -->
      <div class="border-r border-white/20 px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">
          {{ $t('footer.address.title') }}
        </h3>
        <a class="block" href="https://www.google.com/maps/place/61+Rue+des+Dames,+75017+Paris/">
          {{ $t('footer.address.line1') }}
        </a>
        <a class="block" href="https://www.google.com/maps/place/61+Rue+des+Dames,+75017+Paris/">
          {{ $t('footer.address.line2') }}
        </a>
      </div>

      <!-- Horaires -->
      <div class="px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">
          {{ $t('footer.hours.title') }}
        </h3>
        <p>{{ $t('footer.hours.line1') }}</p>
        <p>{{ $t('footer.hours.line2') }}</p>
      </div>
    </div>

    <!-- Image décorative -->
    <div class="flex justify-center my-12">
      <img src="/illustration-footer.png" alt="Illustration" class="h-64 object-contain" />
    </div>

    <!-- Bas du footer -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white text-xs border-t border-white/10 pt-8">
      <div>
        <a href="https://www.instagram.com/maorarestaurant" target="_blank" class="uppercase tracking-widest hover:underline">
          {{ $t('footer.bottom.instagram') }}
        </a>
      </div>
      <div>
        &copy; {{ new Date().getFullYear() }} Maora. {{ $t('footer.bottom.rights') }}
      </div>
      <div class="text-white/60">
        {{ $t('footer.bottom.slogan') }}
      </div>
    </div>
  </footer>
</template>
