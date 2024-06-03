import { GET_LICENSE_ACTIONS_SUCCESS } from '../types';

const INITIAL_STATE = {
  licenseActions: { results: [] },
};

const licenseActionReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LICENSE_ACTIONS_SUCCESS:
      return { ...state, licenseActions: action.payload };
    default:
      return state;
  }
};

export { licenseActionReducer };
