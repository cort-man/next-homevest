/*
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactMapGL, { MapRef, WebMercatorViewport } from 'react-map-gl';
import { ENV } from 'common/enums';
import { IRealEstate, MapViewport } from 'common/interfaces';
import { useEstatesDispatch } from 'contexts/real-estates/hooks';
import { IViewPoints } from 'common/interfaces/view-points.interface';
import { EstatesService } from 'services';
import EstateMarker from 'modules/estates-map/estate-marker';
import EstatePopup from 'modules/estates-map/estate-popup';

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
  const [selectedProperty, setSelectedProperty] =
    React.useState<IRealEstate | null>(null);

  const dispatch = useEstatesDispatch();

  const propertiesMapRef = useRef<MapRef>(null);

  const fetchPropertiesInArea = () => {
    const mapWidth = propertiesMapRef.current?.getMap()?.painter?.width;
    const mapHeight = propertiesMapRef.current?.getMap()?.painter?.height;

    const viewport = {
      ...mapViewport,
      width: mapViewport.width || mapWidth,
      height: mapViewport.height || mapHeight,
    };

    const [leftDownPoint, rightUpPoint] = new WebMercatorViewport(
      viewport
    ).getBounds();

    fetchPropertiesInAreaMethod({ leftDownPoint, rightUpPoint });
  };

  useEffect(() => {
    const estatesService = new EstatesService(dispatch);
    estatesService.getAll();
    //fetchPropertiesInArea();
  }, [dispatch]);

  const fetchPropertiesInAreaMethod = useCallback(
    (regFields: IViewPoints) => {
      const estatesService = new EstatesService(dispatch);
      estatesService.getInArea(regFields);
    },
    [dispatch]
  );

  const propertiesMarkers = useMemo(
    () =>
      estates.map((estate) => (
        <EstateMarker
          key={estate.id}
          property={estate}
          setSelectedProperty={setSelectedProperty}
        />
      )),
    [estates]
  );

  const selectedEstatePopup = useMemo(
    () =>
      selectedProperty ? (
        <EstatePopup
          selectedProperty={selectedProperty}
          setSelectedProperty={setSelectedProperty}
        />
      ) : null,
    [selectedProperty]
  );

  return (
    <ReactMapGL
      {...mapViewport}
      ref={propertiesMapRef}
      mapStyle="mapbox://styles/ironwood/cktwka3jf0uqp18s50ulqeckk"
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={ENV.MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport: MapViewport) =>
        setViewport(nextViewport)
      }
    >
      {propertiesMarkers}
      {selectedEstatePopup}
    </ReactMapGL>
  );
};

export default EstatesMap;
*/

import React, { useMemo } from 'react';
import { AppConfig } from 'config';
import { IRealEstate } from 'common/interfaces';
import EstateMarker from 'modules/estates-map/estate-marker';
import EstatePopup from 'modules/estates-map/estate-popup';
import styles from 'styles/modules/estates-map/estates-map.module.scss';
import GoogleMapReact from 'google-map-react';

const center = {
  lat: 50.4501,
  lng: 30.5234,
};

type EstatesMapProps = {
  estates: IRealEstate[];
};

const EstatesMap: React.FC<EstatesMapProps> = ({ estates }) => {
  const [selectedProperty, setSelectedProperty] =
    React.useState<IRealEstate | null>(null);

  const propertiesMarkers = useMemo(
    () =>
      estates.map((estate) => (
        <EstateMarker
          lat={estate.coordinates[0]}
          lng={estate.coordinates[1]}
          key={estate.id}
          property={estate}
          setSelectedProperty={setSelectedProperty}
        />
      )),
    [estates]
  );

  const selectedEstatePopup = useMemo(
    () =>
      selectedProperty ? (
        <EstatePopup
          selectedProperty={selectedProperty}
          setSelectedProperty={setSelectedProperty}
        />
      ) : null,
    [selectedProperty]
  );

  return (
    <div className={styles.estates_map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: AppConfig.GOOGLE_MAPS_API_KEY }}
        center={center}
        zoom={10}
      >
        {propertiesMarkers}
        {selectedEstatePopup}
      </GoogleMapReact>
    </div>
  );
};

export default React.memo(EstatesMap);
