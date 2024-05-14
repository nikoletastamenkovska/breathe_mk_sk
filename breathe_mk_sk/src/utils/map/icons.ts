import L, { DivIcon, point } from "leaflet";

export const redIcon = L.icon({
    iconUrl: "/leaflet-icons/leaf-red.png",
    shadowUrl: "leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, 76],
});

export const orangeIcon = L.icon({
    iconUrl: "/leaflet-icons/leaf-orange.png",
    shadowUrl: "/leaflet-icons/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, 76],
});

export const greenIcon = L.icon({
    iconUrl: "/leaflet-icons/leaf-green.png",
    shadowUrl: "/leaflet-icons/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, 76],
});

export const createCustomClusterIcon = (cluster: any) => {
    return new DivIcon({
        html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
        className: 'custom-marker-cluster',
        iconSize: point(33, 33, true)
    })
}
