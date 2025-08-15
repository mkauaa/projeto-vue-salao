<script setup>
import diegoImage from '@/assets/images/fotodiego.jpg';
import diogoImage from '@/assets/images/fotodiogo.jpg';
import jordsImage from '@/assets/images/fotojords.jpg';
import kleytonImage from '@/assets/images/fotokleyton.jpg';

const members = [
  {
    name: 'Diego Leão',
    role: 'Especialista em Cachos',
    description: 'Em 2025 completo 21 anos exercendo a profissão que transformou a minha vida e que sempre sonhei em exercer, desde os 8 anos de idade(ou menos rsrs). Eu sempre soube o que queria ser e sempre aproveitei cada oportunidade que a vida me deu de me aproximar de quem poderia me ensinar algo e assim fui construindo minha trajetória. Hoje, após vencer os meus medos, (mentira, eu não venci meus medos, mas vou com medo mesmo rsrs) estou muito feliz de muito em breve poder dividir meus conhecimentos adquiridos ao longo desses anos com quem tiver interesse em aprender comigo.',
    image: diegoImage,
    instagram: 'https://www.instagram.com/casadileao/',
  },
  {
    name: 'Diogo',
    role: 'Especialista em Cachos e Barba',
    description: 'Costumo dizer que na vida a gente não é algo, a gente está alguma coisa. A vida me proporcionou estar Serviços Gerais, estar monitor de carros elétricos, estar vendedor em papelaria e loja de cosméticos, estar atendente de lanchonete e por fim, estar Sushiman, arte oriental que molda as peças com as mãos, pude aprender com grandes companheiros do meu lado, mau sabia eu que a vida me encaminharia a continuar fazendo arte com as mãos… Quem eu sou me trouxe ao universo da arte que é cortar cabelo, comecei como auxiliar de @casadileao onde aprendi e continuo aprendendo, referência no que faz onde tenho maior admiração. E como em todos os lugares que eu passo, busco sempre dar o meu melhor!',
    image: diogoImage,
    instagram: 'https://www.instagram.com/cortespordi/',
  },
  {
    name: 'Jordanna',
    role: 'Colorista e Penteados',
    description: 'A minha jornada como cabeleireira começou de forma muito natural pois mexer com cabelo sempre foi algo que amei fazer, desde pequena sei fazer vários tipos de tranças em mim mesma, na escola passava a educação física trançando o cabelo das minhas amigas e isso acabou virando uma profissão onde encontrei o meu lugar. Comecei um curso de cabeleireira e junto com ele acabei fazendo minha transição e voltei aos meus cachos. Logo quis me especializar e fui procurar cursos. O primeiro deles foi com a @biahulmann , onde eu tive uma virada de chave sobre quem eu poderia ser e onde poderia chegar. Bia é hoje referência em cachos a nível mundial e me mostrou que Cabeleireira é uma profissão que pode te levar onde você quiser. Sempre querendo aprender mais e evoluir. Ser cabeleireira me levou a lugares maravilhosos e me apresentou pessoas incríveis. 7 anos de carreira e hoje aqui na Casa encontrei um lugar onde exercer minha profissão tem sido cada dia mais gratificante.',
    image: jordsImage,
    instagram: 'https://www.instagram.com/jordscabeleireira/',
  },
  {
    name: 'Kleyton',
    role: 'Especialista em Cachos',
    description: 'Falando um pouco sobre minha jornada profissional geral, meu primeiro emprego foi em uma fábrica de sapatos, e durante anos, também fui balconista, depois entrei no ramo de iluminação automotiva, oficina e estoques. Foi aí onde vi que nenhum deles fazia o meu coração estar em paz , ele batia mais forte por algo reprimido que tive na infância, que era trabalhar com cabelos. Fiz curso de barbeiro para iniciar minha jornada, mas tive a oportunidade de conhecer a Casa Di Leão, onde estou realizando o que eu mais sonhava desde criança. Ser cabeleireiro.',
    image: kleytonImage,
    instagram: 'https://www.instagram.com/kleyton.cachos/',
  }
];
</script>

<template>
  <section class="bg-dark-green py-16 text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-5xl font-extrabold mb-8 text-light-green">Nossa Equipe</h2>

      <p class="text-lg text-gray-200 font-semibold mb-12 max-w-2xl mx-auto">
        Conheça os especialistas que transformam e cuidam da sua beleza!
      </p>

      <div class="space-y-16">
        <div
          v-for="(member, index) in members"
          :key="member.name"
          class="flex flex-col lg:flex-row items-center justify-center p-8 bg-dileao-green rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105"
          :class="{ 'lg:flex-row-reverse': index % 2 !== 0, 'lg:gap-20': true, 'gap-8': true }"
        >
          <div class="w-full lg:w-1/3 mb-8 lg:mb-0 flex-shrink-0">
            <div class="aspect-square w-full overflow-hidden rounded-lg shadow-xl">
              <img
                :src="member.image"
                :alt="`Foto de ${member.name}`"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div class="w-full lg:w-2/3 text-center lg:text-left">
            <h3 class="text-4xl font-bold text-lighter-green mb-2">{{ member.name }}</h3>
            <p class="text-xl font-semibold text-light-green mb-4">{{ member.role }}</p>
            <p class="text-lg leading-relaxed text-gray-200 mb-6 text-justify">{{ member.description }}</p>

            <div v-if="member.instagram" class="flex justify-center lg:justify-start">
              <a
                :href="member.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-white bg-[#707b4a] py-2 px-6 rounded-full font-semibold hover:bg-light-green transition duration-300"
              >
                <i class="pi pi-instagram mr-2 text-xl"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
