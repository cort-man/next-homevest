import { useCallback, useState } from 'react';
import { FetchStatus } from 'common/types';

export type RequestArgs<Args> = Args | undefined;

type AsyncFunction<Args, ReturnData> = (
  args?: RequestArgs<Args>
) => Promise<ReturnData>;

export type AsyncFunctionResult<ReturnData> = ReturnData | undefined;

export type ControlledAsyncFunction<Args> = (args?: RequestArgs<Args>) => void;

export interface IUseRequestReturn<Args, ReturnData> {
  status: FetchStatus;
  error: Error | undefined;
  data: AsyncFunctionResult<ReturnData>;
  makeControlledRequest: ControlledAsyncFunction<Args>;
  setStatusIdle: () => void;
}

export type UseRequestType<Args, ReturnData> = () => IUseRequestReturn<
  Args,
  ReturnData
>;

const buildUseRequest = <Args, ReturnData>(
  asyncFunc: AsyncFunction<Args, ReturnData>
): UseRequestType<Args, ReturnData> => {
  return (): IUseRequestReturn<Args, ReturnData> => {
    const [status, setStatus] = useState<FetchStatus>('idle');
    const [data, setData] = useState<ReturnData | undefined>();
    const [error, setError] = useState<Error>();

    const setStatusIdle = () => {
      setStatus('idle');
      setError(undefined);
    };

    const makeControlledRequest = useCallback(
      async (args?: RequestArgs<Args>) => {
        setStatus('loading');

        try {
          const data = await asyncFunc(args);
          setData(data);
          setStatus('success');
        } catch (error) {
          setStatus('error');
          setError(error as Error);
        }
      },
      []
    );

    return { status, setStatusIdle, error, data, makeControlledRequest };
  };
};

export { buildUseRequest };
