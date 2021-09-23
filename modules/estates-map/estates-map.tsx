import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import ReactMapGL, { MapRef, WebMercatorViewport } from 'react-map-gl';
import { ENV } from 'common/enums';
import { IRealEstate, MapViewport } from 'common/interfaces';
import { useEstatesDispatch } from 'contexts/real-estates/hooks';
import { IViewPoints } from 'common/interfaces/view-points.interface';
import { EstatesService } from 'services';
import EstateMarker from 'modules/estates-map/estate-marker';

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
    </ReactMapGL>
  );
};

export default EstatesMap;
