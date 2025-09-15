export interface Property {
  id: number;
  lat: number;
  lng: number;
  title: string;
  price: string;
  type?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

export interface Bounds {
  north: number;
  east: number;
  south: number;
  west: number;
}

export interface PropertyGeneratorOptions {
  bounds: Bounds;
  count: number;
  priceRange?: { min: number; max: number };
  propertyTypes?: string[];
  includeDetails?: boolean;
}

/**
 * Genera propiedades aleatorias dentro de un área geográfica específica
 * @param options - Opciones para la generación de propiedades
 * @returns Array de propiedades generadas
 */
export function generateProperties(options: PropertyGeneratorOptions): Property[] {
  const {
    bounds,
    count,
    priceRange = { min: 50000, max: 500000 },
    propertyTypes = ['Casa', 'Apartamento', 'Oficina', 'Local Comercial'],
    includeDetails = false
  } = options;

  const properties: Property[] = [];
  const propertyNames = [
    'Villa del Sol', 'Residencial Los Pinos', 'Casa Blanca', 'Apartamento Central',
    'Oficina Ejecutiva', 'Local Premium', 'Casa Familiar', 'Loft Moderno',
    'Penthouse Luxury', 'Casa de Campo', 'Apartamento Vista', 'Oficina Corporativa',
    'Local Comercial', 'Casa Tradicional', 'Apartamento Estudio', 'Villa Mediterránea'
  ];

  for (let i = 0; i < count; i++) {
    // Generar coordenadas aleatorias dentro del bounds
    const lat = bounds.south + Math.random() * (bounds.north - bounds.south);
    const lng = bounds.west + Math.random() * (bounds.east - bounds.west);

    // Generar precio aleatorio
    const price = Math.floor(priceRange.min + Math.random() * (priceRange.max - priceRange.min));
    const formattedPrice = formatPrice(price);

    // Seleccionar tipo de propiedad aleatorio
    const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
    
    // Seleccionar nombre aleatorio
    const propertyName = propertyNames[Math.floor(Math.random() * propertyNames.length)];

    const property: Property = {
      id: i + 1,
      lat,
      lng,
      title: `${propertyName} ${i + 1}`,
      price: formattedPrice,
      type: propertyType
    };

    // Agregar detalles adicionales si se solicita
    if (includeDetails) {
      property.bedrooms = Math.floor(Math.random() * 5) + 1; // 1-5 habitaciones
      property.bathrooms = Math.floor(Math.random() * 4) + 1; // 1-4 baños
      property.area = Math.floor(Math.random() * 200) + 50; // 50-250 m²
    }

    properties.push(property);
  }

  return properties;
}

/**
 * Genera propiedades en una cuadrícula dentro del área especificada
 * @param options - Opciones para la generación de propiedades
 * @returns Array de propiedades generadas en cuadrícula
 */
export function generatePropertiesGrid(options: PropertyGeneratorOptions): Property[] {
  const { bounds, count, priceRange = { min: 50000, max: 500000 }, propertyTypes = ['Casa', 'Apartamento'] } = options;

  const properties: Property[] = [];
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);

  const latStep = (bounds.north - bounds.south) / (rows + 1);
  const lngStep = (bounds.east - bounds.west) / (cols + 1);

  let propertyIndex = 0;

  for (let row = 0; row < rows && propertyIndex < count; row++) {
    for (let col = 0; col < cols && propertyIndex < count; col++) {
      const lat = bounds.south + latStep * (row + 1) + (Math.random() - 0.5) * latStep * 0.5;
      const lng = bounds.west + lngStep * (col + 1) + (Math.random() - 0.5) * lngStep * 0.5;

      const price = Math.floor(priceRange.min + Math.random() * (priceRange.max - priceRange.min));
      const formattedPrice = formatPrice(price);
      
      const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

      properties.push({
        id: propertyIndex + 1,
        lat,
        lng,
        title: `Propiedad ${propertyIndex + 1}`,
        price: formattedPrice,
        type: propertyType
      });

      propertyIndex++;
    }
  }

  return properties;
}

/**
 * Genera propiedades en un patrón de cluster alrededor de puntos específicos
 * @param centers - Puntos centrales para los clusters
 * @param options - Opciones para la generación
 * @returns Array de propiedades generadas en clusters
 */
export function generatePropertiesClusters(
  centers: Array<{ lat: number; lng: number }>,
  options: Omit<PropertyGeneratorOptions, 'bounds'>
): Property[] {
  const properties: Property[] = [];
  const { count, priceRange = { min: 50000, max: 500000 }, propertyTypes = ['Casa', 'Apartamento'] } = options;

  const propertiesPerCluster = Math.ceil(count / centers.length);

  centers.forEach((center, clusterIndex) => {
    for (let i = 0; i < propertiesPerCluster; i++) {
      // Generar coordenadas aleatorias alrededor del centro del cluster
      const radius = 0.01; // Radio aproximado del cluster
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * radius;

      const lat = center.lat + distance * Math.cos(angle);
      const lng = center.lng + distance * Math.sin(angle);

      const price = Math.floor(priceRange.min + Math.random() * (priceRange.max - priceRange.min));
      const formattedPrice = formatPrice(price);
      
      const propertyType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

      properties.push({
        id: properties.length + 1,
        lat,
        lng,
        title: `Cluster ${clusterIndex + 1} - Propiedad ${i + 1}`,
        price: formattedPrice,
        type: propertyType
      });
    }
  });

  return properties.slice(0, count);
}

/**
 * Formatea un precio numérico a formato de moneda
 * @param price - Precio en número
 * @returns Precio formateado como string
 */
function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Genera bounds aleatorios alrededor de un punto central
 * @param center - Punto central { lat, lng }
 * @param radius - Radio en grados (aproximadamente 0.01 = 1km)
 * @returns Bounds generados
 */
export function generateBoundsAroundCenter(
  center: { lat: number; lng: number },
  radius: number = 0.01
): Bounds {
  return {
    north: center.lat + radius,
    east: center.lng + radius,
    south: center.lat - radius,
    west: center.lng - radius
  };
} 