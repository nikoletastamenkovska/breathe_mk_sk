import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
  createCustomClusterIcon,
  greenIcon,
  orangeIcon,
  redIcon,
} from "./icons";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MarkerData } from "../../types/map";
import useGeolocation from "../../hooks/useGeolocation";

const Map: React.FC = () => {
  const [approved, setApproved] = React.useState(false);
  const location = useGeolocation();
  const ZOOM_LEVEL = 50;

  //do I need interactions with the map?! INVESTIGATE THIS!!!
  const mapRef = React.useRef<L.Map | null>(null);

  const skopjeCenter: [number, number] = [41.9973, 21.428];

  //markers for polution
  const markers: MarkerData[] = [
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
    {
      geocode: [41.9874, 21.44],
      popUp: "Hello, I am pop up 4",
      pollution: "high",
    },
    {
      geocode: [41.9745, 21.45644],
      popUp: "Hello, I am pop up 3",
      pollution: "medium",
    },
  ];

  React.useEffect(() => {
    if (mapRef.current && location.loaded && !location.error) {
      mapRef.current.setView(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL
      );
    } else mapRef.current?.setView(skopjeCenter, ZOOM_LEVEL);
  }, [location]);

  return (
    <>
      {(location.loaded && !location.error) || !("geolocation" in navigator) ? (
        <MapContainer
          className="height-fixer"
          center={
            location.loaded && !location.error
              ? [location.coordinates.lat, location.coordinates.lng]
              : skopjeCenter
          }
          zoom={ZOOM_LEVEL}
          scrollWheelZoom={true}
          ref={mapRef}
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
      ) : (
        <p>Geolocation not available or denied. Showing default location.</p>
      )}
    </>
  );
};

export default Map;
