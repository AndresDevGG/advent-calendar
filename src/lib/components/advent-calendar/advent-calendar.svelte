<script lang="ts">
	import { onMount } from 'svelte';
	import AdventDay from './advent-day.svelte';
	import type { AdventDayData } from './types';

	export let year: number = new Date().getFullYear();
	export let onDayClick: ((day: number, data: AdventDayData) => void) | undefined = undefined;
	export let testMode: boolean = false; // Modo de prueba sin bloqueo

	let currentDay = new Date().getDate();
	let currentMonth = new Date().getMonth() + 1; // Enero es 0
	let isOctober = currentMonth === 10;
	let today = new Date().getDate();

	// Generar datos para los 24 días de adviento
	let adventDays: AdventDayData[] = [];

	function generateAdventDays() {
		console.log('Generando días - testMode:', testMode, 'isOctober:', isOctober, 'today:', today);
		adventDays = Array.from({ length: 31 }, (_, index) => {
			const dayNumber = index + 1;
			const isPast = isOctober && dayNumber <= today;
			const isToday = isOctober && dayNumber === today;
			const isAnniversary = dayNumber === 18;
			const isBirthday = dayNumber === 31;
			
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
				content: getDayContent(dayNumber, isAnniversary, isBirthday),
				reward: getDayReward(dayNumber, isAnniversary, isBirthday),
				backgroundColor: getDayBackgroundColor(dayNumber, isAnniversary, isBirthday),
				icon: getDayIcon(dayNumber, isAnniversary, isBirthday)
			};
		});
	}

	onMount(() => {
		generateAdventDays();
	});

	// Reaccionar a cambios en testMode
	$: {
		console.log('testMode cambió a:', testMode);
		generateAdventDays();
	}

	function getDayContent(day: number, isAnniversary: boolean, isBirthday: boolean): string {
		if (isAnniversary) return "¡8 años juntos! 💕";
		if (isBirthday) return "¡Feliz cumpleaños! 🎂";
		return `Día ${day}`;
	}

	function getDayReward(day: number, isAnniversary: boolean, isBirthday: boolean): string {
		if (isAnniversary) return "Aniversario Especial";
		if (isBirthday) return "Cumpleaños de mi Amor";
		return `Sorpresa ${day}`;
	}

	function getDayBackgroundColor(day: number, isAnniversary: boolean, isBirthday: boolean): string {
		if (isAnniversary) return '#F7A5A5'; // Rosa especial para aniversario
		if (isBirthday) return '#FFDBB6'; // Melocotón para cumpleaños
		return getRandomBackgroundColor();
	}

	function getDayIcon(day: number, isAnniversary: boolean, isBirthday: boolean): string {
		if (isAnniversary) return '💕';
		if (isBirthday) return '🎂';
		return getRandomIcon();
	}

	function getRandomBackgroundColor(): string {
		const colors = ['#5D688A', '#F7A5A5', '#FFDBB6', '#FFF2EF'];
		return colors[Math.floor(Math.random() * colors.length)];
	}

	function getRandomIcon(): string {
		const icons = ['🍂', '🍁', '🌻', '🌺', '🌸', '🌼', '🌷', '🌹', '💐', '🎃', '🕷️', '🦇', '👻', '🎭', '🎪', '🎨', '🎭', '🎪', '🎨', '🎭', '🎪', '🎨', '🎭', '🎪', '🎨', '🎭', '🎪', '🎨', '🎭', '🎪'];
		return icons[Math.floor(Math.random() * icons.length)];
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

	<div class="calendar-footer">
		<div class="legend">
			<div class="legend-item">
				<div class="legend-box locked"></div>
				<span>Próximamente</span>
			</div>
			<div class="legend-item">
				<div class="legend-box available"></div>
				<span>Disponible</span>
			</div>
			<div class="legend-item">
				<div class="legend-box today"></div>
				<span>Hoy</span>
			</div>
		</div>
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
		color: #5D688A;
		margin-bottom: 0.5rem;
		text-shadow: 2px 2px 4px rgba(93, 104, 138, 0.2);
	}

	.subtitle {
		font-size: 1.1rem;
		color: #F7A5A5;
		margin: 0;
	}

	.test-mode-banner {
		background: linear-gradient(45deg, #F7A5A5, #FFDBB6);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 25px;
		font-weight: bold;
		margin-top: 1rem;
		animation: pulse 2s infinite;
		box-shadow: 0 4px 8px rgba(247, 165, 165, 0.3);
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.calendar-footer {
		text-align: center;
	}

	.legend {
		display: flex;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #5D688A;
	}

	.legend-box {
		width: 20px;
		height: 20px;
		border-radius: 4px;
		border: 2px solid #5D688A;
	}

	.legend-box.locked {
		background-color: #FFF2EF;
		opacity: 0.6;
	}

	.legend-box.available {
		background-color: #FFDBB6;
	}

	.legend-box.today {
		background-color: #F7A5A5;
		animation: pulse 2s infinite;
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

		.legend {
			gap: 1rem;
		}
	}
</style> 