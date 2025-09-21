import type GeoJSON from 'geojson';

interface RealtyObject {
    id: number;
    name: string;
    description: string;
    price: number;
    location: string;
    geometry: GeoJSON.Point;

}

export type { RealtyObject };