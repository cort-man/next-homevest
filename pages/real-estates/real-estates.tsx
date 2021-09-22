import React, { useEffect } from 'react';
import { EstatesService } from 'services';
import RealEstatesList from 'modules/real-estates-list';
import { useEstates, useEstatesDispatch } from 'contexts/real-estates/hooks';

export const RealEstates: React.FC = () => {
  const estatesState = useEstates();

  const dispatch = useEstatesDispatch();

  useEffect(() => {
    const estatesService = new EstatesService(dispatch);
    estatesService.getAll();
  }, [dispatch]);

  return (
    <div>
      <RealEstatesList estates={estatesState.data} />
    </div>
  );
};
