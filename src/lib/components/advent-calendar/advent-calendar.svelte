<script lang="ts">
	import { onMount } from 'svelte';
	import AdventDay from './advent-day.svelte';
	import type { AdventDayData } from './types';
	import calendarData from '$lib/assets/data.json';
  import Icon from '@iconify/svelte';

	export let year: number = new Date().getFullYear();
	export let onDayClick: ((day: number, data: AdventDayData) => void) | undefined = undefined;
	export let testMode: boolean = false; // Modo de prueba sin bloqueo

	let currentDay = new Date().getDate();
	let currentMonth = new Date().getMonth() + 1; // Enero es 0
	let isOctober = currentMonth === 10;
	let today = new Date().getDate();

	// Datos del calendario desde JSON
	let adventDays: AdventDayData[] = [];

	function generateAdventDays() {
		console.log('Generando días desde JSON - testMode:', testMode, 'isOctober:', isOctober, 'today:', today);
		
		adventDays = calendarData.data.map((dayData, index) => {
			const dayNumber = dayData.day;
			const isPast = isOctober && dayNumber <= today;
			const isToday = isOctober && dayNumber === today;
			
			// En modo prueba, todos los días están desbloqueados
			// En modo normal, solo los días futuros están bloqueados (si estamos en octubre)
			const isLocked = testMode ? false : (isOctober ? dayNumber > today : true);
			
			// Solo log para los primeros 5 días para no saturar la consola
			if (dayNumber <= 5) {
				console.log(`Día ${dayNumber}: isLocked=${isLocked} (testMode=${testMode}, isPast=${isPast}, isToday=${isToday})`);
			}
			
			return {
				day: dayNumber,
				isPast,
				isToday,
				isLocked,
				content: dayData.content,
				reward: dayData.reward,
				backgroundColor: dayData.backgroundColor,
				icon: dayData.icon,
				illustration: dayData.illustration
			};
		});
	}

	onMount(() => {
		generateAdventDays();
	});

	$: {
		console.log('testMode cambió a:', testMode);
		generateAdventDays();
	}


	function handleDayClick(day: number, data: AdventDayData) {
		if (data.isLocked) return;
		onDayClick?.(day, data);
	}
</script>

<div class="advent-calendar">
	<header class="calendar-header">
		<h1 class="title">🍂 Calendario de Octubre {year} 🍂</h1>
		<p class="subtitle">Descubre una sorpresa cada día del mes de octubre</p>
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
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.1); }
	}

	@media (max-width: 768px) {
		.advent-calendar {
			padding: 1rem;
		}

		.title {
			font-size: 2rem;
		}

		.calendar-grid {
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
			gap: 0.75rem;
		}
	}
</style> 