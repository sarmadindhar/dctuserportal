import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getBusinessesService,
  addBusinessService,
  getBusinessService,
  updateBusinessService,
  deleteBusinessService,
  getReportService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getBusinessesSuccess,
  getBusinesses,
  getBusinessSuccess,
  tokenExpired,
  setLoading,
  getReportSuccess,
} from '../actions';

export function* getBusinessesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getBusinessesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getBusinessesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addBusinessSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addBusinessService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getBusinesses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getBusinessSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getBusinessesService, null);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        const business = response.data.filter((d: any) => d.id === payload.id);
        yield put(getBusinessSuccess(business[0]));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateBusinessSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(
      updateBusinessService,
      payload.id,
      payload.data
    );
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getBusinesses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteBusinessSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteBusinessService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getBusinesses(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getReportSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getReportService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getReportSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
