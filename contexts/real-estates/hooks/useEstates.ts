import { useContext } from 'react';
import { EstatesContext } from 'contexts/real-estates/context';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';

const useEstates = (): EstatesState => useContext(EstatesContext);

export default useEstates;
