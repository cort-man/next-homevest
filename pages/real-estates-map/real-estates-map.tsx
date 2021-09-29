import React, { useEffect, useState } from 'react';
import EstatesMap from 'modules/estates-map/estates-map';
import { IRealEstate, MapViewport } from 'common/interfaces';
import { withHandling, WithHandlingProps } from 'common/hoc';
import { EstatesService } from 'services';

const defaultMapValue: MapViewport = {
  latitude: 50.4501,
  longitude: 30.5234,
  zoom: 10,
};

type RealEstatesProps = WithHandlingProps<unknown, unknown, IRealEstate[]>;

const RealEstatesMap: React.FC<RealEstatesProps> = ({
  data,
  makeControlledRequest,
}) => {
  useEffect(() => {
    if (makeControlledRequest) makeControlledRequest();
  }, [makeControlledRequest]);

  if (!data) return <div>Loading...</div>;

  return <EstatesMap estates={data} />;
};

export default withHandling(EstatesService.getAll)(RealEstatesMap);
