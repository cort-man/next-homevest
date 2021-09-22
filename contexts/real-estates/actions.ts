import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';
import { EstatesReducers } from 'contexts/real-estates/constants/estates-reducers';
import { StateError } from 'common/types/state-error';
import { IRealEstate } from 'common/interfaces';

const {
  ESTATES_ERROR,
  ESTATES_REQUEST,
  GET_ALL_ESTATES_SUCCESS,
  ESTATES_IDLE,
} = EstatesReducers;

export const estatesRequest = (): EstatesActionType => ({
  type: ESTATES_REQUEST,
});

export const estatesIdle = (): EstatesActionType => ({ type: ESTATES_IDLE });

export const estatesError = (error: StateError): EstatesActionType => ({
  type: ESTATES_ERROR,
  payload: error,
});

export const getAllEstatesSuccess = (
  data: IRealEstate[]
): EstatesActionType => ({
  type: GET_ALL_ESTATES_SUCCESS,
  payload: data,
});
