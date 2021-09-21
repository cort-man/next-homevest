import { createContext } from 'react';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';

const defaultEstatesState: EstatesState = {
  data: [],
  status: 'idle',
  error: undefined,
};

const estatesContext = createContext(defaultEstatesState);
const estatesDispatchContext = createContext({});

export { estatesContext, estatesDispatchContext };
