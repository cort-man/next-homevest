/*import React from 'react';
import { useRequest } from 'common/hooks';
import { estatesApi } from 'api';
import { IRealEstate } from 'common/interfaces';

import { EstatesApi } from 'common/enums/api';

const { ROOT, IN_AREA } = EstatesApi;

const WithHandling = <P extends Record<string, any>>(
  Component: React.ComponentType<P>
): React.FC => {
  const sad = ({ method: any }) => {
    const { setRequest, loading, data, error } = useRequest(async () =>
      estatesApi.get<IRealEstate[]>(ROOT)
    );

    return (
      <div>
        <Component data={data} setRequest={setRequest} />
      </div>
    );
  };
};

export default WithHandling;*/
