import { 
  generateProperties, 
  generatePropertiesGrid, 
  generatePropertiesClusters, 
  generateBoundsAroundCenter,
  type PropertyGeneratorOptions 
} from './property-generator';

// Ejemplo 1: Generar propiedades aleatorias en Bogotá
export function generateBogotaProperties(count: number = 20) {
  const bogotaBounds = {
    north: 4.75,
    east: -74.00,
    south: 4.55,
    west: -74.15
  };

  return generateProperties({
    bounds: bogotaBounds,
    count,
    priceRange: { min: 100000, max: 2000000 },
    propertyTypes: ['Casa', 'Apartamento', 'Oficina'],
    includeDetails: true
  });
}

// Ejemplo 2: Generar propiedades en cuadrícula para Medellín
export function generateMedellinGrid(count: number = 25) {
  const medellinBounds = {
    north: 6.35,
    east: -75.50,
    south: 6.15,
    west: -75.70
  };

  return generatePropertiesGrid({
    bounds: medellinBounds,
    count,
    priceRange: { min: 80000, max: 1500000 },
    propertyTypes: ['Casa', 'Apartamento']
  });
}

// Ejemplo 3: Generar propiedades en clusters alrededor de puntos específicos
export function generateClusterProperties() {
  const clusterCenters = [
    { lat: 4.65, lng: -74.05 }, // Centro de Bogotá
    { lat: 4.70, lng: -74.10 }, // Norte de Bogotá
    { lat: 4.60, lng: -74.00 }  // Sur de Bogotá
  ];

  return generatePropertiesClusters(clusterCenters, {
    count: 30,
    priceRange: { min: 120000, max: 1800000 },
    propertyTypes: ['Casa', 'Apartamento', 'Oficina'],
    includeDetails: true
  });
}

// Ejemplo 4: Generar propiedades alrededor de un punto específico
export function generatePropertiesAroundPoint(
  center: { lat: number; lng: number },
  count: number = 10,
  radius: number = 0.01
) {
  const bounds = generateBoundsAroundCenter(center, radius);
  
  return generateProperties({
    bounds,
    count,
    priceRange: { min: 50000, max: 1000000 },
    includeDetails: true
  });
}

// Ejemplo 5: Generar propiedades de lujo
export function generateLuxuryProperties(count: number = 15) {
  const luxuryBounds = {
    north: 4.75,
    east: -74.00,
    south: 4.65,
    west: -74.10
  };

  return generateProperties({
    bounds: luxuryBounds,
    count,
    priceRange: { min: 500000, max: 5000000 },
    propertyTypes: ['Penthouse', 'Villa', 'Casa de Campo'],
    includeDetails: true
  });
}

// Ejemplo 6: Generar propiedades económicas
export function generateEconomicProperties(count: number = 20) {
  const economicBounds = {
    north: 4.70,
    east: -74.15,
    south: 4.60,
    west: -74.20
  };

  return generateProperties({
    bounds: economicBounds,
    count,
    priceRange: { min: 30000, max: 300000 },
    propertyTypes: ['Apartamento', 'Casa'],
    includeDetails: true
  });
}

// Función helper para generar propiedades según el tipo de zona
export function generatePropertiesByZone(
  zoneType: 'residential' | 'commercial' | 'luxury' | 'economic',
  count: number = 15
) {
  const zones = {
    residential: {
      bounds: { north: 4.72, east: -74.05, south: 4.62, west: -74.12 },
      priceRange: { min: 80000, max: 1200000 },
      propertyTypes: ['Casa', 'Apartamento']
    },
    commercial: {
      bounds: { north: 4.68, east: -74.02, south: 4.64, west: -74.08 },
      priceRange: { min: 150000, max: 3000000 },
      propertyTypes: ['Oficina', 'Local Comercial', 'Apartamento']
    },
    luxury: {
      bounds: { north: 4.75, east: -74.00, south: 4.65, west: -74.10 },
      priceRange: { min: 500000, max: 5000000 },
      propertyTypes: ['Penthouse', 'Villa', 'Casa de Campo']
    },
    economic: {
      bounds: { north: 4.70, east: -74.15, south: 4.60, west: -74.20 },
      priceRange: { min: 30000, max: 300000 },
      propertyTypes: ['Apartamento', 'Casa']
    }
  };

  const zone = zones[zoneType];
  
  return generateProperties({
    bounds: zone.bounds,
    count,
    priceRange: zone.priceRange,
    propertyTypes: zone.propertyTypes,
    includeDetails: true
  });
} 