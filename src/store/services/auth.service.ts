import NetworkUtil from '../../utils/NetworkUtil';

export const loginService = (request: any) => {
  return NetworkUtil('POST', 'auth/login', request);
};



export const registerService = (request: any) => {
  return NetworkUtil('POST', 'userPortal/register', request);
};


export const verifyOtpService = (request: any) => {
  return NetworkUtil('POST', 'userPortal/verify-otp', request);
};


export const resendOtpService = (request: any) => {
  return NetworkUtil('POST', 'userPortal/resend-otp', request);
};

export const ADLoginService = (token: string) => {
  return NetworkUtil('POST', 'auth/adLogin', null, null, false, {
    Authorization: `Bearer ${token}`,
  });
};

export const logoutService = (token: string) => {
  return NetworkUtil('POST', 'auth/logout', { refresh_token: token });
};

export const forgotPasswordService = (email: string) => {
  return NetworkUtil('POST', 'auth/forgot-password', { email });
};

export const resetPasswordService = (token: string, request: any) => {
  return NetworkUtil('POST', 'auth/reset-password', request, { token });
};
