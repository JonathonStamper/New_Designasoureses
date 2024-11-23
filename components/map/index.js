import dynamic from 'next/dynamic';

export const MapComponent = dynamic(() => import('./map-dealer'), { ssr: false, loadableGenerated: { webpack: [ [require.resolve('react-leaflet')] ], modules: ['react-leaflet'] } }); 