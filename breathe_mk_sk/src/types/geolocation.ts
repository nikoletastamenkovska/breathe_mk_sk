import { LatLng } from "leaflet";

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface LocationState {
    loaded: boolean;
    coordinates: Coordinates;
    error?: {
        code: number;
        message: string;
    };
}

export interface TransitionalDialogProps {
    position: LatLng | null
}