import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGIN_FAILED,
  USER_TOKEN_EXPIRED,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_AUTH_USER_ROLE,
  GET_AUTH_USER_ROLE_SUCCESS,
  AD_LOGIN,
  SET_USER_SOCKET_ID,
  USER_REGISTER,
  VERIFY_OTP,
  RESEND_OTP
} from '../types';

export const loginUser = (user: any , navigate:any) => {
  return {
    type: USER_LOGIN,
    payload: { user, navigate },
  };
};



export const registerUser = (user: any , navigate:any) => {
  return {
    type: USER_REGISTER,
    payload: { user, navigate },
  };
};


export const verifyOtp = (user: any , navigate:any) => {
  console.log(user);

  return {
    type: VERIFY_OTP,
    payload: { user, navigate },
  };
};


export const resendOtp = (user: any) => {
  console.log(user);
  return {
    type: RESEND_OTP,
    payload: { user },
  };
};


export const ADLogin = (token: string, callback?: any) => {
  return {
    type: AD_LOGIN,
    payload: { token, callback },
  };
};

export const setUser = (user: any) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const logout = (token: any, callback?: any) => {
  return {
    type: USER_LOGOUT,
    payload: { token, callback },
  };
};

export const logoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const loginFailed = () => {
  return {
    type: USER_LOGIN_FAILED,
  };
};

export const tokenExpired = () => {
  return {
    type: USER_TOKEN_EXPIRED,
  };
};

export const forgotPassword = (email: any, navigate: any) => {
  return {
    type: FORGOT_PASSWORD,
    payload: { email, navigate },
  };
};

export const resetPassword = (token: any, password: any, navigate: any) => {
  return {
    type: RESET_PASSWORD,
    payload: { token, password, navigate },
  };
};

export const getAuthUserRole = (query: any) => {
  return {
    type: GET_AUTH_USER_ROLE,
    payload: { query },
  };
};

export const getAuthUserRoleSuccess = (data: any) => {
  return {
    type: GET_AUTH_USER_ROLE_SUCCESS,
    payload: data,
  };
};

export const setUserSocketId = (socketId: any) => ({
  type: SET_USER_SOCKET_ID,
  payload: socketId,
});
