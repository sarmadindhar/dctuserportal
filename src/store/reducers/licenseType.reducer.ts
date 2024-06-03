import { GET_LICENSE_TYPES_SUCCESS, GET_LICENSE_TYPE_SUCCESS } from '../types';

const INITIAL_STATE = {
  licenseTypes: { results: [] },
  licenseType: null,
};

const licenseTypeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LICENSE_TYPES_SUCCESS:
      return { ...state, licenseTypes: action.payload };
    case GET_LICENSE_TYPE_SUCCESS:
      return { ...state, licenseType: action.payload };
    default:
      return state;
  }
};

export { licenseTypeReducer };
