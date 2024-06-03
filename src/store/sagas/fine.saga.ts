import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getFinesService,
  addFineService,
  getFineService,
  updateFineService,
  deleteFineService,
  calculateFineService,
  saveAsDraftFineService,
  updateFineByTier1FineService,
  updateFineStatusFineService,
  issueFineByTierTwoSagaFineService,
  updateLicenseStatusService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getFinesSuccess,
  getFines,
  getFineSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getFinesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getFinesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getFinesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addFineSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addFineService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Fine created successfully');
        yield put(getFines(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getFineSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getFineService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getFineSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateFineSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(updateFineService, payload.id, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        toast.success('Fine updated successfully');
        yield put(getFines(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteFineSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteFineService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getFines(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* calculateFineSaga({ payload }: any): any {
  try {
    // yield put(setLoading(true));
    const response = yield call(calculateFineService, payload.data);
    // yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
      payload.callback && payload.callback('error', null);
    } else {
      payload.callback && payload.callback(null, response.data?.fineDetails);
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* saveAsDraftFine({ payload }: any): any {
  try {
    const response = yield call(saveAsDraftFineService, payload.data);
    if (!response) {
      yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      if (!response.data) {
        toast.error(response.message);
        payload.callback && payload.callback(response.message, null);
      } else {
        toast.success('Fine saved as draft successfully');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* sendToTier2Fine({ payload }: any): any {
  try {
    const response = yield call(saveAsDraftFineService, payload.data);
    if (!response) {
      yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      if (!response.data) {
        toast.error(response.message);
        payload.callback && payload.callback(response.message, null);
      } else {
        toast.success('Fine sent to tier 2 successfully');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateFineByTier1Saga({ payload }: any): any {
  try {
    const response = yield call(updateFineByTier1FineService, payload.data);
    if (!response) {
      yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      if (!response.data) {
        toast.error(response.message);
        payload.callback && payload.callback(response.message, null);
      } else {
        toast.success('Fine Updated Successfully');
        payload.callback && payload.callback(null, response.data);
      }
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateFineStatusSaga({ payload }: any): any {
  try {
    const response = yield call(updateFineStatusFineService, payload.data);
    if (!response) {
      yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      if (!response.data) {
        toast.error(response.message);
        payload.callback && payload.callback(response.message, null);
      } else {
        payload.callback && payload.callback(null, response.data);
        yield call(toast.success, 'Fine Updated Successfully');
      }
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* issueFineByTierTwoSaga({ payload }: any): any {
  try {
    const response = yield call(
      issueFineByTierTwoSagaFineService,
      payload.data
    );
    if (!response || !response.status) {
      // yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      payload.callback && payload.callback(null, response.data);
      yield call(toast.success, 'Fine Updated Successfully');
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateLicenseStatusSaga({ payload }: any): any {
  try {
    const response = yield call(
      updateLicenseStatusService,
      payload.data
    );
    if (!response || !response.status) {
      // yield put(tokenExpired());
      payload.callback &&
        payload.callback(response.message || 'There was some error', null);
    } else {
      payload.callback && payload.callback(null, response.data);
      yield call(toast.success, 'License Updated Successfully');
    }
  } catch (error) {
    yield call(toast.error, GENERAL_ERROR);
  }
}
