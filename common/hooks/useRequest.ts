import { useCallback, useState } from 'react';

export type RequestArgs<Args> = Args | undefined;

type AsyncFunction<Args, ReturnData> = (
  args?: RequestArgs<Args>
) => Promise<ReturnData>;

export type AsyncFunctionResult<ReturnData> = ReturnData | undefined;

export type ControlledAsyncFunction<Args> = (args?: RequestArgs<Args>) => void;

interface IUseRequestReturn<Args, ReturnData> {
  loading: boolean;
  error: Error | undefined;
  data: AsyncFunctionResult<ReturnData>;
  makeControlledRequest: ControlledAsyncFunction<Args>;
}

export type UseRequestType<Args, ReturnData> = () => IUseRequestReturn<
  Args,
  ReturnData
>;

const buildUseRequest = <Args, ReturnData>(
  asyncFunc: AsyncFunction<Args, ReturnData>
): UseRequestType<Args, ReturnData> => {
  return (): IUseRequestReturn<Args, ReturnData> => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ReturnData | undefined>();
    const [error, setError] = useState<Error>();

    const makeControlledRequest = useCallback(
      async (args?: RequestArgs<Args>) => {
        setLoading(true);

        try {
          const data = await asyncFunc(args);
          setData(data);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      },
      []
    );

    return { loading, error, data, makeControlledRequest };
  };
};

export { buildUseRequest };
