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
