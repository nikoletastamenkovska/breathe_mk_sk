import { Button, Grid } from "@mui/material";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import useGeolocation from "../../hooks/useGeolocation";
import {
  createCustomClusterIcon,
  greenIcon,
  orangeIcon,
  personPinIcon,
  redIcon,
} from "./icons";
import { markers } from "./markers";
import { LOCAL_STORAGE_KEY_MAP_PERMISSION } from "../../LS/localStorageKeys";

const Map: React.FC = () => {
  const [requestedPermission, setRequestedPermission] = React.useState(false);
  const location = useGeolocation(requestedPermission);
  const ZOOM_LEVEL = 16;
  const skopjeCenter: [number, number] = [41.9973, 21.428];

  React.useEffect(() => {
    const storedPermission = localStorage.getItem(
      LOCAL_STORAGE_KEY_MAP_PERMISSION
    );
    setRequestedPermission(storedPermission === "true");
  }, []);

  const handlePermissionRequest = () => {
    setRequestedPermission(true);
    localStorage.setItem(LOCAL_STORAGE_KEY_MAP_PERMISSION, "true");
  };

  return (
    <>
      {requestedPermission && location.loaded && !location.error ? (
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <MapContainer
              className="height-fixer"
              center={
                location.loaded && !location.error
                  ? [location.coordinates.lat, location.coordinates.lng]
                  : skopjeCenter
              }
              zoom={ZOOM_LEVEL}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {location.loaded && !location.error ? (
                <Marker
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                  icon={personPinIcon}
                >
                  <Popup>You are here</Popup>
                </Marker>
              ) : (
                ""
              )}
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
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                className="default-location-button"
                onClick={handlePermissionRequest}
              >
                Showing default location. Grant Geolocation Permission to see
                Markers.
              </Button>
              <MapContainer
                className="height-fixer"
                center={skopjeCenter}
                zoom={ZOOM_LEVEL}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Map;
