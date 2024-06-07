import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  loginService,
  registerService,
  logoutService,
  forgotPasswordService,
  resetPasswordService,
  getRoleService,
  verifyOtpService,
  resendOtpService
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  setUser,
  setLoading,
  tokenExpired,
  getAuthUserRoleSuccess,
} from '../actions';


export function* loginSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(loginService, payload.user);
    if (!response || !response.status) {
      yield call(toast.error, response.message);
      yield put(setLoading(false));
    } else {
      const data = { ...response.data.user, ...response.data.tokens };
      sessionStorage.setItem('token', data.access.token);
      yield put(setUser(data));
      yield put(setLoading(false));

      payload.navigate('/user/dashboard');
    }
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield call(toast.error, GENERAL_ERROR);
  }
}


export function* registerSaga({ payload }: any): any {
  try {
    const response = yield call(registerService, payload.user);
    if (!response || !response.status) {
      yield call(toast.error, response.message);
    } else {
      payload.navigate(`/otp-verification?token=${response.data.token}&email=${response.data.email}`);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}


export function* verifyOtpSaga({ payload }: any): any {
  try {
    const response = yield call(verifyOtpService, payload.user);
    if (!response || !response.status) {
      yield call(toast.error, response.message);
    } else {
      yield call(toast.success, response.message);
      payload.navigate('/login');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}


export function* resendOtpSaga({ payload }: any): any {
  console.log('resend otp');
  try {
    const response = yield call(resendOtpService, payload.user);
    if (!response || !response.status) {
      yield call(toast.error, response.message);
    } else {
      yield call(toast.success, response.message);
      console.log(response);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* logoutSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(logoutService, payload.token);
    yield put(setLoading(false));
    if (!response.status) {
      yield call(toast.error, response.message);
    } else {
      sessionStorage.removeItem('token');
      yield put(setUser(null));
      if (payload.callback) {
        yield call(payload.callback, null);
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* forgotPasswordSaga({ payload }: any): any {
  try {
    const response = yield call(forgotPasswordService, payload.email);
    if (!response.status) {
      yield call(toast.error, response.message);
    } else {
      yield call(
        toast.info,
        'Check you mail inbox for password reset instructions'
      );
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* resetPasswordSaga({ payload }: any): any {
  try {
    const response = yield call(resetPasswordService, payload.token, {
      password: payload.password,
    });
    if (!response.status) {
      yield call(toast.error, response.message);
    } else {
      payload.navigate('/login');
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getAuthUserRoleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getRoleService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getAuthUserRoleSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
