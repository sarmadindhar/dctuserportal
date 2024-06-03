import { put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  getWorkflowsService,
  addWorkflowService,
  getWorkflowService,
  updateWorkflowService,
  deleteWorkflowService,
} from '../services';
import { GENERAL_ERROR } from '../../constants';
import {
  getWorkflowsSuccess,
  getWorkflows,
  getWorkflowSuccess,
  tokenExpired,
  setLoading,
} from '../actions';

export function* getWorkflowsSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getWorkflowsService, payload.query);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else { 
        yield put(getWorkflowsSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* addWorkflowSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(addWorkflowService, payload.data);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getWorkflows({sortBy: 'license_type_id:asc'}));
         yield call(toast.success, response.message);
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* getWorkflowSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(getWorkflowService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        console.log(response.data);
        yield put(getWorkflowSuccess(response.data));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* updateWorkflowSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(
      updateWorkflowService,
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
        yield put(getWorkflows({sortBy: 'license_type_id:asc'}));
        yield call(toast.success, response.message);

      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}

export function* deleteWorkflowSaga({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const response = yield call(deleteWorkflowService, payload.id);
    yield put(setLoading(false));
    if (!response) {
      yield put(tokenExpired());
    } else {
      if (!response.status) {
        yield call(toast.error, response.message);
      } else {
        yield put(getWorkflows({sortBy: 'license_type_id:asc'}));
      }
    }
  } catch (error) {
    console.log(error);
    yield call(toast.error, GENERAL_ERROR);
  }
}
