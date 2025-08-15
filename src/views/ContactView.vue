<script>
export default {
  methods: {
    onSubmit() {
      alert('Mensagem enviada!');
    }
  }
}
</script>

<template>
  <section class="bg-dark-green py-16 text-white min-h-screen">
    <div class="container mx-auto px-6">
      <h2 class="text-5xl font-extrabold text-center mb-12 text-light-green">
        Entre em Contato
      </h2>

      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div class="lg:w-2/3 p-8 bg-[#3e482f] rounded-2xl shadow-lg">
          <form class="space-y-6" @submit.prevent="onSubmit">
            <div>
              <label for="name" class="block text-lg font-medium text-gray-300 mb-2">Seu Nome</label>
              <input
                type="text"
                id="name"
                class="w-full px-4 py-3 bg-darker-green rounded-lg focus:ring-2 focus:ring-[#b5c78d] focus:border-transparent outline-none transition duration-200"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label for="email" class="block text-lg font-medium text-gray-300 mb-2">Seu Email</label>
              <input
              type="email"
              id="email"
              class="w-full px-4 py-3 bg-dark-green rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent outline-none transition duration-200"
              placeholder="exemplo@email.com"
              />
            </div>
            <div>
              <label for="message" class="block text-lg font-medium text-gray-300 mb-2">Sua Mensagem</label>
              <textarea
                id="message"
                rows="5"
                class="w-full px-4 py-3 bg-darker-green rounded-lg focus:ring-2 focus:ring-light-green focus:border-transparent outline-none transition duration-200 resize-none"
                placeholder="Descreva sua dúvida ou solicitação"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-white text-dark-green font-semibold py-4 rounded-full shadow-md hover:bg-light-green transition-all duration-300 transform hover:scale-105"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div class="lg:w-1/3 flex flex-col justify-center text-center lg:text-left space-y-8">
          <div class="p-6 bg-[#3e482f] rounded-2xl shadow-lg">
            <h3 class="text-3xl font-bold text-light-green mb-4">Informações</h3>
            <div class="space-y-4 text-gray-200">
              <div class="flex items-center justify-center lg:justify-start">
                <i class="pi pi-map-marker text-xl text-[#707b4a] mr-3"></i>
                <p>Praça Eronildes de Carvalho, n° 63 - Salgado Filho, Aracaju - SE, 49020-510</p>
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <i class="pi pi-phone text-xl text-[#707b4a] mr-3"></i>
                <p>(79) 99999-9999</p>
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <i class="pi pi-whatsapp text-xl text-[#707b4a] mr-3"></i>
                <p>(79) 99999-9999</p>
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <i class="pi pi-instagram text-xl text-[#707b4a] mr-3"></i>
                <p>@casadileao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
