import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getHolidaysService,
  addHolidayService,
  getHolidayService,
  updateHolidayService,
  deleteHolidayService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getHolidaysSuccess,
  getHolidays,
  getHolidaySuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getHolidaysSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getHolidaysService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getHolidaysSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addHolidaySaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addHolidayService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getHolidays(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getHolidaySaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getHolidayService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getHolidaySuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateHolidaySaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateHolidayService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getHolidays(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteHolidaySaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteHolidayService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getHolidays(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
