import { GET_FINES_SUCCESS, GET_FINE_SUCCESS } from '../types';

const INITIAL_STATE = {
  fines: { results: [] },
  fine: null,
};

const fineReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_FINES_SUCCESS:
      return { ...state, fines: action.payload };
    case GET_FINE_SUCCESS:
      return { ...state, fine: action.payload };
    default:
      return state;
  }
};

export { fineReducer };
