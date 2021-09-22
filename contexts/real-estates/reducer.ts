import { EstatesReducers } from 'contexts/real-estates/constants/estates-reducers';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';
import { EstatesActionType } from 'contexts/real-estates/constants/estates-action.type';

const {
  ESTATES_REQUEST,
  ESTATES_ERROR,
  GET_ALL_ESTATES_SUCCESS,
  ESTATES_IDLE,
} = EstatesReducers;

const rootReducer = (
  state: EstatesState,
  action: EstatesActionType
): EstatesState => {
  switch (action.type) {
    case ESTATES_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case ESTATES_ERROR:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    case ESTATES_IDLE:
      return {
        ...state,
        status: 'idle',
        error: undefined,
      };
    case GET_ALL_ESTATES_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default rootReducer;
