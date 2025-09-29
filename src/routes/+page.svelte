<script lang="ts">
  import { onMount } from "svelte";

  let mounted = false;
  let modalOpen = false;
  let currentImageIndex = 0;
  let loadedImages: number[] = [];
  let imageRefs: HTMLElement[] = [];
  let loadingProgress = 0;
  let imageLoadErrors: number[] = [];

  // Array de imágenes disponibles
  const images = [
    "image-24.JPG",
    "image-25.JPG",
    "image-19.JPG",
    "image-32.JPG",
    "image-23.JPG",
    "image-6.jpg",
    "image-34.jpg",
    "image-3.JPG",
    "image-7.JPG",
    "image-1.jpg",
    "image-33.JPG",
    "image-5.JPG",
    "image-4.jpg",
    "image-8.JPG",
    "image-10.jpg",
    "image-11.jpg",
    "image-12.jpg",
    "image-14.JPG",
    "image-15.jpg",
    "image-16.JPG",
    "image-17.JPG",
    "image-18.JPG",
    "image-20.JPG",
    "image-21.jpg",
    "image-22.JPG",
    "image-26.JPG",
    "image-27.JPG",
    "image-28.jpg",
    "image-29.jpg",
    "image-30.jpg",
    "image-31.jpg",
  ];

  onMount(() => {
    mounted = true;
    document.addEventListener("keydown", handleKeydown);
    
    // Cargar las primeras 6 imágenes inmediatamente para una mejor experiencia inicial
    const initialLoadCount = Math.min(6, images.length);
    for (let i = 0; i < initialLoadCount; i++) {
      if (!loadedImages.includes(i)) {
        loadedImages = [...loadedImages, i];
      }
    }
    loadingProgress = Math.round((loadedImages.length / images.length) * 100);
    
    // Configurar Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            if (!loadedImages.includes(index)) {
              loadedImages = [...loadedImages, index];
              loadingProgress = Math.round((loadedImages.length / images.length) * 100);
              console.log(`Imagen ${index} marcada para cargar. Total cargadas: ${loadedImages.length}`);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    // Observar todas las imágenes después de un pequeño delay para asegurar que estén en el DOM
    setTimeout(() => {
      imageRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      observer.disconnect();
    };
  });

  function openModal(index: number) {
    currentImageIndex = index;
    modalOpen = true;
    document.body.style.overflow = "hidden";
    
    // Precargar imágenes adyacentes para el modal
    preloadModalImages(index);
  }

  function preloadModalImages(currentIndex: number) {
    // Precargar imagen anterior y siguiente
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    
    [prevIndex, currentIndex, nextIndex].forEach(index => {
      if (!loadedImages.includes(index)) {
        const img = new Image();
        img.src = `/images/${images[index]}`;
        loadedImages = [...loadedImages, index];
      }
    });
  }

  function closeModal() {
    modalOpen = false;
    document.body.style.overflow = "auto";
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    preloadModalImages(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    preloadModalImages(currentImageIndex);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!modalOpen) return;

    switch (event.key) {
      case "Escape":
        closeModal();
        break;
      case "ArrowLeft":
        prevImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
    }
  }

  function handleMouseEnter(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#bd7d62";
  }

  function handleMouseLeave(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#d49270";
  }

  function handleMouseEnter2(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#f4d6b4";
  }

  function handleMouseLeave2(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#f7ebdb";
  }

  function handleMouseEnter3(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#d8b186";
  }

  function handleMouseLeave3(event: MouseEvent) {
    (event.target as HTMLElement).style.backgroundColor = "#d49270";
  }

  function handleImageError(index: number) {
    if (!imageLoadErrors.includes(index)) {
      imageLoadErrors = [...imageLoadErrors, index];
    }
    console.warn(`Error cargando imagen ${index + 1}: ${images[index]}`);
  }
</script>

<svelte:head>
  <title>¡Bienvenido a Octubre! - Calendario de Adviento</title>
  <meta
    name="description"
    content="Celebra octubre con nuestro calendario de adviento especial para aniversarios y cumpleaños"
  />
</svelte:head>

<main class="min-h-screen" style="background-color: #f7ebdb;">
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to right, rgba(244, 214, 180, 0.3), rgba(216, 177, 134, 0.3));"
    ></div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6" style="color: #bd7d62;">
          <span
            class="bg-gradient-to-r bg-clip-text text-transparent"
            style="background-image: linear-gradient(to right, #d49270, #bd7d62);"
          >
            ¡Se llegó octubre!
          </span>
        </h1>
        <p
          class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          style="color: #d49270;"
        >
          Un mes lleno de regalos y momentos especiales. Descubre la alegría de
          cada día con una sorpresa.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/advent-calendar"
            class="inline-flex text-[#f7ebdb] bg-[#d49270] hover:bg-[#bd7d62] items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Ir al Calendario
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-20" style="background-color: rgba(244, 214, 180, 0.3);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4" style="color: #bd7d62;">
          ¿Por qué octubre es especial?
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: #d49270;">
          Porque no solo celebramos nuestro aniversario, sino que también
          celebramos tu cumpleaños.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Aniversarios -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div
              class="w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-105"
              style="background-color: #d49270;"
            >
              <svg
                class="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #f7ebdb;"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div
              class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
              style="background-color: #d8b186;"
            >
              <span class="font-bold text-sm" style="color: #bd7d62;">💕</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4" style="color: #bd7d62;">
            Aniversario
          </h3>
          <p class="leading-relaxed" style="color: #d49270;">
            El 18 de octubre celebramos nuestro aniversario, 8 años llenos de
            muchos momentos, buenos y malos pero al final siempre juntos,
            luchando por avanzar y construir nuestro hogar.
          </p>
        </div>

        <!-- Cumpleaños -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div
              class="w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-105"
              style="background-color: #bd7d62;"
            >
              <svg
                class="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #f7ebdb;"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                ></path>
              </svg>
            </div>
            <div
              class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
              style="background-color: #f4d6b4;"
            >
              <span class="font-bold text-sm" style="color: #bd7d62;">🎂</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4" style="color: #bd7d62;">
            Cumpleaños
          </h3>
          <p class="leading-relaxed" style="color: #d49270;">
            Tú cumpleaños también es un día muy especial para celebrar, con
            familia y amigos espero que pases un día increible y lo atesores
            mucho. Felices 25 años mi amor.
          </p>
        </div>

        <!-- Octubre -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div
              class="w-32 h-32 mx-auto rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-105"
              style="background-color: #d8b186;"
            >
              <svg
                class="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #bd7d62;"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div
              class="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
              style="background-color: #d49270;"
            >
              <span class="font-bold text-sm" style="color: #f7ebdb;">🍂</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-4" style="color: #bd7d62;">
            Sorpresas
          </h3>
          <p class="leading-relaxed" style="color: #d49270;">
            No solo serán estas fechas sino que cada día te espera una sorpresa,
            la espera valdrá la pena y ahora te daras cuenta de porque tanto
            misterio.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Image Gallery Section -->
  <section class="py-20" style="background-color: rgba(216, 177, 134, 0.2);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4" style="color: #bd7d62;">
          Algunos momentos de octubre en años anteriores
        </h2>
        <p class="text-xl max-w-3xl mx-auto" style="color: #d49270;">
          Cada imagen cuenta una historia, cada momento merece ser celebrado
        </p>
      </div>

      <!-- Indicador de progreso de carga -->
      {#if loadingProgress < 100}
        <div class="mb-8 max-w-md mx-auto">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-medium" style="color: #d49270;">Cargando recuerdos...</span>
            <span class="text-sm font-medium" style="color: #d49270;">{loadingProgress}%</span>
          </div>
          <div class="w-full h-2 rounded-full" style="background-color: rgba(212, 146, 112, 0.2);">
            <div class="h-full rounded-full transition-all duration-500" style="background: linear-gradient(to right, #d49270, #bd7d62); width: {loadingProgress}%"></div>
          </div>
        </div>
      {/if}

      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
      >
        <!-- Imágenes reales -->
         {#each images as image, index}
           <div
             class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
             on:click={() => openModal(index)}
             on:keydown={(e) => e.key === "Enter" && openModal(index)}
             role="button"
             tabindex="0"
             aria-label="Ver imagen {index + 1} en grande"
             data-index={index}
             bind:this={imageRefs[index]}
           >
             <div class="aspect-square relative">
               <div
                 class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
               >
                 {#if imageLoadErrors.includes(index)}
                   <!-- Estado de error -->
                   <div class="w-full h-full flex items-center justify-center" style="background: linear-gradient(135deg, #f4d6b4, #d8b186);">
                     <div class="text-center">
                       <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #bd7d62;">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                       </svg>
                       <div class="text-xs font-medium" style="color: #bd7d62;">Error al cargar</div>
                     </div>
                   </div>
                 {:else if loadedImages.includes(index)}
                   <img
                     src="/images/{image}"
                     alt="Momento especial {index + 1}"
                     class="w-full h-full object-cover"
                     on:error={() => handleImageError(index)}
                   />
                 {:else}
                   <!-- Placeholder mientras carga -->
                   <div class="w-full h-full flex items-center justify-center relative" style="background: linear-gradient(135deg, #f4d6b4, #d8b186);">
                     <div class="text-center">
                       <svg class="w-12 h-12 mx-auto mb-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: #bd7d62;">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                       </svg>
                       <div class="text-xs font-medium" style="color: #bd7d62;">Cargando...</div>
                     </div>
                     <!-- Barra de progreso sutil -->
                     <div class="absolute bottom-2 left-2 right-2 h-1 rounded-full" style="background-color: rgba(189, 125, 98, 0.2);">
                       <div class="h-full rounded-full transition-all duration-500" style="background-color: #bd7d62; width: {loadingProgress}%"></div>
                     </div>
                   </div>
                 {/if}
               </div>
             </div>
           </div>
         {/each}
      </div>
    </div>
  </section>

  <!-- Call to Action Section -->
  <section class="py-20" style="background-color: #bd7d62;">
    <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold mb-6" style="color: #f7ebdb;">
        ¿Listo para comenzar tu aventura?
      </h2>
      <p class="text-xl mb-8" style="color: #f4d6b4;">
        Descubre la magia de cada día con nuestro calendario de adviento
        personalizado. Cada día trae una nueva sorpresa y una nueva razón para
        sonreír.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/advent-calendar"
          class="inline-flex text-[#bd7d62] bg-[#f7ebdb] hover:bg-[#f4d6b4] items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
          Comenzar Ahora
        </a>
      </div>
    </div>
  </section>

  <!-- Modal de Imagen -->
  {#if modalOpen}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      on:click={closeModal}
      on:keydown={handleKeydown}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes"
      tabindex="-1"
    >
      <div
        class="relative max-w-7xl max-h-full p-4"
        on:click|stopPropagation
        role="presentation"
      >
        <!-- Botón de cerrar -->
        <button
          class="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          on:click={closeModal}
          aria-label="Cerrar visor de imágenes"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Botón anterior -->
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          on:click={prevImage}
          aria-label="Imagen anterior"
        >
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <!-- Botón siguiente -->
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors"
          on:click={nextImage}
          aria-label="Imagen siguiente"
        >
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        <!-- Imagen -->
        <img
          src="/images/{images[currentImageIndex]}"
          alt="Imagen {currentImageIndex + 1}"
          class="max-w-full max-h-full object-contain"
        />

        <!-- Contador -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg"
        >
          {currentImageIndex + 1} / {images.length}
        </div>

        <!-- Indicadores de navegación -->
        <div
          class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          {#each images as _, index}
            <button
              class="w-3 h-3 rounded-full transition-colors {index ===
              currentImageIndex
                ? 'bg-white'
                : 'bg-white bg-opacity-50'}"
              on:click={() => (currentImageIndex = index)}
              aria-label="Ir a imagen {index + 1}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  /* Animaciones suaves */
  .group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
  }

  /* Transiciones suaves para todos los elementos interactivos */
  * {
    transition: all 0.3s ease;
  }
</style>
