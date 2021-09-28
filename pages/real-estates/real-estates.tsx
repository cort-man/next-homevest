import React, { useEffect } from 'react';
import { useEstatesGetAllRequest } from 'services/estates';

export const RealEstates: React.FC = () => {
  const { data, loading, makeControlledRequest, error } =
    useEstatesGetAllRequest();

  useEffect(() => {
    makeControlledRequest();
  }, [makeControlledRequest]);

  console.log(data, loading, error);

  return <div>{/* <RealEstatesList estates={estatesState.data} />*/}</div>;
};
