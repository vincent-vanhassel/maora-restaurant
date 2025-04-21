<template>
  <footer class="bg-navbar text-white px-6 md:px-20 py-16 relative text-sm font-jost font-extralight">

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10 border-b border-white/20 pb-12 text-white">
      <!-- Contact -->
      <div class="border-r border-white/20 px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">Nous contacter</h3>
        <p>
          <a href="tel:+33140570022" class="block text-white no-underline hover:underline">
            +33 1 40 57 00 22
          </a>
          <a href="mailto:contact@maorarestaurants.com" class="block text-white no-underline hover:underline">
            contact@maorarestaurants.com
          </a>
        </p>
      </div>

      <!-- Adresse -->
      <div class="border-r border-white/20 px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">Adresse</h3>
        <a class="block" href="https://www.google.com/maps/place/61+Rue+des+Dames,+75017+Paris/@48.8837498,2.3164852,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fb3a7e1a889:0x7842d3220598b9a3!8m2!3d48.8837499!4d2.3213507!16s%2Fg%2F11rp38gt4f?hl=fr&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">61 rue des Dames</a>
        <a class="block" href="https://www.google.com/maps/place/61+Rue+des+Dames,+75017+Paris/@48.8837498,2.3164852,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fb3a7e1a889:0x7842d3220598b9a3!8m2!3d48.8837499!4d2.3213507!16s%2Fg%2F11rp38gt4f?hl=fr&entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">75017 · Paris</a>
      </div>

      <!-- Horaires -->
      <div class="px-4">
        <h3 class="uppercase tracking-widest text-sm mb-2 font-bold">Horaires d’ouverture</h3>
        <p>Tous les jours de 12.00 à 14h30 et de 19.00 à 22.30</p>
        <p>La cuisine ferme à 14.00 et 22.00</p>
      </div>
    </div>

    <!-- Image centrale décorative -->
    <div class="flex justify-center my-12">
      <img src="/illustration-footer.png" alt="Illustration" class="h-64 object-contain" />
    </div>

    <!-- Bas du footer -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white text-xs border-t border-white/10 pt-8">

      <!-- Colonne 1 : Instagram -->
      <div>
        <a
          href="https://www.instagram.com/maorarestaurant"
          target="_blank"
          class="uppercase tracking-widest hover:underline"
        >
          Instagram
        </a>
      </div>

      <!-- Colonne 2 : Copyright -->
      <div>
        &copy; {{ new Date().getFullYear() }} Maora. Tous droits réservés.
      </div>

      <!-- Colonne 3 : Slogan -->
      <div class="text-white/60">
        From the future, for the present.
      </div>

    </div>

  </footer>
</template>
