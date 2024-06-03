import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getLicenseTypesService,
  addLicenseTypeService,
  getLicenseTypeService,
  updateLicenseTypeService,
  deleteLicenseTypeService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getLicenseTypesSuccess,
  getLicenseTypes,
  getLicenseTypeSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getLicenseTypesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getLicenseTypesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenseTypesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addLicenseTypeSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addLicenseTypeService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenseTypes(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getLicenseTypeSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getLicenseTypeService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getLicenseTypeSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateLicenseTypeSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(
      updateLicenseTypeService,
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
        yield put(getLicenseTypes(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteLicenseTypeSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteLicenseTypeService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getLicenseTypes(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
