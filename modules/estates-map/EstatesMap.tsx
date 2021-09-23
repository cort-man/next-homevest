import React from 'react';
import ReactMapGL from 'react-map-gl';
import { ENV } from 'common/enums';
import { IRealEstate, MapViewport } from 'common/interfaces';

type EstatesMapProps = {
  mapViewport: MapViewport;
  setViewport: (viewport: MapViewport) => void;
  estates: IRealEstate[];
};

const EstatesMap: React.FC<EstatesMapProps> = ({
  mapViewport,
  setViewport,
  estates,
}) => {
  return (
    <ReactMapGL
      {...mapViewport}
      mapStyle="mapbox://styles/ironwood/cktwka3jf0uqp18s50ulqeckk"
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport: MapViewport) =>
        setViewport(nextViewport)
      }
    />
  );
};

export default EstatesMap;
