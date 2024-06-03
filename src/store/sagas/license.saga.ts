import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getLicensesService,
  addLicenseService,
  getLicenseService,
  updateLicenseService,
  deleteLicenseService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getLicensesSuccess,
  getLicenses,
  getLicenseSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getLicensesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getLicensesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicensesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addLicenseSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addLicenseService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getLicenseSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getLicenseService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getLicenseSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateLicenseSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateLicenseService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteLicenseSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteLicenseService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
