import React, { ComponentType, ReactElement } from 'react';
import {
  AsyncFunction,
  buildUseRequest,
  IUseRequestReturn,
} from 'common/hooks';

type WithHandlingInjectedProps<Args, ReturnData> = Partial<
  IUseRequestReturn<Args, ReturnData>
>;

export type WithHandlingProps<ComponentProps, Args, ReturnValue> =
  ComponentProps & WithHandlingInjectedProps<Args, ReturnValue>;

export const withHandling = <Args, ReturnData>(
  useRequestMethod: AsyncFunction<Args, ReturnData>
) => {
  const useRequest = buildUseRequest(useRequestMethod);

  return <T extends WithHandlingInjectedProps<Args, ReturnData>>(
    Component: ComponentType<T>
  ) => {
    const ComponentWithHandling = (hocProps: T): ReactElement<T> => {
      const { makeControlledRequest, data, setStatusIdle, status, error } =
        useRequest();

      return (
        <Component
          {...(hocProps as T)}
          setStatusIdle={setStatusIdle}
          error={error}
          status={status}
          data={data}
          makeControlledRequest={makeControlledRequest}
        />
      );
    };

    return ComponentWithHandling;
  };
};
