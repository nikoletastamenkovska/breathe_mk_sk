import React from "react";
import { LocationState } from "../types/geolocation";

export const useGeolocation = (requestedPermission: boolean) => {
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
      coordinates: { lat: 0, lng: 0 },
      error: {
        code: error.code,
        message: error.message,
      },
    }));
  };

  React.useEffect(() => {
    let watchId: number | null = null;

    if (requestedPermission && "geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(onSuccess, onError, {
        enableHighAccuracy: true,
      });
    } else {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      }));
    }

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [requestedPermission]);

  return location;
};

export default useGeolocation;
