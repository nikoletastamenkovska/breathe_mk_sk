import React from "react";
import { LocationState } from "../types/geolocation";

export const useGeolocation = () => {
  const [location, setLocation] = React.useState<LocationState>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation((state) => ({
      ...state,
      loaded: true,
      coordinates: { lat: 0, lng: 0 }, // Default or previous coordinates
      error: {
        code: error.code,
        message: error.message,
      },
    }));
  };

  React.useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      }));
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
