import { GET_TEMPLATES_SUCCESS, GET_TEMPLATE_SUCCESS } from '../types';

const INITIAL_STATE = {
  templates: { results: [] },
  template: null,
};

const templateReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_TEMPLATES_SUCCESS:
      return { ...state, templates: action.payload };
    case GET_TEMPLATE_SUCCESS:
      return { ...state, template: action.payload };
    default:
      return state;
  }
};

export { templateReducer };
