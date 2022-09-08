import React from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet"

const Map = (props) => {
  const position = [props.lat, props.lng];
  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ minHeight: "100vh", Width: "100vw" }}
      className ="mapcont"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;