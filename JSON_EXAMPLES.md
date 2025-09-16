# 📅 Ejemplos de Personalización del JSON

Ahora que el calendario usa datos del archivo `data.json`, puedes personalizar completamente cada día. Aquí tienes ejemplos de cómo hacerlo:

## 🎨 **Estructura del JSON**

```json
{
    "data": [
        {
            "content": "Contenido que se muestra en el modal",
            "reward": "Título de la recompensa",
            "backgroundColor": "#d49270",
            "icon": "heart-line"
        }
    ]
}
```

## 🎵 **Ejemplos Temáticos Sweetener**

### Día Especial (Aniversario)
```json
{
    "content": "¡8 años juntos! 💕\n\nHoy celebramos nuestro aniversario. Cada día a tu lado es una bendición. Te amo más que las palabras pueden expresar.",
    "reward": "Aniversario Especial",
    "backgroundColor": "#d49270",
    "icon": "heart-fill"
}
```

### Día de Cumpleaños
```json
{
    "content": "¡Feliz cumpleaños, mi amor! 🎂\n\nQue este nuevo año de vida esté lleno de alegría, amor y todas las cosas hermosas que mereces.",
    "reward": "Cumpleaños de mi Amor",
    "backgroundColor": "#f4d6b4",
    "icon": "cake-2-fill"
}
```

### Día Romántico
```json
{
    "content": "Una cita especial 💕\n\nTe invito a una cena romántica en nuestro lugar favorito. Solo tú y yo, como debe ser.",
    "reward": "Cita Romántica",
    "backgroundColor": "#d8b186",
    "icon": "restaurant-fill"
}
```

### Día de Aventura
```json
{
    "content": "¡Aventura juntos! 🌟\n\nHoy exploraremos un lugar nuevo. La vida es una aventura y es mejor vivirla contigo.",
    "reward": "Día de Aventura",
    "backgroundColor": "#f7ebdb",
    "icon": "compass-2-fill"
}
```

## 🎨 **Paleta de Colores Sweetener**

Usa estos colores para mantener la estética del álbum:

- **Cream**: `#f7ebdb` - Para días suaves y románticos
- **Peach**: `#f4d6b4` - Para días especiales y celebraciones
- **Tan**: `#d8b186` - Para días de aventura y diversión
- **Brown**: `#d49270` - Para días importantes y aniversarios
- **Dark**: `#bd7d62` - Para días muy especiales

## 🎯 **Iconos Disponibles (Iconify Mingcute)**

Puedes usar cualquier icono de la librería Mingcute. Algunos ejemplos:

- `heart-fill` - Corazón lleno
- `heart-line` - Corazón línea
- `cake-2-fill` - Pastel
- `gift-fill` - Regalo
- `star-fill` - Estrella
- `flower-fill` - Flor
- `music-2-fill` - Música
- `camera-fill` - Cámara
- `book-fill` - Libro
- `coffee-fill` - Café
- `restaurant-fill` - Restaurante
- `compass-2-fill` - Brújula
- `plane-fill` - Avión
- `car-fill` - Coche
- `home-4-fill` - Casa

## 📝 **Consejos para el Contenido**

1. **Usa emojis** para hacer el contenido más visual
2. **Incluye saltos de línea** (`\n`) para mejor formato
3. **Sé creativo** con las recompensas
4. **Mantén la coherencia** con la paleta de colores
5. **Personaliza** cada día según tus recuerdos y planes

## 🔄 **Cómo Actualizar**

1. Edita el archivo `src/lib/assets/data.json`
2. Cambia el contenido, recompensa, color o icono
3. Guarda el archivo
4. El calendario se actualizará automáticamente

¡Ahora tienes control total sobre cada día del calendario! 🎵✨
