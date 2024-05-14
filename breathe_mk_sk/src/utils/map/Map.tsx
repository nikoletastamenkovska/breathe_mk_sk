import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  createCustomClusterIcon,
  greenIcon,
  orangeIcon,
  redIcon,
} from "./icons";
import MarkerClusterGroup from "react-leaflet-cluster";

const Map = () => {
  //markers for polution
  const markers = [
    {
      geocode: [42.05573, 21.45104],
      popUp: "Hello, I am pop up 1",
      pollution: "low",
    },
    {
      geocode: [41.96339, 21.48624],
      popUp: "Hello, I am pop up 2",
      pollution: "medium",
    },
    {
      geocode: [41.98806, 21.45944],
      popUp: "Hello, I am pop up 3",
      pollution: "high",
    },
  ];

  return (
    <MapContainer
      className="height-fixer"
      center={[41.9981, 21.4254]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.geocode as [number, number]}
              icon={
                marker.pollution === "high"
                  ? redIcon
                  : marker.pollution === "medium"
                  ? orangeIcon
                  : greenIcon
              }
            >
              <Popup>{marker.popUp}</Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
