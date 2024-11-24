import dynamic from 'next/dynamic';

// Dynamically load the map-dealer component with SSR disabled

export const MapComponent = dynamic(() => import('./map-dealer'), { 
    ssr: false 
});

export const MapComponentDrone = dynamic(() => import('./map-drone'), { 
    ssr: false 
});
