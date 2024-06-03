import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getUsersService,
  addUserService,
  getUserService,
  updateUserService,
  deleteUserService,
  getAllUsersService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getUsersSuccess,
  getUsers,
  getUser,
  tokenExpired,
  setLoading,
  getAllUsersSuccess,
} from '../actions';

export function* getUsersSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getUsersService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getUsersSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getAllUsersSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getAllUsersService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getAllUsersSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addUserSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addUserService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getUsers(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getUserSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getUserService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getUser(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateUserSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateUserService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getUsers(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteUserSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteUserService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getUsers(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
