<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentMonth: Number,
  currentYear: Number,
  initialMonth: Number,
  initialYear: Number,
  selectedDate: Date,
});

const emit = defineEmits(['update:month', 'date-selected']);

const DAYS_OF_WEEK = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const WORKING_DAYS_RANGE = { start: 2, end: 5 };
const todayMidnight = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

const getMonthName = (monthIndex) => {
  const date = new Date(props.currentYear, monthIndex);
  return date.toLocaleString('pt-BR', { month: 'long' });
};

const isPrevMonthDisabled = computed(() => {
  return props.currentMonth === props.initialMonth && props.currentYear === props.initialYear;
});

const isNextMonthDisabled = computed(() => {
  const currentDisplayedDate = new Date(props.currentYear, props.currentMonth, 1);
  const futureDateLimit = new Date(props.initialYear, props.initialMonth + 1, 1);
  futureDateLimit.setMonth(futureDateLimit.getMonth() + 1);
  return currentDisplayedDate >= futureDateLimit;
});

const displayedMonthDays = computed(() => {
  const days = [];
  const firstDayOfMonth = new Date(props.currentYear, props.currentMonth, 1);
  const lastDayOfMonth = new Date(props.currentYear, props.currentMonth + 1, 0);
  const numDays = lastDayOfMonth.getDate();

  // Normalize selectedDate to midnight if it exists
  let selectedDateMidnight = null;
  if (props.selectedDate) {
    selectedDateMidnight = new Date(props.selectedDate);
    selectedDateMidnight.setHours(0, 0, 0, 0);
  }

  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    days.push({ day: null, isCurrentMonth: false });
  }

  for (let i = 1; i <= numDays; i++) {
    const date = new Date(props.currentYear, props.currentMonth, i);
    date.setHours(0, 0, 0, 0);

    const dayOfWeek = date.getDay();
    const isWorkingDay = dayOfWeek >= WORKING_DAYS_RANGE.start && dayOfWeek <= WORKING_DAYS_RANGE.end;

    days.push({
      day: i,
      date: date,
      isCurrentMonth: true,
      isToday: date.getTime() === todayMidnight.getTime(),
      isSelected: selectedDateMidnight ? date.getTime() === selectedDateMidnight.getTime() : false,
      isPast: date < todayMidnight,
      isWorkingDay: isWorkingDay
    });
  }
  return days;
});

const prevMonth = () => {
  if (isPrevMonthDisabled.value) return;

  let newMonth = props.currentMonth - 1;
  let newYear = props.currentYear;
  if (newMonth < 0) {
    newMonth = 11;
    newYear--;
  }
  emit('update:month', { month: newMonth, year: newYear });
};

const nextMonth = () => {
  if (isNextMonthDisabled.value) return;

  let newMonth = props.currentMonth + 1;
  let newYear = props.currentYear;
  if (newMonth > 11) {
    newMonth = 0;
    newYear++;
  }
  emit('update:month', { month: newMonth, year: newYear });
};

const isDaySelectable = (dayData) => {
  return dayData.day && !dayData.isPast && dayData.isWorkingDay && dayData.isCurrentMonth;
};

const selectDay = (dayData) => {
  if (isDaySelectable(dayData)) {
    emit('date-selected', dayData.date);
  }
};
</script>

<template>
  <div class="bg-[#faece3] p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-gray-800 mb-12">
    <div class="flex justify-between items-center mb-6">
      <button
        @click="prevMonth"
        :disabled="isPrevMonthDisabled"
        class="bg-[#626b40] text-white px-4 py-2 rounded-full hover:bg-[#a3a96e] disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
      >
        <i class="pi pi-chevron-left"></i>
      </button>

      <h3 class="text-2xl font-bold text-dileao-green">{{ getMonthName(props.currentMonth) }} {{ props.currentYear }}</h3>

      <button
        @click="nextMonth"
        :disabled="isNextMonthDisabled"
        class="bg-dileao-green text-white px-4 py-2 rounded-full hover:bg-light-green disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
      >
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>

    <div class="grid grid-cols-7 gap-2 text-sm md:text-base">
      <div v-for="day in DAYS_OF_WEEK" :key="day" class="font-bold text-center text-dileao-green">
        {{ day }}
      </div>
      <div
        v-for="(dayData, idx) in displayedMonthDays"
        :key="idx"
        :class="{
          'opacity-40 cursor-not-allowed': !isDaySelectable(dayData),
          'bg-[#a3a96e] text-white font-semibold': dayData.isSelected,
          'hover:bg-[#c0c77c]': isDaySelectable(dayData) && !dayData.isSelected,
          'cursor-pointer': isDaySelectable(dayData),
          'border-2 border-[#6e3a1e]': dayData.isToday && !dayData.isSelected && dayData.isWorkingDay
        }"
        class="p-2 rounded-md text-center"
        @click="selectDay(dayData)"
      >
        {{ dayData.day }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
