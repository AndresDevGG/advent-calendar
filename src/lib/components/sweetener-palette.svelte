<script lang="ts">
	// Componente de demostración de la paleta de colores Sweetener
</script>

<div class="p-8 min-h-screen" style="background-color: #f7ebdb;">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-4xl font-bold text-sweetener-dark mb-8 text-center">
			🎵 Paleta de Colores Sweetener 🎵
		</h1>
		<p class="text-center text-sweetener-brown mb-12 text-lg">
			Inspirada en el álbum de Ariana Grande
		</p>

		<!-- Colores principales -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold text-sweetener-dark mb-6">Colores Principales</h2>
			<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
				<div class="bg-sweetener-cream p-6 rounded-lg shadow-sweetener text-center">
					<div class="w-16 h-16 bg-sweetener-cream border-2 border-sweetener-tan rounded-full mx-auto mb-3"></div>
					<h3 class="font-semibold text-sweetener-dark">Cream</h3>
					<p class="text-sm text-sweetener-brown">#f7ebdb</p>
				</div>
				
				<div class="bg-sweetener-peach p-6 rounded-lg shadow-sweetener text-center">
					<div class="w-16 h-16 bg-sweetener-peach border-2 border-sweetener-tan rounded-full mx-auto mb-3"></div>
					<h3 class="font-semibold text-sweetener-dark">Peach</h3>
					<p class="text-sm text-sweetener-brown">#f4d6b4</p>
				</div>
				
				<div class="bg-sweetener-tan p-6 rounded-lg shadow-sweetener text-center">
					<div class="w-16 h-16 bg-sweetener-tan border-2 border-sweetener-brown rounded-full mx-auto mb-3"></div>
					<h3 class="font-semibold text-sweetener-dark">Tan</h3>
					<p class="text-sm text-sweetener-brown">#d8b186</p>
				</div>
				
				<div class="bg-sweetener-brown p-6 rounded-lg shadow-sweetener text-center">
					<div class="w-16 h-16 bg-sweetener-brown border-2 border-sweetener-dark rounded-full mx-auto mb-3"></div>
					<h3 class="font-semibold text-sweetener-cream">Brown</h3>
					<p class="text-sm text-sweetener-cream">#d49270</p>
				</div>
				
				<div class="bg-sweetener-dark p-6 rounded-lg shadow-sweetener text-center">
					<div class="w-16 h-16 bg-sweetener-dark border-2 border-sweetener-brown rounded-full mx-auto mb-3"></div>
					<h3 class="font-semibold text-sweetener-cream">Dark</h3>
					<p class="text-sm text-sweetener-cream">#bd7d62</p>
				</div>
			</div>
		</div>

		<!-- Escala de colores -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold text-sweetener-dark mb-6">Escala de Colores</h2>
			<div class="grid grid-cols-2 md:grid-cols-5 gap-2">
				{#each [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as shade}
					<div class="bg-sweetener-{shade} p-4 rounded text-center">
						<p class="text-sm font-medium {shade >= 500 ? 'text-sweetener-cream' : 'text-sweetener-dark'}">
							{shade}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Gradientes -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold text-sweetener-dark mb-6">Gradientes</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="bg-sweetener-gradient h-32 rounded-lg flex items-center justify-center">
					<p class="text-sweetener-dark font-semibold">Gradiente Completo</p>
				</div>
				<div class="bg-sweetener-soft h-32 rounded-lg flex items-center justify-center">
					<p class="text-sweetener-dark font-semibold">Gradiente Suave</p>
				</div>
				<div class="bg-sweetener-warm h-32 rounded-lg flex items-center justify-center">
					<p class="text-sweetener-cream font-semibold">Gradiente Cálido</p>
				</div>
			</div>
		</div>

		<!-- Ejemplos de uso -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold text-sweetener-dark mb-6">Ejemplos de Uso</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Botones -->
				<div class="bg-white p-6 rounded-lg shadow-sweetener">
					<h3 class="text-lg font-semibold text-sweetener-dark mb-4">Botones</h3>
					<div class="space-y-3">
						<button class="bg-sweetener-peach text-sweetener-dark px-4 py-2 rounded-lg hover:bg-sweetener-tan transition-colors">
							Botón Peach
						</button>
						<button class="bg-sweetener-brown text-sweetener-cream px-4 py-2 rounded-lg hover:bg-sweetener-dark transition-colors">
							Botón Brown
						</button>
						<button class="bg-sweetener-gradient text-sweetener-dark px-4 py-2 rounded-lg hover:shadow-sweetener-lg transition-all">
							Botón Gradiente
						</button>
					</div>
				</div>

				<!-- Cards -->
				<div class="bg-white p-6 rounded-lg shadow-sweetener">
					<h3 class="text-lg font-semibold text-sweetener-dark mb-4">Cards</h3>
					<div class="space-y-3">
						<div class="bg-sweetener-cream p-4 rounded-lg border border-sweetener-peach">
							<p class="text-sweetener-dark">Card con fondo cream</p>
						</div>
						<div class="bg-sweetener-tan p-4 rounded-lg">
							<p class="text-sweetener-dark">Card con fondo tan</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Animaciones -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold text-sweetener-dark mb-6">Animaciones</h2>
			<div class="flex justify-center space-x-8">
				<div class="bg-sweetener-peach w-16 h-16 rounded-full animate-sweetener-pulse flex items-center justify-center">
					<span class="text-sweetener-dark">💫</span>
				</div>
				<div class="bg-sweetener-brown w-16 h-16 rounded-full animate-sweetener-bounce flex items-center justify-center">
					<span class="text-sweetener-cream">🎵</span>
				</div>
			</div>
		</div>

		<!-- Código de ejemplo -->
		<div class="bg-sweetener-dark p-6 rounded-lg">
			<h3 class="text-lg font-semibold text-sweetener-cream mb-4">Código de Ejemplo</h3>
			<pre class="text-sweetener-cream text-sm overflow-x-auto"><code>&lt;div class="bg-sweetener-gradient p-8 rounded-lg shadow-sweetener-lg"&gt;
  &lt;h1 class="text-sweetener-dark text-2xl font-bold"&gt;Título&lt;/h1&gt;
  &lt;p class="text-sweetener-brown"&gt;Contenido con colores Sweetener&lt;/p&gt;
  &lt;button class="bg-sweetener-peach text-sweetener-dark px-4 py-2 rounded-lg hover:bg-sweetener-tan transition-colors"&gt;
    Botón
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
		</div>
	</div>
</div>
