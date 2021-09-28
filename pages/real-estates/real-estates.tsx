import React, { useEffect } from 'react';
import { EstatesService } from 'services';
import RealEstatesList from 'modules/real-estates-list';
import { buildUseRequest } from 'common/hooks/useRequest';
import { estatesApi } from 'api';
import { IRealEstate } from 'common/interfaces';

import { EstatesApi } from 'common/enums/api';

const { ROOT, IN_AREA } = EstatesApi;

export const RealEstates: React.FC = () => {
  /*  const estatesState = useEstates();

  const dispatch = useEstatesDispatch();

  useEffect(() => {
    const estatesService = new EstatesService(dispatch);
    estatesService.getAll();
  }, [dispatch]);*/

  const useRequest = buildUseRequest(async () =>
    estatesApi.get<IRealEstate[]>(ROOT)
  );

  const { data, loading, setRequest, error } = useRequest();

  useEffect(() => {
    setRequest(undefined);
  }, [setRequest]);

  console.log(data, loading, error);

  return <div>{/* <RealEstatesList estates={estatesState.data} />*/}</div>;
};
