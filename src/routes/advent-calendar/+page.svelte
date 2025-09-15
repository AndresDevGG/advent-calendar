<script lang="ts">
  import { page } from '$app/state';
	import { AdventCalendar } from '$lib/components/advent-calendar';
	import type { AdventDayData } from '$lib/components/advent-calendar';

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
		console.log('page.url.searchParams.get(testMode)');
		console.log(page.url);
		console.log(page.url.searchParams);
		console.log(page.url.searchParams.get('testMode'));
		testMode = page.url.searchParams.get('testMode') === 'true';
	});
</script>

<svelte:head>
	<title>Calendario de Octubre</title>
</svelte:head>
{testMode}
<div class="page-container">
	<div class="controls">
		<button 
			class="test-toggle"
			class:active={testMode}
			onclick={toggleTestMode}
		>
			{testMode ? '🧪 Desactivar Modo Prueba' : '🧪 Activar Modo Prueba'}
		</button>
	</div>

	<AdventCalendar 
		year={2024}
		{testMode}
		onDayClick={handleDayClick}
	/>

	{#if showModal && selectedDay}
		<div class="modal-overlay" onclick={closeModal} role="button" tabindex="0" onkeydown={(e) => e.key === 'Escape' && closeModal()}>
			<div class="modal-content" onclick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" tabindex="0" onkeydown={(e) => e.key === 'Escape' && closeModal()}>
				<button class="close-button" onclick={closeModal}>×</button>
				
				<div class="modal-header">
					<div class="day-icon">{selectedDay.icon}</div>
					<h2>¡Día {selectedDay.day}!</h2>
				</div>

				<div class="modal-body">
					<h3>{selectedDay.reward}</h3>
					<p>¡Felicidades! Has descubierto la sorpresa del día {selectedDay.day} de octubre.</p>
					
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
		background: linear-gradient(135deg, #FFF2EF 0%, #FFDBB6 50%, #F7A5A5 100%);
		padding: 2rem 1rem;
	}

	.controls {
		text-align: center;
		margin-bottom: 2rem;
	}

	.test-toggle {
		background: #5D688A;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 25px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 8px rgba(93, 104, 138, 0.3);
	}

	.test-toggle:hover {
		background: #F7A5A5;
		transform: translateY(-2px);
		box-shadow: 0 6px 12px rgba(93, 104, 138, 0.4);
	}

	.test-toggle.active {
		background: #F7A5A5;
		animation: pulse 2s infinite;
	}

	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(93, 104, 138, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.modal-content {
		background: white;
		border-radius: 16px;
		padding: 2rem;
		max-width: 400px;
		width: 100%;
		position: relative;
		box-shadow: 0 20px 40px rgba(93, 104, 138, 0.3);
		animation: modalSlideIn 0.3s ease-out;
	}

	.close-button {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 1.5rem;
		color: #5D688A;
		cursor: pointer;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s;
	}

	.close-button:hover {
		background-color: #FFF2EF;
	}

	.modal-header {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.day-icon {
		font-size: 3rem;
		margin-bottom: 0.5rem;
	}

	.modal-header h2 {
		color: #5D688A;
		font-size: 1.8rem;
		margin: 0;
		font-weight: bold;
	}

	.modal-body {
		text-align: center;
		margin-bottom: 1.5rem;
	}

	.modal-body h3 {
		color: #F7A5A5;
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.modal-body p {
		color: #5D688A;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.reward-content {
		background: #FFF2EF;
		border-radius: 12px;
		padding: 1rem;
		margin-top: 1rem;
	}

	.reward-content p {
		color: #5D688A;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.reward-box {
		background: #FFDBB6;
		border: 2px solid #F7A5A5;
		border-radius: 8px;
		padding: 1rem;
		font-weight: bold;
		color: #5D688A;
		font-size: 1.1rem;
	}

	.modal-footer {
		text-align: center;
	}

	.close-btn {
		background: #5D688A;
		color: white;
		border: none;
		padding: 0.75rem 2rem;
		border-radius: 25px;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.2s;
	}

	.close-btn:hover {
		background: #F7A5A5;
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
		}

		.day-icon {
			font-size: 2.5rem;
		}

		.modal-header h2 {
			font-size: 1.5rem;
		}
	}
</style> 