<script setup>
import haircutImage from '@/assets/images/haircutImage.webp'
import hairTreatmentImage from '@/assets/images/hairTreatmentImage.webp'
import hairColoringImage from '@/assets/images/hairColoringImage.webp'

const services = [
  {
    title: 'Hidratação e Nutrição',
    description: 'Restaure a vida e o brilho dos seus cachos com nossos tratamentos exclusivos.',
    image: hairTreatmentImage,
    link: '/servicos',
  },
  {
    title: 'Corte e Finalização',
    description:
      'Especialistas em cortes que valorizam seu volume e transição suave para o natural.',
    image: haircutImage,
    link: '/servicos',
  },
  {
    title: 'Coloração e Mechas',
    description: 'Técnicas modernas para realçar a beleza dos seus cachos com cores vibrantes.',
    image: hairColoringImage,
    link: '/servicos',
  },
]
</script>

<template>
  <section class="bg-dileao-brown py-16">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-5xl font-extrabold text-white mb-12">Nossos Serviços</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <div
          v-for="service in services"
          :key="service.title"
          class="card-overlay rounded-lg shadow-lg p-6 md:p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          :style="{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <h3 class="text-xl md:text-2xl font-bold text-gray-50 mb-4 text-shadow-lg relative z-10">
            {{ service.title }}
          </h3>
          <p class="text-base text-[#dedede] font-normal mb-6 relative z-10">
            {{ service.description }}
          </p>
          <router-link
            :to="service.link"
            class="text-gray-100 font-semibold flex items-center justify-center text-sm md:text-base relative z-10"
            :aria-label="`Saiba mais sobre ${service.title}`"
          >
            Confira
            <i class="pi pi-chevron-right text-white ml-2 icon-small"></i>
          </router-link>
        </div>
      </div>

      <router-link
        to="/servicos"
        class="bg-dark-green text-white font-bold px-6 py-3 rounded-full mt-12 inline-block text-center hover:bg-dileao-green transition duration-300 transform hover:scale-105"
        aria-label="Ver todos os serviços"
      >
        Ver Todos
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.card-overlay {
  position: relative;
  overflow: hidden;
}

.card-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 0;
}

.card-overlay h3,
.card-overlay p,
.card-overlay a {
  position: relative;
  z-index: 10;
}
.icon-small {
  font-size: 0.75rem;
}
</style>
