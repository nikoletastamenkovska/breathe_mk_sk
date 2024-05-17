export interface MarkerData {
    geocode: [number, number];
    popUp: string;
    pollution: "low" | "medium" | "high";
}
export interface Cluster {
    getChildCount: () => number;
}