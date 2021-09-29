import React, { useEffect } from 'react';
import { useEstatesGetAllRequest } from 'services/estates';
import RealEstatesList from 'modules/real-estates-list';
import Test from 'common/hoc/withHandling';

export const RealEstates: React.FC = () => {
  const { data, makeControlledRequest } = useEstatesGetAllRequest();

  useEffect(() => {
    makeControlledRequest();
  }, [makeControlledRequest]);

  return (
    <div>
      <RealEstatesList estates={data} />
      <Test a={''} b={''} />
    </div>
  );
};
