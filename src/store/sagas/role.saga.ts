import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getRolesService,
  addRoleService,
  getRoleService,
  updateRoleService,
  deleteRoleService,
  getRolesNavigationService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getRolesSuccess,
  getRoles,
  getRoleSuccess,
  tokenExpired,
  setLoading,
  getRolesNavigationSuccess,
} from '../actions';

export function* getRolesNavigationSaga({payload}: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getRolesNavigationService, payload);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRolesNavigationSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getRolesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getRolesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRolesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addRoleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addRoleService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRoles(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getRoleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getRoleService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getRoleSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateRoleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateRoleService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRoles(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteRoleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteRoleService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRoles(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
