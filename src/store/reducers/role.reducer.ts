import { GET_ROLES_NAVIGATION_SUCCESS, GET_ROLES_SUCCESS, GET_ROLE_SUCCESS } from '../types';

const INITIAL_STATE = {
  roles: { results: [] },
  role: null,
};

const roleReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case GET_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case GET_ROLES_NAVIGATION_SUCCESS:
      return { ...state, rolesNavigation: action.payload };
    default:
      return state;
  }
};

export { roleReducer };
