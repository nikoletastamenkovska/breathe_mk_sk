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
  questionMarkIcon,
  redIcon,
} from "./icons";
import { markers } from "./markers";
import { LOCAL_STORAGE_KEY_MAP_PERMISSION } from "../../LS/localStorageKeys";
import LocationMarker from "./LocationMarker";
import { Icon } from "leaflet";

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
              scrollWheelZoom={false}
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
              <LocationMarker icon={questionMarkIcon} />
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1001,
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  fontSize: "70px",
                  padding: 0,
                  paddingLeft: "5px",
                  textAlign: "center",
                  fontWeight: "100",
                }}
                onClick={() => console.log("Button clicked")}
              >
                +
              </Button>
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
                scrollWheelZoom={false}
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
