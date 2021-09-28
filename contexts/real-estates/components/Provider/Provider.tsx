import React, { useReducer } from 'react';
import rootReducer from 'contexts/real-estates/reducer';
import {
  EstatesDispatchContext,
  EstatesContext,
  defaultEstatesState,
} from 'contexts/real-estates/context';

const EstatesProvider: React.FC = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(rootReducer, defaultEstatesState);

  return (
    <EstatesDispatchContext.Provider value={dispatch}>
      <EstatesContext.Provider value={state}>
        {children}
      </EstatesContext.Provider>
    </EstatesDispatchContext.Provider>
  );
};

export default EstatesProvider;
