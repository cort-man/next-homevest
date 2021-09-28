import { useCallback, useState } from 'react';

type RequestArgs<Args> = Args | undefined;

interface IUseRequestReturn<Args, ReturnData> {
  loading: boolean;
  error: Error | undefined;
  data: ReturnData | undefined;
  makeControlledRequest: (args?: RequestArgs<Args>) => void;
}

type AsyncFunction<Args, ReturnData> = (
  args: Args | undefined
) => Promise<ReturnData>;

const buildUseRequest = <Args, ReturnData>(
  asyncFunc: AsyncFunction<Args, ReturnData>
): (() => IUseRequestReturn<Args, ReturnData>) => {
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
