<script setup>
import haircutImage from '@/assets/images/haircutImage.webp'
import hairTreatmentImage from '@/assets/images/hairTreatmentImage.webp'
import hairColoringImage from '@/assets/images/hairColoringImage.webp'

const services = [
  {
    title: 'Corte',
    description:
      'Nossos profissionais criam um corte personalizado para que você saia do salão com o visual que sempre sonhou!',
    image: haircutImage,
    route: '/agendar',
  },
  {
    title: 'Coloração',
    description:
      'Transforme seu visual com técnicas de coloração que respeitam a saúde dos fios e realçam a sua personalidade.',
    image: hairColoringImage,
    route: '/agendar',
  },
  {
    title: 'Tratamento Capilar',
    description:
      'Hidratação profunda, nutrição e reconstrução para restaurar a vitalidade e o brilho dos seus cabelos.',
    image: hairTreatmentImage,
    route: '/agendar',
  },
]
</script>

<template>
  <section class="py-16 bg-dark-green text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-5xl font-extrabold mb-8 text-light-green text-center">Nossos Serviços</h2>
      <p class="text-lg text-gray-200 font-semibold mb-12 max-w-2xl mx-auto text-center">
        Conheça nossos serviços pensados especialmente para realçar sua beleza natural.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-dileao-green rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
        >
          <div
            class="w-32 h-32 mx-auto -mt-16 mb-6 flex items-center justify-center shadow-lg border-4 border-darker-green bg-dark-green rounded-full overflow-hidden"
          >
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 class="text-3xl font-bold text-gray-50 mb-3">{{ service.title }}</h3>
          <p class="text-base text-gray-200 font-normal mb-6">{{ service.description }}</p>
          <router-link
            :to="service.route"
            class="bg-dark-green text-lighter-green font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Agendar
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
