import { GET_BUSINESSES_SUCCESS, GET_BUSINESS_SUCCESS, GET_REPORT_SUCCESS } from '../types';

const INITIAL_STATE = {
  businesses: { results: [] },
  business: null,
  reportData: { results: [] },
};

const businessReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_BUSINESSES_SUCCESS:
      return { ...state, businesses: action.payload };
    case GET_BUSINESS_SUCCESS:
      return { ...state, business: action.payload };
    case GET_REPORT_SUCCESS:
      return { ...state, reportData: action.payload };
    default:
      return state;
  }
};

export { businessReducer };
