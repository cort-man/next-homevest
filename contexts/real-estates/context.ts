import React, { createContext } from 'react';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';
import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';

const defaultEstatesState: EstatesState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const EstatesContext = createContext(defaultEstatesState);
const EstatesDispatchContext = createContext(
  {} as React.Dispatch<EstatesActionType>
);

export { EstatesContext, EstatesDispatchContext, defaultEstatesState };
