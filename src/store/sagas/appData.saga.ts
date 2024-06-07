import { call, put } from 'redux-saga/effects';
import { getRegionsSuccess, setLoading, tokenExpired } from '../actions';
import { getRegions } from '../services';
import { toast } from 'react-toastify';
import { GENERAL_ERROR } from '../../constants';

export function* getRegionsSaga({ payload }: any): any {
  try {
    const response = yield call(getRegions, payload.query);
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getRegionsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}