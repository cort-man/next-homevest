import { EstatesReducers } from 'contexts/real-estates/constants/estates-reducers';
import { EstatesState } from 'contexts/real-estates/constants/estates-state.type';
import { EstatesAction } from 'contexts/real-estates/constants/estates-action.type';

const {
  GET_ALL_ESTATES_REQUEST,
  GET_ALL_ESTATES_ERROR,
  GET_ALL_ESTATES_SUCCESS,
  ESTATES_IDLE,
} = EstatesReducers;

const rootReducer = (
  state: EstatesState,
  action: EstatesAction
): EstatesState => {
  switch (action.type) {
    case GET_ALL_ESTATES_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case GET_ALL_ESTATES_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        data: action.payload,
      };
    case GET_ALL_ESTATES_ERROR:
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
    default: {
      return state;
    }
  }
};

export default rootReducer;
