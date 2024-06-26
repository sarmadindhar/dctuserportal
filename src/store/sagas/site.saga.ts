import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { getCmsContentService } from '../services';
import { GENERAL_ERROR } from '../../constants';
import { setLoading, tokenExpired, getCmsContentSuccess } from '../actions';
export function* getCmsContentSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getCmsContentService, null);
    yield put(setLoading(false));
    if (!response) {
      yield put(setLoading(false));
      console.log('tabahi');
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getCmsContentSuccess({ payload: response.data }));
      }
    }
  } catch (error) {
    console.log(error);
    yield put(setLoading(false));
    yield call(toast.error, GENERAL_ERROR);
  }
}