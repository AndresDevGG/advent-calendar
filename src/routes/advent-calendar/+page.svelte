<script lang="ts">
  import { page } from '$app/state';
	import { AdventCalendar } from '$lib/components/advent-calendar';
	import type { AdventDayData } from '$lib/components/advent-calendar';
  import Icon from '@iconify/svelte';

	let selectedDay: AdventDayData | null = $state(null);
	let showModal = $state(false);
	let testMode = $state(false); // Toggle para modo prueba

	function toggleTestMode() {
		testMode = !testMode;
		console.log('Modo prueba:', testMode ? 'ACTIVADO' : 'DESACTIVADO');
		console.log('testMode value:', testMode);
	}

	function handleDayClick(day: number, data: AdventDayData) {
		selectedDay = data;
		showModal = true;
		console.log(`¡Día ${day} abierto!`, data);
	}

	function closeModal() {
		showModal = false;
		selectedDay = null;
	}

	$effect(() => {
		testMode = page.url.searchParams.get('testMode') === 'true';
	});
</script>

<svelte:head>
	<title>Calendario de Octubre</title>
</svelte:head>

<div class="page-container">

	<AdventCalendar 
		year={2024}
		{testMode}
		onDayClick={handleDayClick}
	/>

	{#if showModal && selectedDay}
		<div class="modal-overlay" onclick={closeModal} role="button" tabindex="0" onkeydown={(e) => e.key === 'Escape' && closeModal()}>
			<div class="modal-content" onclick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" tabindex="0" onkeydown={(e) => e.key === 'Escape' && closeModal()}>
				<div class="flex justify-between items-center">
					<div class="day-icon"> <Icon icon={"mingcute:" + selectedDay.icon} /></div>

					<button class="close-button" onclick={closeModal}>×</button>
				</div>
				
				<div class="modal-header">
					<h2>¡Día {selectedDay.day}!</h2>
					<div class="illustration-container">
						<img src={selectedDay.illustration} alt="Ilustración del día {selectedDay.day}" class="day-illustration" />
					</div>
				</div>

				<div class="modal-body">
					<h3>{selectedDay.reward}</h3>
					<!-- <p>¡Felicidades! Has descubierto la sorpresa del día {selectedDay.day} de octubre.</p> -->
					
					<div class="reward-content">
						<p>🎁 Tu recompensa especial:</p>
						<div class="reward-box">
							{selectedDay.content}
						</div>
					</div>
				</div>

				<div class="modal-footer">
					<button class="close-btn" onclick={closeModal}>
						¡Gracias!
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.page-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 50%, #d8b186 100%);
		padding: 2rem 1rem;
	}


	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(189, 125, 98, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal-content {
		background: #f7ebdb;
		border-radius: 16px;
		padding: 1rem;
		max-width: 500px;
		width: 100%;
		position: relative;
		box-shadow: 0 20px 40px rgba(189, 125, 98, 0.3);
		animation: modalSlideIn 0.3s ease-out;
		border: 2px solid #f4d6b4;
	}

	.close-button {
		background: none;
		border: none;
		font-size: 2.5rem;
		color: #bd7d62;
		cursor: pointer;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s;
		padding-bottom: 5px;
	}

	.close-button:hover {
		background-color: #f4d6b4;
	}

	.modal-header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.illustration-container {
		margin-bottom: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.day-illustration {
		max-width: 400px;
		max-height: 400px;
		width: auto;
		height: auto;
		border-radius: 12px;
		box-shadow: 0 8px 16px rgba(189, 125, 98, 0.2);
		transition: transform 0.3s ease;
	}

	.day-illustration:hover {
		transform: scale(1.05);
	}

	.day-icon {
		font-size: 2.5rem;
		color: #bd7d62;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.modal-header h2 {
		color: #bd7d62;
		font-size: 1.8rem;
		margin: 0;
		font-weight: bold;
	}

	.modal-body {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.modal-body h3 {
		color: #d49270;
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.modal-body p {
		color: #bd7d62;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.reward-content {
		background: #f4d6b4;
		border-radius: 12px;
		padding: 1rem;
		margin-top: 1rem;
	}

	.reward-content p {
		color: #bd7d62;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.reward-box {
		background: #d8b186;
		border: 2px solid #d49270;
		border-radius: 8px;
		padding: 1rem;
		font-weight: bold;
		color: #f7ebdb;
		font-size: 1.1rem;
	}

	.modal-footer {
		text-align: center;
	}

	.close-btn {
		background: #d49270;
		color: #f7ebdb;
		border: none;
		padding: 0.75rem 2rem;
		border-radius: 25px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.close-btn:hover {
		background: #bd7d62;
		transform: translateY(-2px);
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: translateY(-20px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
	}

	@media (max-width: 768px) {
		.modal-content {
			padding: 1.5rem;
			max-width: 90vw;
		}

		.day-illustration {
			max-width: 400px;
			max-height: 400px;
		}

		.day-icon {
			font-size: 2rem;
		}

		.modal-header h2 {
			font-size: 1.5rem;
		}
	}
</style> 