import React from 'react';
import { Marker } from '@react-google-maps/api';
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
      <Marker
        position={{ lat: latitude, lng: longitude }}
        onClick={() => setSelectedProperty(property)}
      />
    </div>
  );
};

export default EstateMarker;
