import { useCallback, useEffect, useState } from 'react';

interface IUseRequestReturn<Args, ReturnData> {
  loading: boolean;
  error: Error | undefined;
  data: ReturnData | undefined;
  setRequest: (args: Args | null) => void;
}

type AsyncFunction<Args, ReturnData> = (args: Args) => Promise<ReturnData>;

const buildUseRequest = <Args, ReturnData>(
  asyncFunc: AsyncFunction<Args, ReturnData>
) => {
  const useRequest = (): IUseRequestReturn<Args, ReturnData> => {
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState<Args | null>(null);
    const [data, setData] = useState<ReturnData | undefined>();
    const [error, setError] = useState<Error>();

    const makeRequest = useCallback(async () => {
      if (request === null) return;

      setLoading(true);

      try {
        const data = await asyncFunc(request);
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
        setRequest(null);
      }
    }, [request]);

    useEffect(() => {
      makeRequest();
    }, [makeRequest]);

    return { loading, error, data, setRequest };
  };

  return useRequest;
};

export { buildUseRequest };
