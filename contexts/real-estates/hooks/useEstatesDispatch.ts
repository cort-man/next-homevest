import React, { useContext } from 'react';
import { EstatesDispatchContext } from 'contexts/real-estates/context';

const useEstatesDispatch = (): React.Dispatch<never> | Record<never, never> =>
  useContext(EstatesDispatchContext);

export default useEstatesDispatch;
