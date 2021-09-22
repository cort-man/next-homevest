import { createContext } from 'react';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';

const defaultEstatesState: EstatesState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const EstatesContext = createContext(defaultEstatesState);
const EstatesDispatchContext = createContext({});

export { EstatesContext, EstatesDispatchContext, defaultEstatesState };
