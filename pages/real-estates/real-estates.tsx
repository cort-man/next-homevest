import React from 'react';
import { useEstates } from 'contexts/real-estates/hooks';
import { ENV } from 'common/enums/env';

export const RealEstates: React.FC = () => {
  const state = useEstates();

  //console.log(state);

  console.log(ENV);
  //console.log(process.env);

  return <div>{ENV.API_ORIGIN_URL + '121'}</div>;
};
