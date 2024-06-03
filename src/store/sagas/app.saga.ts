import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { uploadFileService } from '../services';
import { GENERAL_ERROR } from '../../constants';
import { setLoading, tokenExpired, setFile } from '../actions';
import i18n from 'i18next';

export function* fileUploadSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(uploadFileService, payload);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.path) {
        yield call(toast.error, response.message);
      } else {
        yield put(setFile(response.path));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}


export function* setLocaleSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    i18n.changeLanguage(payload);
    console.log('localessssss', payload);
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
