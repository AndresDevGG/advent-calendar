<script lang="ts">
	// Página de demostración de la paleta de colores Sweetener
</script>

<svelte:head>
	<title>Paleta de Colores Sweetener - Ariana Grande</title>
</svelte:head>

<div class="p-8 min-h-screen" style="background-color: #f7ebdb;">
	<div class="max-w-6xl mx-auto">
		<h1 class="text-4xl font-bold mb-8 text-center" style="color: #bd7d62;">
			🎵 Paleta de Colores Sweetener 🎵
		</h1>
		<p class="text-center mb-12 text-lg" style="color: #d49270;">
			Inspirada en el álbum de Ariana Grande
		</p>

		<!-- Colores principales -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold mb-6" style="color: #bd7d62;">Colores Principales</h2>
			<div class="grid grid-cols-1 md:grid-cols-5 gap-4">
				<div class="p-6 rounded-lg shadow-lg text-center" style="background-color: #f7ebdb; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<div class="w-16 h-16 rounded-full mx-auto mb-3 border-2" style="background-color: #f7ebdb; border-color: #d8b186;"></div>
					<h3 class="font-semibold" style="color: #bd7d62;">Cream</h3>
					<p class="text-sm" style="color: #d49270;">#f7ebdb</p>
				</div>
				
				<div class="p-6 rounded-lg shadow-lg text-center" style="background-color: #f4d6b4; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<div class="w-16 h-16 rounded-full mx-auto mb-3 border-2" style="background-color: #f4d6b4; border-color: #d8b186;"></div>
					<h3 class="font-semibold" style="color: #bd7d62;">Peach</h3>
					<p class="text-sm" style="color: #d49270;">#f4d6b4</p>
				</div>
				
				<div class="p-6 rounded-lg shadow-lg text-center" style="background-color: #d8b186; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<div class="w-16 h-16 rounded-full mx-auto mb-3 border-2" style="background-color: #d8b186; border-color: #d49270;"></div>
					<h3 class="font-semibold" style="color: #bd7d62;">Tan</h3>
					<p class="text-sm" style="color: #d49270;">#d8b186</p>
				</div>
				
				<div class="p-6 rounded-lg shadow-lg text-center" style="background-color: #d49270; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<div class="w-16 h-16 rounded-full mx-auto mb-3 border-2" style="background-color: #d49270; border-color: #bd7d62;"></div>
					<h3 class="font-semibold" style="color: #f7ebdb;">Brown</h3>
					<p class="text-sm" style="color: #f7ebdb;">#d49270</p>
				</div>
				
				<div class="p-6 rounded-lg shadow-lg text-center" style="background-color: #bd7d62; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<div class="w-16 h-16 rounded-full mx-auto mb-3 border-2" style="background-color: #bd7d62; border-color: #d49270;"></div>
					<h3 class="font-semibold" style="color: #f7ebdb;">Dark</h3>
					<p class="text-sm" style="color: #f7ebdb;">#bd7d62</p>
				</div>
			</div>
		</div>

		<!-- Gradientes -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold mb-6" style="color: #bd7d62;">Gradientes</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="h-32 rounded-lg flex items-center justify-center" style="background: linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 25%, #d8b186 50%, #d49270 75%, #bd7d62 100%);">
					<p class="font-semibold" style="color: #bd7d62;">Gradiente Completo</p>
				</div>
				<div class="h-32 rounded-lg flex items-center justify-center" style="background: linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 100%);">
					<p class="font-semibold" style="color: #bd7d62;">Gradiente Suave</p>
				</div>
				<div class="h-32 rounded-lg flex items-center justify-center" style="background: linear-gradient(135deg, #f4d6b4 0%, #d8b186 50%, #d49270 100%);">
					<p class="font-semibold" style="color: #f7ebdb;">Gradiente Cálido</p>
				</div>
			</div>
		</div>

		<!-- Ejemplos de uso -->
		<div class="mb-12">
			<h2 class="text-2xl font-semibold mb-6" style="color: #bd7d62;">Ejemplos de Uso</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<!-- Botones -->
				<div class="p-6 rounded-lg shadow-lg" style="background-color: white; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<h3 class="text-lg font-semibold mb-4" style="color: #bd7d62;">Botones</h3>
					<div class="space-y-3">
						<button class="px-4 py-2 rounded-lg transition-colors" style="background-color: #f4d6b4; color: #bd7d62;">
							Botón Peach
						</button>
						<button class="px-4 py-2 rounded-lg transition-colors" style="background-color: #d49270; color: #f7ebdb;">
							Botón Brown
						</button>
						<button class="px-4 py-2 rounded-lg transition-all" style="background: linear-gradient(135deg, #f7ebdb 0%, #f4d6b4 25%, #d8b186 50%, #d49270 75%, #bd7d62 100%); color: #bd7d62;">
							Botón Gradiente
						</button>
					</div>
				</div>

				<!-- Cards -->
				<div class="p-6 rounded-lg shadow-lg" style="background-color: white; box-shadow: 0 4px 14px 0 rgba(189, 125, 98, 0.25);">
					<h3 class="text-lg font-semibold mb-4" style="color: #bd7d62;">Cards</h3>
					<div class="space-y-3">
						<div class="p-4 rounded-lg border" style="background-color: #f7ebdb; border-color: #f4d6b4;">
							<p style="color: #bd7d62;">Card con fondo cream</p>
						</div>
						<div class="p-4 rounded-lg" style="background-color: #d8b186;">
							<p style="color: #bd7d62;">Card con fondo tan</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Código de ejemplo -->
		<div class="p-6 rounded-lg" style="background-color: #bd7d62;">
			<h3 class="text-lg font-semibold mb-4" style="color: #f7ebdb;">Código de Ejemplo</h3>
			<pre class="text-sm overflow-x-auto" style="color: #f7ebdb;"><code>&lt;div class="bg-sweetener-gradient p-8 rounded-lg shadow-sweetener-lg"&gt;
  &lt;h1 class="text-sweetener-dark text-2xl font-bold"&gt;Título&lt;/h1&gt;
  &lt;p class="text-sweetener-brown"&gt;Contenido con colores Sweetener&lt;/p&gt;
  &lt;button class="bg-sweetener-peach text-sweetener-dark px-4 py-2 rounded-lg hover:bg-sweetener-tan transition-colors"&gt;
    Botón
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
		</div>
	</div>
</div>