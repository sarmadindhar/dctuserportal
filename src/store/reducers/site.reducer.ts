import { GET_CMS_CONTENT_SUCCESS } from '../types';

const INITIAL_STATE = {
  cms:{
    license_types: [
    ],
    faq:{},
    guideline:{},
    home:{}
  }
};

const siteReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_CMS_CONTENT_SUCCESS:
      return { ...state,  cms: action.payload.payload };
    default:
      return state;
  }
};

export { siteReducer };
