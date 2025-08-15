<script setup>
import heroBackgroundImage from '@/assets/images/bg-img-2.webp'
import diLogo from '@/assets/images/diLogo.png'
</script>

<template>
  <section
    class="relative bg-cover bg-fixed bg-center h-screen flex items-center justify-center p-4"
    :style="{ backgroundImage: `url(${heroBackgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black hero-overlay"></div>

    <div class="relative z-10 text-white container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-center">
      <div class="mb-8 md:mb-0 md:mr-8">
        <img
          :src="diLogo"
          alt="Logo Di Leão"
          class="w-80 h-80 md:w-[400px] md:h-[400px] object-contain transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div class="text-center md:text-left max-w-xl">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">FLORESÇA SUA BELEZA</h1>
        <p class="text-xl md:text-2xl mb-8">
          Cachos, crespos e ondas por Diego Leão
        </p>
        <router-link
          to="/agendar"
          class="bg-dileao-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dileao-brown-dark transition duration-300 transform hover:scale-105 inline-block"
          aria-label="Agende seu horário"
        >
          Agende seu Horário
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-overlay {
  --overlay-opacity: 0.7;
  background-color: rgba(0, 0, 0, var(--overlay-opacity));
}
</style>
