import L, { DivIcon, point } from "leaflet";
import { Cluster } from "../../types/map";

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

export const personPinIcon = L.icon({
    className: 'person-pin-icon',
    iconUrl: '/leaflet-icons/personPinIcon.png',
    iconSize: [50, 50],
})

export const questionMarkIcon = L.icon({
    className: 'person-pin-icon',
    iconUrl: '/leaflet-icons/questionMarkIcon.png',
    iconSize: [30, 30],
})

export const createCustomClusterIcon = (cluster: Cluster) => {
    return new DivIcon({
        html: `<div class='cluster-icon'>${cluster.getChildCount()}</div>`,
        className: 'custom-marker-cluster',
        iconSize: point(33, 33, true)
    })
}
