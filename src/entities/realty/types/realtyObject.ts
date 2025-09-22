import type GeoJSON from 'geojson';

interface RealtyObject {
    id: number;
    name: string;
    description: string;
    price: number;
    location: string;
    geometry: GeoJSON.Point & { coordinates: [number, number] };

}

export type { RealtyObject };