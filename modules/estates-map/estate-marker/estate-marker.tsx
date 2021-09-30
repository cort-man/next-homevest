import React from 'react';
import { IRealEstate } from 'common/interfaces';
import classes from 'styles/modules/estates-map/estate-marker.module.scss';

type PropertyMarkerProps = {
  property: IRealEstate;
  setSelectedProperty: (property: IRealEstate) => void;
  lat: number;
  lng: number;
};

const EstateMarker: React.FC<PropertyMarkerProps> = ({
  property,
  setSelectedProperty,
}) => {
  return (
    <div
      className={classes.estates_marker}
      onClick={() => setSelectedProperty(property)}
    />
  );
};

export default EstateMarker;
