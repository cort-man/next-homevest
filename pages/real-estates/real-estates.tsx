import React from 'react';
import { useEstates } from 'contexts/real-estates/hooks';

export const RealEstates: React.FC = () => {
  const state = useEstates();

  console.log(state);

  return <div>123</div>;
};
