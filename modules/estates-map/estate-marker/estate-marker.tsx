import React from 'react';
import { Marker } from 'react-map-gl';
import { IRealEstate } from 'common/interfaces';
import classes from 'styles/modules/estates-map/estate-marker.module.scss';

type PropertyMarkerProps = {
  property: IRealEstate;
  setSelectedProperty: (property: IRealEstate) => void;
};

const EstateMarker: React.FC<PropertyMarkerProps> = ({
  property,
  setSelectedProperty,
}) => {
  const latitude = property.coordinates[0];
  const longitude = property.coordinates[1];

  return (
    <div className={classes.estates_marker}>
      <Marker longitude={longitude} latitude={latitude}>
        <div
          className={classes.estates_marker__icon}
          onClick={() => setSelectedProperty(property)}
        />
      </Marker>
    </div>
  );
};

export default EstateMarker;
