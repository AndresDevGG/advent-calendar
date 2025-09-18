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

  // Timer para cuenta regresiva hasta octubre
  let timeUntilOctober = $state({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  let showTimer = $state(true);

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
      if (false && dayNumber > 14 && dayNumber <= 20) {
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

  function updateTimer() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const octoberFirst = new Date(currentYear, 9, 1); // Octubre es mes 9 (0-indexado)
    
    // Si ya pasó octubre de este año, calcular para el próximo año
    if (now > octoberFirst) {
      octoberFirst.setFullYear(currentYear + 1);
    }
    
    const timeDiff = octoberFirst.getTime() - now.getTime();
    
    if (timeDiff <= 0) {
      showTimer = false;
      return;
    }
    
    timeUntilOctober.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeUntilOctober.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    timeUntilOctober.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    timeUntilOctober.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  }

  onMount(() => {
    generateAdventDays();
    updateTimer();
    
    // Actualizar el timer cada segundo
    const timerInterval = setInterval(updateTimer, 1000);
    
    return () => {
      clearInterval(timerInterval);
    };
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
    // console.log(listRewards);
  });
</script>

<div class="advent-calendar">
  <header class="calendar-header">
    <h1 class="title">🍂 {year} 🍂</h1>
    <p class="subtitle">Un día, un detalle, un recuerdo, un nosotros.</p>
    
    {#if showTimer && !isOctober}
      <div class="timer-container">
        <h2 class="timer-title">⏰ La paciencia es una virtud</h2>
        <div class="timer-display">
          <div class="timer-unit">
            <span class="timer-number">{timeUntilOctober.days}</span>
            <span class="timer-label">Días</span>
          </div>
          <div class="timer-separator">:</div>
          <div class="timer-unit">
            <span class="timer-number">{timeUntilOctober.hours.toString().padStart(2, '0')}</span>
            <span class="timer-label">Horas</span>
          </div>
          <div class="timer-separator">:</div>
          <div class="timer-unit">
            <span class="timer-number">{timeUntilOctober.minutes.toString().padStart(2, '0')}</span>
            <span class="timer-label">Min</span>
          </div>
          <div class="timer-separator">:</div>
          <div class="timer-unit">
            <span class="timer-number">{timeUntilOctober.seconds.toString().padStart(2, '0')}</span>
            <span class="timer-label">Seg</span>
          </div>
        </div>
      </div>
    {/if}
    
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

  .timer-container {
    background: linear-gradient(135deg, #d49270, #bd7d62);
    border-radius: 20px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 8px 20px rgba(189, 125, 98, 0.3);
    border: 2px solid #f4d6b4;
    animation: timerGlow 3s ease-in-out infinite alternate;
  }

  .timer-title {
    color: #f7ebdb;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0 0 1rem 0;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .timer-display {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .timer-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(247, 235, 219, 0.2);
    border-radius: 12px;
    padding: 0.75rem;
    min-width: 60px;
    border: 1px solid rgba(244, 214, 180, 0.3);
  }

  .timer-number {
    font-size: 1.8rem;
    font-weight: bold;
    color: #f7ebdb;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    line-height: 1;
  }

  .timer-label {
    font-size: 0.8rem;
    color: #f4d6b4;
    font-weight: 600;
    margin-top: 0.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .timer-separator {
    font-size: 1.5rem;
    color: #f7ebdb;
    font-weight: bold;
    margin: 0 0.25rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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

  @keyframes timerGlow {
    0% {
      box-shadow: 0 8px 20px rgba(189, 125, 98, 0.3);
    }
    100% {
      box-shadow: 0 8px 30px rgba(189, 125, 98, 0.5), 0 0 20px rgba(244, 214, 180, 0.3);
    }
  }

  @media (max-width: 768px) {
    .advent-calendar {
      padding: 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .timer-container {
      padding: 1rem;
      margin: 1rem 0;
    }

    .timer-title {
      font-size: 1.1rem;
    }

    .timer-display {
      gap: 0.25rem;
    }

    .timer-unit {
      padding: 0.5rem;
      min-width: 50px;
    }

    .timer-number {
      font-size: 1.4rem;
    }

    .timer-label {
      font-size: 0.7rem;
    }

    .timer-separator {
      font-size: 1.2rem;
      margin: 0 0.1rem;
    }
  }
</style>
