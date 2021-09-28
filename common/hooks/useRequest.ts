import { useCallback, useEffect, useState } from 'react';

interface IUseRequestReturn<Args, ReturnData> {
  loading: boolean;
  error: Error | undefined;
  data: ReturnData | undefined;
  setRequest: (args: Args | null) => void;
}

const useRequest = <Args, ReturnData>(
  asyncFunc: (args: Args) => Promise<ReturnData>
): IUseRequestReturn<Args, ReturnData> => {
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
  }, [request, asyncFunc]);

  useEffect(() => {
    makeRequest();
  }, [makeRequest]);

  return { loading, error, data, setRequest };
};

export { useRequest };
