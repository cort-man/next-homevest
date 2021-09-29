import React, { useEffect } from 'react';
import RealEstatesList from 'modules/real-estates-list';
import { WithHandlingProps, withHandling } from 'common/hoc';
import { IRealEstate } from 'common/interfaces';
import { EstatesService } from 'services';

type RealEstatesProps = WithHandlingProps<unknown, unknown, IRealEstate[]>;

const RealEstates: React.FC<RealEstatesProps> = ({
  data,
  makeControlledRequest,
}) => {
  useEffect(() => {
    if (makeControlledRequest) makeControlledRequest();
  }, [makeControlledRequest]);

  return (
    <div>
      <RealEstatesList estates={data} />
    </div>
  );
};

export default withHandling(EstatesService.getAll)(RealEstates);
