import { GET_ALL_USERS_SUCCESS, GET_USERS_SUCCESS, GET_USER_SUCCESS } from '../types';

const INITIAL_STATE = {
  users: { results: [] },
  user: null,
  allUsers: []
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case GET_ALL_USERS_SUCCESS:
      return { ...state, allUsers: action.payload };
    default:
      return state;
  }
};

export { userReducer };
