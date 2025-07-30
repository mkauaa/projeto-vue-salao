<script setup>
import { RouterView } from 'vue-router'
import NavSection from './components/NavSection.vue';
import FooterSection from './components/FooterSection.vue';

</script>

<template>
  <NavSection />
  <main>
      <router-view />
    </main>
  <FooterSection/>
</template>
