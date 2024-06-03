import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getTemplatesService,
  addTemplateService,
  getTemplateService,
  updateTemplateService,
  deleteTemplateService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getTemplatesSuccess,
  getTemplates,
  getTemplateSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getTemplatesSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getTemplatesService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getTemplatesSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addTemplateSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addTemplateService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getTemplates(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getTemplateSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getTemplateService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getTemplateSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateTemplateSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(
      updateTemplateService,
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
        yield put(getTemplates(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteTemplateSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteTemplateService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getTemplates(null));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
