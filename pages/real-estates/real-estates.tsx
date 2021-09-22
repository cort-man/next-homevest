import React, { useEffect } from 'react';
import { useEstates, useEstatesDispatch } from 'contexts/real-estates/hooks';
import { EstatesService } from 'services';

export const RealEstates: React.FC = () => {
  const state = useEstates();

  const dispatch = useEstatesDispatch();

  console.log(state);

  useEffect(() => {
    const estatesService = new EstatesService(dispatch);
    estatesService.getAll();
  }, [dispatch]);

  return <div>Test</div>;
};
