<script setup>
import { computed } from 'vue';

const props = defineProps({
  selectedDate: { type: Date },
  selectedTime: { type: String },
});

const emit = defineEmits(['time-selected']);

const SIMULATED_DAILY_SLOTS = {
  'Terça-feira': ['09:00', '11:00', '13:00', '15:00'],
  'Quarta-feira': ['09:00', '11:00', '13:00', '15:00'],
  'Quinta-feira': ['09:00', '11:00', '13:00', '15:00'],
  'Sexta-feira': ['09:00', '11:00', '13:00', '15:00'],
};

const timesForSelectedDay = computed(() => {
  if (!props.selectedDate) return [];
  const dayName = props.selectedDate.toLocaleString('pt-BR', { weekday: 'long' });
  const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  return SIMULATED_DAILY_SLOTS[capitalizedDayName] || [];
});

const selectTime = (time) => {
  emit('time-selected', time);
};
</script>

<template>
  <div v-if="selectedDate" id="available-times" class="mt-12 bg-[#faece3] p-8 rounded-lg shadow-xl max-w-xl mx-auto text-gray-800">
    <h3 class="text-3xl font-bold mb-6 text-[#626b40]">Horários para {{ selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' }) }}</h3>

    <div v-if="timesForSelectedDay.length > 0" class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <button
        v-for="(time, index) in timesForSelectedDay"
        :key="index"
        @click="selectTime(time)"
        :class="[
          {
            'bg-light-green text-white hover:bg-dileao-green': selectedTime !== time,
            'bg-dileao-brown text-white': selectedTime === time
          },
          'px-4 py-2 rounded-full font-semibold transition-colors duration-200'
        ]"
      >
        {{ time }}
      </button>
    </div>
    <p v-else class="text-lg text-gray-600">Nenhum horário disponível para este dia. Por favor, selecione outra data!</p>
  </div>
</template>

<style scoped>
</style>
