import React from "react";
import { LatLng } from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface LocationMarkerProps {
  icon: L.Icon<L.IconOptions>;
  setPosition: React.Dispatch<React.SetStateAction<LatLng | null>>;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
  icon,
  setPosition,
}) => {
  const [position, setPositionState] = React.useState<LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition((prevPosition) => {
        console.log(e.latlng);
        return e.latlng;
      });
      setPositionState((prevPosition) => {
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
