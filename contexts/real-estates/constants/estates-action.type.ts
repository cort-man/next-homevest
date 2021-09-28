import { EstatesReducers } from 'contexts/real-estates/constants/estates-reducers';
import { StateError } from 'common/types/state-error';
import { IRealEstate } from 'common/interfaces';

const {
  ESTATES_ERROR,
  ESTATES_REQUEST,
  ESTATES_IDLE,
  GET_ALL_ESTATES_SUCCESS,
  GET_ESTATES_IN_AREA_SUCCESS,
} = EstatesReducers;

export type EstatesActionType =
  | { type: typeof ESTATES_REQUEST }
  | { type: typeof ESTATES_IDLE }
  | { type: typeof GET_ALL_ESTATES_SUCCESS; payload: IRealEstate[] }
  | { type: typeof GET_ESTATES_IN_AREA_SUCCESS; payload: IRealEstate[] }
  | { type: typeof ESTATES_ERROR; payload: StateError };
