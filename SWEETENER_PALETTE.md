# 🎵 Paleta de Colores Sweetener

Paleta de colores inspirada en el álbum "Sweetener" de Ariana Grande, configurada para Tailwind CSS.

## Colores Principales

| Color | Hex | RGB | Clase Tailwind |
|-------|-----|-----|----------------|
| Cream | `#f7ebdb` | (247,235,219) | `bg-sweetener-cream` |
| Peach | `#f4d6b4` | (244,214,180) | `bg-sweetener-peach` |
| Tan | `#d8b186` | (216,177,134) | `bg-sweetener-tan` |
| Brown | `#d49270` | (212,146,112) | `bg-sweetener-brown` |
| Dark | `#bd7d62` | (189,125,98) | `bg-sweetener-dark` |

## Escala de Colores

La paleta incluye una escala completa del 50 al 900:

- `sweetener-50` a `sweetener-900`
- `primary-50` a `primary-900` (alias)

## Gradientes Disponibles

- `bg-sweetener-gradient` - Gradiente completo de todos los colores
- `bg-sweetener-soft` - Gradiente suave (cream a peach)
- `bg-sweetener-warm` - Gradiente cálido (peach a brown)

## Sombras Personalizadas

- `shadow-sweetener` - Sombra suave
- `shadow-sweetener-lg` - Sombra grande
- `shadow-sweetener-xl` - Sombra extra grande

## Animaciones

- `animate-sweetener-pulse` - Pulso suave
- `animate-sweetener-bounce` - Rebote suave

## Ejemplos de Uso

### Botones
```html
<!-- Botón con color peach -->
<button class="bg-sweetener-peach text-sweetener-dark px-4 py-2 rounded-lg hover:bg-sweetener-tan transition-colors">
  Botón Peach
</button>

<!-- Botón con gradiente -->
<button class="bg-sweetener-gradient text-sweetener-dark px-4 py-2 rounded-lg hover:shadow-sweetener-lg transition-all">
  Botón Gradiente
</button>
```

### Cards
```html
<div class="bg-sweetener-cream p-6 rounded-lg shadow-sweetener border border-sweetener-peach">
  <h3 class="text-sweetener-dark text-xl font-semibold">Título</h3>
  <p class="text-sweetener-brown">Contenido de la card</p>
</div>
```

### Fondos
```html
<!-- Fondo con gradiente -->
<div class="bg-sweetener-gradient min-h-screen">
  <!-- Contenido -->
</div>

<!-- Fondo suave -->
<div class="bg-sweetener-soft p-8">
  <!-- Contenido -->
</div>
```

### Texto
```html
<h1 class="text-sweetener-dark text-4xl font-bold">Título Principal</h1>
<p class="text-sweetener-brown text-lg">Párrafo con color brown</p>
<span class="text-sweetener-cream">Texto claro sobre fondo oscuro</span>
```

## Demostración

Visita `/sweetener-palette` para ver una demostración completa de todos los colores y ejemplos de uso.

## Integración

La paleta está configurada en `tailwind.config.js` y lista para usar en cualquier componente Svelte del proyecto.

```javascript
// En tailwind.config.js
colors: {
  sweetener: {
    cream: '#f7ebdb',
    peach: '#f4d6b4',
    tan: '#d8b186',
    brown: '#d49270',
    dark: '#bd7d62',
    // ... más variaciones
  }
}
```
