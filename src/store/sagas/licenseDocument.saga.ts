import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { GENERAL_ERROR } from '../../constants';
import {
  tokenExpired,
  setLoading,
} from '../actions';
import { getLicenseDocumentsService } from '../services/licenseDocument.service';
import { getLicenseDocumentsSuccess } from '../actions/licenseDocument.action';

export function* getLicenseDocumentsSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getLicenseDocumentsService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenseDocumentsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}