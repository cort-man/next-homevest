import React, { useState } from 'react';
import EstatesMap from 'modules/estates-map/estates-map';
import { useEstates } from 'contexts/real-estates/hooks';
import { MapViewport } from 'common/interfaces';

const defaultMapValue: MapViewport = {
  latitude: 50.4501,
  longitude: 30.5234,
  zoom: 10,
};

const RealEstatesMap: React.FC = () => {
  const [mapViewport, setMapViewport] = useState(defaultMapValue);

  const estatesState = useEstates();

  return (
    <div>
      <EstatesMap
        estates={estatesState.data}
        mapViewport={mapViewport}
        setViewport={setMapViewport}
      />
    </div>
  );
};

export { RealEstatesMap };
