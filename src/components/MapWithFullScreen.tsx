import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapWithOptions.css';

interface MapWithOptionsProps {
  location: [number, number];
}

const MapWithOptions: React.FC<MapWithOptionsProps> = ({ location }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && mapRef.current) {
      mapRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const [lat, lng] = location;
  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div className="map-wrapper">
        <div className="textsMap">
        <h3>Anapis 414</h3>
              <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="google-maps-link"
      >
        Open in Google Maps
      </a>
      </div>
      <div ref={mapRef} className={`map-container ${isFullscreen ? 'fullscreen' : ''}`}>
        <MapContainer center={location} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={location}>
            <Popup>Giza</Popup>
          </Marker>
        </MapContainer>

        <button
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          className="fullscreen-toggle-btn"
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          ⤢
        </button>
      </div>
    </div>
  );
};

export default MapWithOptions;
