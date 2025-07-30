<script setup>
import { ref } from 'vue';
import CalendarDisplay from '@/components/CalendarSection.vue';
import AvailableTimes from '@/components/AvailableSection.vue';

const today = new Date();
const initialMonth = today.getMonth();
const initialYear = today.getFullYear();

const currentMonth = ref(initialMonth);
const currentYear = ref(initialYear);
const selectedDate = ref(null);
const selectedTime = ref(null);
const whatsappMessage = ref('');
const showWhatsappButton = ref(false);

const resetSelection = () => {
  selectedDate.value = null;
  selectedTime.value = null;
  showWhatsappButton.value = false;
  whatsappMessage.value = '';
};

const handleMonthUpdate = ({ month, year }) => {
  resetSelection();
  currentMonth.value = month;
  currentYear.value = year;
};

const handleDateSelected = (date) => {
  selectedDate.value = date;
  selectedTime.value = null;
  showWhatsappButton.value = false;
  whatsappMessage.value = '';
  setTimeout(() => {
    document.getElementById('available-times').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
};

const handleTimeSelected = (time) => {
  selectedTime.value = time;

  const formattedDate = selectedDate.value.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  whatsappMessage.value = `Olá! Gostaria de agendar um horário no dia *${formattedDate}* às *${selectedTime.value}*. Por favor, confirme a disponibilidade. Meu nome é [SEU NOME AQUI].`;
  showWhatsappButton.value = true;
};

const openWhatsApp = () => {
  const phoneNumber = '5579999999999';
  const encodedMessage = encodeURIComponent(whatsappMessage.value);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};
</script>

<template>
  <section class="py-16 bg-[#242b20] text-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-extrabold mb-12">Agende seu Horário</h2>

      <p class="text-lg mb-8 max-w-2xl mx-auto">
        Selecione uma data no calendário e escolha o horário ideal para florescer sua beleza na Casa DiLeão.
        Atendemos de Terça a Sexta-feira, das 09h às 17h.
      </p>

      <CalendarDisplay
        :current-month="currentMonth"
        :current-year="currentYear"
        :initial-month="initialMonth"
        :initial-year="initialYear"
        :selected-date="selectedDate"
        @update:month="handleMonthUpdate"
        @date-selected="handleDateSelected"
      />

      <Transition
        enter-active-class="transition-opacity duration-500 ease-out"
        leave-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <AvailableTimes
          v-if="selectedDate"
          :selected-date="selectedDate"
          :selected-time="selectedTime"
          @time-selected="handleTimeSelected"
        />
      </Transition>

      <Transition
        enter-active-class="transition-opacity duration-500 ease-out"
        leave-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div v-if="showWhatsappButton" class="mt-12">
          <p class="text-lg text-white mb-6 max-w-2xl mx-auto">
            Ótimo! Sua mensagem está pronta. Clique no botão para nos enviar via WhatsApp e confirmar seu agendamento.
          </p>
          <button
            @click="openWhatsApp"
            class="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 transform hover:scale-105 inline-flex items-center"
          >
            <i class="pi pi-whatsapp mr-3 text-xl"></i> Agendar via WhatsApp
          </button>
        </div>
      </Transition>

    </div>
  </section>
</template>

<style scoped>

</style>
