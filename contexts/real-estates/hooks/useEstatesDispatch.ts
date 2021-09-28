import React, { useContext } from 'react';
import { EstatesDispatchContext } from 'contexts/real-estates/context';
import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';

const useEstatesDispatch = (): React.Dispatch<EstatesActionType> =>
  useContext(EstatesDispatchContext);

export default useEstatesDispatch;
