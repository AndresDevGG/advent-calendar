<script lang="ts">
	import type { AdventDayData } from './types';

	interface Props {
		dayData: AdventDayData;
		onClick: (day: number, data: AdventDayData) => void;
	}

	let { dayData, onClick }: Props = $props();

	let isAnimating = $state(false);


	async function handleClick() {
		if (dayData.isLocked) return;
		
		isAnimating = true;
		await new Promise(resolve => setTimeout(resolve, 300)); // Duración de la animación
		
		onClick(dayData.day, dayData);
		
		isAnimating = false;
	}
</script>

<div 
	class="advent-day"
	class:locked={dayData.isLocked}
	class:today={dayData.isToday}
	class:past={dayData.isPast}
	class:animating={isAnimating}
	style="background-color: {dayData.backgroundColor}"
	onclick={handleClick}
	role="button"
	tabindex={dayData.isLocked ? -1 : 0}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleClick();
		}
	}}
>
	<div class="day-number">{dayData.day}</div>
	<div class="day-icon">{dayData.icon}</div>
	
	{#if dayData.isLocked}
		<div class="lock-overlay">
			<div class="lock-icon">🔒</div>
		</div>
	{:else if dayData.isPast}
		<div class="opened-indicator">
			<div class="check-icon">✓</div>
		</div>
	{/if}

	{#if dayData.isToday}
		<div class="today-indicator">HOY</div>
	{/if}
</div>

<style>
	.advent-day {
		position: relative;
		aspect-ratio: 1;
		border-radius: 12px;
		border: 3px solid #5D688A;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
		overflow: hidden;
		box-shadow: 0 4px 8px rgba(93, 104, 138, 0.2);
	}

	.advent-day:hover:not(.locked) {
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(93, 104, 138, 0.3);
	}

	.advent-day.locked {
		cursor: not-allowed;
		opacity: 0.7;
	}

	.advent-day.today {
		border-color: #F7A5A5;
		border-width: 4px;
		animation: glow 2s ease-in-out infinite alternate;
	}

	.advent-day.past {
		border-color: #FFDBB6;
	}

	.advent-day.animating {
		animation: cardOpen 0.3s ease-out;
	}

	.day-number {
		font-size: 1.5rem;
		font-weight: bold;
		color: #5D688A;
		margin-bottom: 0.5rem;
		z-index: 2;
	}

	.day-icon {
		font-size: 2rem;
		z-index: 2;
	}

	.lock-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 242, 239, 0.9);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
	}

	.lock-icon {
		font-size: 1.5rem;
		color: #5D688A;
	}

	.opened-indicator {
		position: absolute;
		top: 8px;
		right: 8px;
		background: #FFDBB6;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
	}

	.check-icon {
		color: #5D688A;
		font-weight: bold;
		font-size: 0.8rem;
	}

	.today-indicator {
		position: absolute;
		bottom: 8px;
		left: 50%;
		transform: translateX(-50%);
		background: #F7A5A5;
		color: white;
		padding: 2px 8px;
		border-radius: 12px;
		font-size: 0.7rem;
		font-weight: bold;
		z-index: 3;
	}

	@keyframes glow {
		from {
			box-shadow: 0 4px 8px rgba(247, 165, 165, 0.3);
		}
		to {
			box-shadow: 0 4px 16px rgba(247, 165, 165, 0.6);
		}
	}

	@keyframes cardOpen {
		0% {
			transform: scale(1) rotate(0deg);
		}
		50% {
			transform: scale(1.1) rotate(5deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}

	@media (max-width: 768px) {
		.day-number {
			font-size: 1.2rem;
		}

		.day-icon {
			font-size: 1.5rem;
		}

		.today-indicator {
			font-size: 0.6rem;
			padding: 1px 6px;
		}
	}
</style> 