import { GET_LICENSES_SUCCESS, GET_LICENSE_SUCCESS } from '../types';

const INITIAL_STATE = {
  licenses: { results: [] },
  license: null,
};

const licenseReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LICENSES_SUCCESS:
      return { ...state, licenses: action.payload };
    case GET_LICENSE_SUCCESS:
      return { ...state, license: action.payload };
    default:
      return state;
  }
};

export { licenseReducer };
