import { EstatesReducers } from 'contexts/real-estates/constants/estates-reducers';
import { StateError } from 'common/types/state-error';
import { IRealEstate } from 'common/interfaces';

const {
  ESTATES_ERROR,
  ESTATES_REQUEST,
  GET_ALL_ESTATES_SUCCESS,
  ESTATES_IDLE,
} = EstatesReducers;

export type EstatesAction =
  | { type: typeof ESTATES_REQUEST }
  | { type: typeof ESTATES_IDLE }
  | { type: typeof GET_ALL_ESTATES_SUCCESS; payload: IRealEstate[] }
  | { type: typeof ESTATES_ERROR; payload: StateError };
