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

import React, { Component, ComponentType, ReactElement } from 'react';
import { NextComponentType } from 'next';

interface InjectedProps {
  requestMethod: string;
}

export function withHandling<T>(Component: NextComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (hocProps: T): ReactElement<T> => {
    console.log('123123123');

    return <Component {...(hocProps as T)} />;
  };
}

const Test: React.FC = () => {
  console.log('0987');

  return <div>123</div>;
};

export default withHandling(Test);
