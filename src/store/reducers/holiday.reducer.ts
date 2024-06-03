import { GET_HOLIDAYS_SUCCESS, GET_HOLIDAY_SUCCESS } from '../types';

const INITIAL_STATE = {
  holidays: { results: [] },
  holiday: null,
};

const holidayReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_HOLIDAYS_SUCCESS:
      return { ...state, holidays: action.payload };
    case GET_HOLIDAY_SUCCESS:
      return { ...state, holiday: action.payload };
    default:
      return state;
  }
};

export { holidayReducer };
