import { put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getProfileService, updateProfileService } from '../services';
import { GENERAL_ERROR } from '../../constants';
import { getProfile, tokenExpired, setLoading, setUser } from '../actions';
import * as selectors from '../selectors';

export function* getProfileSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getProfileService);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        const user = yield select(selectors.user);
        const data = {
          ...response.data,
          access: user.access,
          refresh: user.refresh,
        };
        yield put(setUser(data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateProfileSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateProfileService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getProfile(null));
        yield call(toast.success, 'Profile updated!');
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
