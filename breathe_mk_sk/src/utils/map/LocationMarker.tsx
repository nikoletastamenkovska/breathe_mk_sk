import { LatLng } from "leaflet";
import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface LocationMarkerProps {
  icon: L.Icon<L.IconOptions>;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({ icon }) => {
  const [position, setPosition] = React.useState<LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition((prevPosition) => {
        console.log(e.latlng);
        return e.latlng;
      });
    },
  });

  return position ? (
    <Marker position={position} icon={icon}>
      <Popup>`You chose this: ${position.toString()}`</Popup>
    </Marker>
  ) : null;
};

export default LocationMarker;
