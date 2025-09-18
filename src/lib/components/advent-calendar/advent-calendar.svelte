<script lang="ts">
  import { onMount } from "svelte";
  import AdventDay from "./advent-day.svelte";
  import type { AdventDayData } from "./types";
  import calendarData from "$lib/assets/data.json";


  interface Props {
    year?: number;
    onDayClick: (day: number, data: AdventDayData) => void;
    testMode: boolean;
  }

  let { year = new Date().getFullYear(), onDayClick, testMode }: Props = $props();

  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1; // Enero es 0
  let isOctober = currentMonth === 10; // Octubre es 10
  let today = new Date().getDate();

  // Datos del calendario desde JSON
  let adventDays: AdventDayData[] = $state([]);

  function generateAdventDays() {
    

    adventDays = calendarData.data.map((dayData, index) => {
      const dayNumber = dayData.day;
      const isPast = isOctober && dayNumber < today;
      const isToday = isOctober && dayNumber === today;

      // En modo prueba, todos los días están desbloqueados
      // En modo normal, solo los días futuros están bloqueados (si estamos en octubre)
      const isLocked = testMode ? false : isOctober ? dayNumber > today : true;

      // Solo log para los primeros 5 días para no saturar la consola
      if (dayNumber > 14 && dayNumber <= 20) {
        console.log(
          `Día ${dayNumber}: isLocked=${isLocked} (testMode=${testMode}, isPast=${isPast}, isToday=${isToday})`
        );
      }

      return {
        day: dayNumber,
        isPast,
        isToday,
        isLocked,
        content: dayData.content,
        description: dayData.description,
        reward: dayData.reward,
        backgroundColor: dayData.backgroundColor,
        icon: dayData.icon,
        illustration: dayData.illustration,
      };
    });
  }

  onMount(() => {
    generateAdventDays();
  });

  $effect(() => {
    generateAdventDays();
  });

  function handleDayClick(day: number, data: AdventDayData) {
    // if (data.isLocked) return;
    onDayClick(day, data);
  }

  $effect(() => {

    const listRewards = adventDays.map((day) => day.reward);
    console.log(listRewards);
  });
</script>

<div class="advent-calendar">
  <header class="calendar-header">
    <h1 class="title">🍂 {year} 🍂</h1>
    <p class="subtitle">Un día, un detalle, un recuerdo, un nosotros.</p>
    {#if testMode}
      <div class="test-mode-banner">
        🧪 Modo Prueba - Todas las tarjetas están desbloqueadas
      </div>
    {/if}
  </header>

  <div class="calendar-grid">
    {#each adventDays as dayData (dayData.day)}
      <AdventDay
        {dayData}
        onClick={() => handleDayClick(dayData.day, dayData)}
      />
    {/each}
  </div>
</div>

<style>
  .advent-calendar {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .calendar-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #bd7d62;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 4px rgba(189, 125, 98, 0.2);
  }

  .subtitle {
    font-size: 1.1rem;
    color: #d49270;
    margin: 0;
  }

  .test-mode-banner {
    background: linear-gradient(45deg, #d49270, #f4d6b4);
    color: #f7ebdb;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: bold;
    margin-top: 1rem;
    animation: pulse 2s infinite;
    box-shadow: 0 4px 8px rgba(212, 146, 112, 0.3);
  }

  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    .advent-calendar {
      padding: 1rem;
    }

    .title {
      font-size: 2rem;
    }
  }
</style>
