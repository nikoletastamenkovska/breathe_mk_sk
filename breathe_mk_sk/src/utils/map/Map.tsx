import { Button, Grid } from "@mui/material";
import L, { LatLng } from "leaflet";
import "leaflet-control-geocoder";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { LOCAL_STORAGE_KEY_MAP_PERMISSION } from "../../LS/localStorageKeys";
import TransitionalDialog from "../../components/TransitionalDialog";
import BreathingLoader from "../../components/loader/BreathingLoader";
import useGeolocation from "../../hooks/useGeolocation";
import LocationMarker from "./LocationMarker";
import {
  createCustomClusterIcon,
  greenIcon,
  orangeIcon,
  personPinIcon,
  questionMarkIcon,
  redIcon,
} from "./icons";
import { markers } from "./markers";

const Map: React.FC = () => {
  const [requestedPermission, setRequestedPermission] = React.useState(false);
  const [position, setPosition] = React.useState<LatLng | null>(null);
  const [address, setAddress] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const location = useGeolocation(requestedPermission);
  const ZOOM_LEVEL = 13;
  const skopjeCenter: [number, number] = [41.9973, 21.428];

  React.useEffect(() => {
    const storedPermission = localStorage.getItem(
      LOCAL_STORAGE_KEY_MAP_PERMISSION
    );
    setRequestedPermission(storedPermission === "true");
  }, []);

  React.useEffect(() => {
    if (position) {
      const geocoder = (L.Control as any).Geocoder.nominatim();
      geocoder.reverse(position, 18, (results: any) => {
        const r = results[0];
        console.log(r);

        if (r) {
          setAddress(r.name);
        }
      });
    }
  }, [position]);

  const handlePermissionRequest = () => {
    setRequestedPermission(true);
    localStorage.setItem(LOCAL_STORAGE_KEY_MAP_PERMISSION, "true");
  };

  const handleTileLoad = () => {
    setLoading(false);
  };

  const handleTileLoadStart = () => {
    setLoading(true);
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
              whenReady={() => setLoading(false)}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                eventHandlers={{
                  load: handleTileLoad,
                  loading: handleTileLoadStart,
                }}
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
              ) : null}
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
              <LocationMarker
                icon={questionMarkIcon}
                setPosition={setPosition}
              />
            </MapContainer>
            <TransitionalDialog position={position} address={address} />
          </Grid>
        </Grid>
      ) : (
        <>
          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <MapContainer
                className="height-fixer"
                center={skopjeCenter}
                zoom={ZOOM_LEVEL}
                scrollWheelZoom={true}
                whenReady={() => setLoading(false)}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  eventHandlers={{
                    load: handleTileLoad,
                    loading: handleTileLoadStart,
                  }}
                />
                <LocationMarker
                  icon={questionMarkIcon}
                  setPosition={setPosition}
                />
                <Button
                  variant="contained"
                  className="default-location-button"
                  onClick={handlePermissionRequest}
                >
                  Showing default location. Grant Geolocation Permission to see
                  your location.
                </Button>
              </MapContainer>
              <TransitionalDialog position={position} address={address} />
            </Grid>
          </Grid>
        </>
      )}
      {loading && (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <BreathingLoader />
        </Grid>
      )}
    </>
  );
};

export default Map;
