<script setup>
import instaLogo from '@/assets/images/instagramLogo.png'
import logoNameWhite from '@/assets/images/diLogoName.png'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-black py-12 text-white">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <router-link to="/" class="mb-4" aria-label="Home">
          <img :src="logoNameWhite" alt="Casa DiLeão Logo" class="h-10" />
        </router-link>
        <p class="text-gray-400 mb-4">
          Cuidado e beleza natural para seus cachos, crespos e ondas.
        </p>
        <div class="flex space-x-4">
          <a
            href="https://www.instagram.com/casadileao/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Casa DiLeão"
            class="hover:opacity-75 transition-opacity duration-300"
          >
            <img :src="instaLogo" alt="Instagram" class="h-8 w-/8" />
          </a>
            <a
            href="https://wa.me/5579999999999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Casa DiLeão"
            class="hover:opacity-75 transition-opacity duration-300 flex items-center"
            >
            <i class="pi pi-whatsapp text-2xl"></i>
            </a>
        </div>
      </div>

      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
        <ul>
          <li class="mb-2">
            <router-link
              to="/servicos"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              >Serviços</router-link
            >
          </li>
          <li class="mb-2">
            <router-link
              to="/equipe"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              >Equipe</router-link
            >
          </li>
          <li class="mb-2">
            <router-link
              to="/contato"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              >Contato</router-link
            >
          </li>
          <li class="mb-2">
            <router-link
              to="/agendar"
              class="text-gray-400 hover:text-white transition-colors duration-300"
              >Agendar Horário</router-link
            >
          </li>
        </ul>
      </div>

      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold mb-4 text-white">Fale Conosco</h3>
        <p class="mb-2">Rua Exemplo, 123 - Centro</p>
        <p class="mb-2">Aracaju, SE - CEP 49000-000</p>
        <p class="mb-2">Telefone: (79) 99999-9999</p>
        <p class="mb-4">Email: contato@casadileao.com</p>

        <h3 class="text-xl font-bold mb-4 text-white">Horário de Funcionamento</h3>
        <p class="mb-2">Terça a Sábado: 09:00 - 18:00</p>
        <p>Domingo e Segunda: Fechado</p>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; {{ currentYear }} Casa DiLeão. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
</style>
