<script setup>
import diegoImage from '@/assets/images/fotoequipe.jpg'
</script>

<template>
  <section class="bg-dark-green text-gray-800 py-16">
    <div
      class="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-center"
    >
      <div class="md:w-1/3 mb-8 md:mb-0 md:mr-20 flex justify-center">
        <img
          :src="diegoImage"
          alt="Diego Leão - Especialista em Cachos"
          class="w-100 h-100 blob-shape object-cover transform transition-transform duration-300 hover:scale-105 border-8 border-light-green"
          loading="lazy"
        />
      </div>

      <div class="md:w-2/3 max-w-2xl">
        <h2 class="text-5xl font-extrabold text-light-green mb-6">Sobre Nós</h2>
        <p class="text-lg leading-relaxed font-regular text-gray-100 text-justify mb-4">
          Nós pensamos a <strong>Casa Di Leão</strong> com o propósito de criar um espaço onde o
          <strong>autocuidado</strong> vai muito além dos fios. Abrimos as portas da nossa casa para
          ir além do cabelo, unindo pessoas e casando propósitos em um ambiente que abraça a
          <strong>beleza livre</strong> de padrões e estereótipos. <br />
          <br />

          Aqui, cada cacho, crespo e onda conta uma história. Somos um refúgio para o reencontro com
          a sua melhor versão, com a sua beleza mais genuína. Acreditamos que
          <strong>delicadeza</strong> e <strong>força</strong> podem caminhar juntas. Queremos que
          você sinta e saiba que é linda e forte, e que dá perfeitamente para ser as duas coisas!
          <br />
          <br />
        </p>
        <router-link
          to="/equipe"
          class="inline-block bg-dileao-green hover:bg-light-green text-white px-8 py-3 rounded-full text-lg font-semibold  transition duration-300 transform hover:scale-105"
          aria-label="Conheça nossa equipe"
        >
          Conheça a Equipe
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blob-shape {
  clip-path: inset(0 4% 0 11% round 35% 5% 35% 5%);
}
</style>
