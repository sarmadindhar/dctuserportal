import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAILED,
  USER_TOKEN_EXPIRED,
  GET_AUTH_USER_ROLE_SUCCESS,
  SET_USER_SOCKET_ID,
  VERIFY_OTP,
  RESEND_OTP
} from '../types';

const INITIAL_STATE = {
  user: null,
  role: null,
  socketId: null
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return { ...state, user: action.payload };
    case USER_LOGOUT_SUCCESS:
    case USER_LOGIN_FAILED:
    case USER_TOKEN_EXPIRED:
      return { ...state, user: null };
    case GET_AUTH_USER_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case SET_USER_SOCKET_ID:
      return { ...state, socketId: action.payload };
    default:
      return state;
  }
};

export { authReducer };
