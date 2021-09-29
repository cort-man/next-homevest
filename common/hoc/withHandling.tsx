import React, { ComponentType, ReactElement, useEffect } from 'react';
import { ControlledAsyncFunction, UseRequestType } from 'common/hooks';
import { useEstatesGetAllRequest } from 'services/estates';
import { IRealEstate } from 'common/interfaces';

type WithHandlingInjectedProps<Args, ReturnData> = {
  requestMethod?: ControlledAsyncFunction<Args>;
  data?: ReturnData;
};

type Status = 'error' | 'loading' | 'idle';

const withHandling =
  <Args, ReturnData>(useRequestWithMethod: UseRequestType<Args, ReturnData>) =>
  <T extends WithHandlingInjectedProps<Args, ReturnData>>(
    Component: ComponentType<T>
  ) =>
  (hocProps: T): ReactElement<T> => {
    const { makeControlledRequest, data, loading, error } =
      useRequestWithMethod();

    return (
      <Component
        {...(hocProps as T)}
        data={data}
        requestMethod={makeControlledRequest}
      />
    );
  };

type ITestProps = {
  a: string;
  b: string;
};

type WithHandlingProps<ComponentProps, Args, ReturnValue> = ComponentProps &
  WithHandlingInjectedProps<Args, ReturnValue>;

const Test: React.FC<WithHandlingProps<ITestProps, unknown, IRealEstate[]>> = ({
  data,
  requestMethod,
}) => {
  useEffect(() => {
    if (requestMethod) requestMethod();
  }, [requestMethod]);

  console.log(data);
  return <div>123</div>;
};

export default withHandling(useEstatesGetAllRequest)(Test);
