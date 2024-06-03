import { GET_LICENSE_DOCUMENTS_SUCCESS } from '../types';

const INITIAL_STATE = {
  licenseDocuments: { results: [] },
};

const licenseDocumentReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_LICENSE_DOCUMENTS_SUCCESS:
      return { ...state, licenseDocuments: action.payload };
    default:
      return state;
  }
};

export { licenseDocumentReducer };
