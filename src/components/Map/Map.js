import React from "react";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayerThunk } from "../../redux/thunks/playersThunks";
import MapStyle from "./MapStyle";

const GoogleMap = () => {
  const { id } = useParams();
  const { player } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const positionEvent = [player.latitude, player.longitude];

  useEffect(() => {
    dispatch(getPlayerThunk(id));
  }, [dispatch, id]);

  return (
    <MapStyle>
      <MapContainer
        center={positionEvent}
        zoom={17}
        scrollWheelZoom={true}
        className="leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionEvent}>
          <Popup>
            <ul>
              <li>Start Event: {player.timeEvent}</li>
              <li>{player.descriptionEvent}</li>
              <li>Organizer: {player.name}</li>
              <li>Tel: {player.contactNumber}</li>
            </ul>
          </Popup>
        </Marker>
      </MapContainer>
    </MapStyle>
  );
};

export default GoogleMap;
