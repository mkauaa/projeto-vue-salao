<script setup>
import { ref } from 'vue'

import logoName from '@/assets/images/diLogoName.png'
import instaLogo from '@/assets/images/instagramLogo.png'

const isMenuOpen = ref(false)

const menuItems = [
  { title: 'Serviços', to: '/servicos' },
  { title: 'Equipe', to: '/equipe' },
  { title: 'Contato', to: '/contato' },
]
</script>

<template>
  <header class="bg-dileao-green p-4 shadow-md relative z-50">
    <nav
      class="container mx-auto flex items-center justify-between"
      role="navigation"
      aria-label="Main navigation"
    >
      <div>
        <router-link to="/" aria-label="Home">
          <img :src="logoName" class="h-8" alt="Casa DiLeão Logo" />
        </router-link>
      </div>

      <div class="md:hidden">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="text-white focus:outline-none"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <i v-if="!isMenuOpen" class="pi pi-bars text-white text-3xl"></i>
          <i v-else class="pi pi-times text-white text-3xl"></i>
        </button>
      </div>

      <div
        :class="[
          { hidden: !isMenuOpen, flex: isMenuOpen },
          'md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-[#626b40] md:bg-none p-4 md:p-0 z-40 items-center justify-center md:justify-end'
        ]"
        id="mobile-menu"
      >
        <ul
          class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto items-center"
        >
          <li v-for="item in menuItems" :key="item.to">
            <router-link
              @click="isMenuOpen = false"
              :to="item.to"
              class="block text-white hover:text-yellow-100 transition duration-300 py-2 md:py-0"
            >
              {{ item.title }}
            </router-link>
          </li>
          <li class="mt-4 md:mt-0">
            <router-link
              @click="isMenuOpen = false"
              to="/agendar"
              class="block bg-white text-black px-4 py-2 rounded-full hover:scale-105 transition duration-300 text-center"
            >
              Agendar
            </router-link>
          </li>
          <li class="mt-4 md:mt-0">
            <a
              @click="isMenuOpen = false"
              href="https://www.instagram.com/casadileao/"
              target="_blank"
              rel="noopener noreferrer"
              class="block"
              aria-label="Instagram Casa DiLeão"
            >
              <img :src="instaLogo" class="h-6" alt="Instagram Logo" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
