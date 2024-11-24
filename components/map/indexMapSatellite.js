import dynamic from 'next/dynamic';

// Dynamically load the map-sattelite component with SSR disabled

export const MapSatelliteComponent = dynamic(() => import('./map-satellite'), { 
    ssr: false 
});