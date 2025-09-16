<script lang="ts">
	// Página de prueba para verificar que Tailwind funcione
</script>

<svelte:head>
	<title>Test Tailwind</title>
</svelte:head>

<div class="p-8 min-h-screen bg-gray-100">
	<div class="max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">
			🧪 Test de Tailwind CSS
		</h1>
		
		<!-- Test de colores básicos de Tailwind -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Colores Básicos de Tailwind</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div class="bg-red-500 p-4 rounded text-white text-center">Red</div>
				<div class="bg-blue-500 p-4 rounded text-white text-center">Blue</div>
				<div class="bg-green-500 p-4 rounded text-white text-center">Green</div>
				<div class="bg-yellow-500 p-4 rounded text-white text-center">Yellow</div>
			</div>
		</div>

		<!-- Test de colores Sweetener -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Colores Sweetener</h2>
			<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
				<div class="bg-sweetener-cream p-4 rounded text-center border">
					<p class="font-semibold text-sweetener-dark">Cream</p>
				</div>
				<div class="bg-sweetener-peach p-4 rounded text-center border">
					<p class="font-semibold text-sweetener-dark">Peach</p>
				</div>
				<div class="bg-sweetener-tan p-4 rounded text-center border">
					<p class="font-semibold text-sweetener-dark">Tan</p>
				</div>
				<div class="bg-sweetener-brown p-4 rounded text-center border">
					<p class="font-semibold text-sweetener-cream">Brown</p>
				</div>
				<div class="bg-sweetener-dark p-4 rounded text-center border">
					<p class="font-semibold text-sweetener-cream">Dark</p>
				</div>
			</div>
		</div>

		<!-- Test de utilidades -->
		<div class="mb-8">
			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Utilidades de Tailwind</h2>
			<div class="space-y-4">
				<div class="bg-white p-4 rounded-lg shadow-md">
					<p class="text-lg">Este es un párrafo con <span class="font-bold text-blue-600">texto en negrita y azul</span></p>
				</div>
				<div class="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-lg text-white">
					<p class="text-lg">Gradiente de púrpura a rosa</p>
				</div>
				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
					Botón con hover
				</button>
			</div>
		</div>

		<!-- Estado -->
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<h3 class="text-xl font-semibold text-gray-800 mb-4">Estado del Sistema</h3>
			<div class="space-y-2">
				<p class="text-green-600">✅ Tailwind CSS está funcionando</p>
				<p class="text-green-600">✅ Colores básicos funcionan</p>
				<p class="text-green-600">✅ Colores Sweetener funcionan</p>
				<p class="text-green-600">✅ Utilidades funcionan</p>
			</div>
		</div>
	</div>
</div>
