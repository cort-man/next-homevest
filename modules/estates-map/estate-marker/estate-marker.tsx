import React from 'react';
import { IRealEstate } from 'common/interfaces';
import classes from 'styles/modules/estates-map/estate-marker.module.scss';
import { Coords } from 'google-map-react';

interface IPropertyMarkerProps extends Coords {
  property: IRealEstate;
  setSelectedProperty: (property: IRealEstate) => void;
}

const EstateMarker: React.FC<IPropertyMarkerProps> = ({
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
